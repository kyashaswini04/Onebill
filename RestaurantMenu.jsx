import { useMemo, useState } from "react";
import { X, Plus, Minus, ShoppingBag, Check, ArrowRight } from "lucide-react";
import menus from "./data/menu.js";

function normalizeItems(value) {
    const list = Array.isArray(value) ? value : Array.isArray(value?.items) ? value.items : [];
    return list.map((item, index) => {
        if (typeof item === "string") return { id: `${index}-${item}`, name: item, price: 0, description: "A menu favourite" };
        return {
            id: item.id ?? `${index}-${item.name ?? item.title ?? "item"}`,
            name: item.name ?? item.title ?? item.itemName ?? "Menu item",
            price: Number(item.price ?? item.cost ?? item.amount ?? 0),
            description: item.description ?? item.details ?? item.category ?? "Freshly made favourite",
            image: item.image ?? item.imageUrl ?? item.photo ?? "",
        };
    });
}

export default function RestaurantMenu({ restaurant, onClose, onAddToCart }) {
    const [added, setAdded] = useState({});
    const items = useMemo(() => normalizeItems(menus?.[restaurant?.name] ?? menus?.[restaurant?.id] ?? []), [restaurant]);

    function addItem(item) {
        onAddToCart?.({ name: item.name, price: item.price });
        setAdded((current) => ({ ...current, [item.id]: true }));
        window.setTimeout(() => setAdded((current) => ({ ...current, [item.id]: false })), 1100);
    }

    return (
        <div className="checkout-backdrop menu-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose?.(); }}>
            <section className="onebill-menu-modal" role="dialog" aria-modal="true" aria-labelledby="restaurant-menu-title">
                <div className="onebill-menu-head">
                    <div className="onebill-menu-restaurant-image">
                        {restaurant?.image ? <img src={restaurant.image} alt={`${restaurant.name} food`} /> : <span>{restaurant?.emoji ?? "🍽️"}</span>}
                    </div>
                    <div className="onebill-menu-heading"><span className="section-kicker">EXPLORE THE MENU</span><h2 id="restaurant-menu-title">{restaurant?.name}</h2><p>{restaurant?.cuisine}</p></div>
                    <button className="round-close" onClick={onClose} aria-label="Close menu"><X size={20} /></button>
                </div>
                <div className="onebill-menu-list">
                    {items.length ? items.map((item) => (
                        <article className="onebill-menu-item" key={item.id}>
                            {item.image ? <img className="onebill-menu-item-image" src={item.image} alt={item.name} loading="lazy" /> : <div className="onebill-menu-item-image menu-item-placeholder">🍴</div>}
                            <div className="onebill-menu-item-copy"><h3>{item.name}</h3><p>{item.description}</p><strong>₹{item.price}</strong></div>
                            <button className={`add-to-cart-option ${added[item.id] ? "added" : ""}`} onClick={() => addItem(item)} aria-label={`Add ${item.name} to cart`}>
                                {added[item.id] ? <><Check size={15} /> Added</> : <><Plus size={16} /> Add</>}
                            </button>
                        </article>
                    )) : (
                        <div className="menu-no-items"><div>🥗</div><h3>Menu items not found</h3><p>Check that <code>src/data/menu.js</code> has a menu for <strong>{restaurant?.name}</strong>.</p></div>
                    )}
                </div>
                <div className="onebill-menu-footer"><span><ShoppingBag size={16} /> Choose items and add them to your cart</span><button className="menu-done-button" onClick={onClose}>Done <ArrowRight size={16} /></button></div>
            </section>
        </div>
    );
}
