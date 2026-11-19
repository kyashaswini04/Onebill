import { useMemo, useState } from "react";
import {
  UtensilsCrossed,
  MapPin,
  Search,
  ShoppingBag,
  ArrowLeft,
  Plus,
  Minus,
  Trash2,
  LogOut,
  LocateFixed,
  Heart,
  Clock,
  CheckCircle2,
} from "lucide-react";

import "./App.css";

import kfcImage from "./assets/kfc.jpg";
import burgerKingImage from "./assets/burgerking.jpg";
import zafraniImage from "./assets/zafrani-mandi.jpg";
import rapolImage from "./assets/rapol-mandi.webp";
import bagaraImage from "./assets/bagara-kodi-pulao.jpg";
import amoghaImage from "./assets/amogha-cakes-banner.png";
import chocolateCakeImage from "./assets/chocolate-cake.jpg";
import fastFoodBanner from "./assets/kfc-burgerking-mcdonalds-banner.png";
import mandiBanner from "./assets/mandi-biryani-banner.png";
import restaurantCollage from "./assets/restaurant-pastel-collage.png";

const restaurants = [
  {
    id: "kfc",
    name: "KFC",
    category: "Fried Chicken & Burgers",
    image: kfcImage,
    time: "20–30 min",
    rating: "4.3",
    color: "peach",
    latitude: 17.4350,
    longitude: 78.6570,
    menu: [
      { id: "kfc1", name: "Chicken Burger", price: 149, emoji: "🍔" },
      { id: "kfc2", name: "Crispy Chicken", price: 199, emoji: "🍗" },
      { id: "kfc3", name: "Chicken Popcorn", price: 129, emoji: "🍿" },
      { id: "kfc4", name: "Fries", price: 99, emoji: "🍟" },
    ],
  },
  {
    id: "burgerking",
    name: "Burger King",
    category: "Burgers & Café",
    image: burgerKingImage,
    time: "20–30 min",
    rating: "4.2",
    color: "cream",
    latitude: 17.4250,
    longitude: 78.6460,
    menu: [
      { id: "bk1", name: "Veg Whopper", price: 179, emoji: "🍔" },
      { id: "bk2", name: "Chicken Whopper", price: 219, emoji: "🍔" },
      { id: "bk3", name: "Crispy Fries", price: 89, emoji: "🍟" },
      { id: "bk4", name: "Cold Coffee", price: 119, emoji: "🥤" },
    ],
  },
  {
    id: "mcdonalds",
    name: "McDonald's",
    category: "Burgers, Fries & Desserts",
    image: fastFoodBanner,
    time: "20–35 min",
    rating: "4.1",
    color: "lavender",
    latitude: 17.4201,
    longitude: 78.6371,
    menu: [
      { id: "mc1", name: "Classic Burger", price: 129, emoji: "🍔" },
      { id: "mc2", name: "French Fries", price: 99, emoji: "🍟" },
      { id: "mc3", name: "McFlurry Style Dessert", price: 119, emoji: "🍨" },
      { id: "mc4", name: "Chocolate Shake", price: 129, emoji: "🥤" },
    ],
  },
  {
    id: "zafrani",
    name: "Zafrani Mandi",
    category: "Mandi & Grilled Chicken",
    image: zafraniImage,
    time: "30–40 min",
    rating: "4.5",
    color: "peach",
    latitude: 17.4320,
    longitude: 78.6530,
    menu: [
      { id: "zf1", name: "Chicken Mandi Plate", price: 299, emoji: "🍗" },
      { id: "zf2", name: "Full Chicken Mandi", price: 599, emoji: "🍛" },
      { id: "zf3", name: "Mandi Rice", price: 149, emoji: "🍚" },
      { id: "zf4", name: "Grilled Chicken", price: 249, emoji: "🍗" },
    ],
  },
  {
    id: "rapol",
    name: "Rapol Mandi",
    category: "Mandi & Biryani",
    image: rapolImage,
    time: "30–45 min",
    rating: "4.4",
    color: "lavender",
    latitude: 17.4300,
    longitude: 78.6500,
    menu: [
      { id: "rp1", name: "Chicken Mandi Plate", price: 299, emoji: "🍗" },
      { id: "rp2", name: "Special Chicken Mandi", price: 399, emoji: "🍛" },
      { id: "rp3", name: "Mutton Biryani", price: 329, emoji: "🍚" },
      { id: "rp4", name: "Chicken Biryani", price: 249, emoji: "🍗" },
    ],
  },
  {
    id: "bagara",
    name: "Bagara Kodi Pulao",
    category: "Pulao & Indian Food",
    image: bagaraImage,
    time: "25–35 min",
    rating: "4.3",
    color: "cream",
    latitude: 17.4370,
    longitude: 78.6510,
    menu: [
      { id: "bg1", name: "Bagara Kodi Pulao", price: 249, emoji: "🍚" },
      { id: "bg2", name: "Special Chicken Pulao", price: 299, emoji: "🍗" },
      { id: "bg3", name: "Chicken Curry", price: 179, emoji: "🍛" },
      { id: "bg4", name: "Extra Pulao Rice", price: 99, emoji: "🍚" },
    ],
  },
  {
    id: "amogha",
    name: "Amogha Cakes",
    category: "Cakes & Desserts",
    image: amoghaImage,
    time: "25–40 min",
    rating: "4.5",
    color: "pink",
    latitude: 17.4340,
    longitude: 78.6560,
    menu: [
      {
        id: "am1",
        name: "Chocolate Cake",
        price: 399,
        emoji: "🎂",
        image: chocolateCakeImage,
      },
      {
        id: "am2",
        name: "Red Velvet Cake",
        price: 449,
        emoji: "🍰",
        image: chocolateCakeImage,
      },
      {
        id: "am3",
        name: "Vanilla Cream Cake",
        price: 349,
        emoji: "🍰",
        image: chocolateCakeImage,
      },
      {
        id: "am4",
        name: "Chocolate Cupcake",
        price: 99,
        emoji: "🧁",
        image: chocolateCakeImage,
      },
    ],
  },

  // Additional local Jodimetla-area restaurants for the OneBill demo.
  // Coordinates below are approximate demo pins, NOT verified branch GPS data.
  {
    id: "suruchi",
    name: "Sri Suruchi Restaurant",
    category: "Biryani, North Indian & Chinese",
    image: mandiBanner,
    time: "25–40 min",
    rating: "4.2",
    color: "peach",
    latitude: 17.4344,
    longitude: 78.6549,
    menu: [
      { id: "su1", name: "Special Chicken Biryani", price: 249, emoji: "🍗" },
      { id: "su2", name: "Veg Fried Rice", price: 169, emoji: "🍚" },
      { id: "su3", name: "Paneer Curry with Rice", price: 219, emoji: "🍛" },
      { id: "su4", name: "Chicken 65", price: 199, emoji: "🍗" },
    ],
  },
  {
    id: "parampara",
    name: "Parampara Family Restaurant",
    category: "Mandi, Biryani & Indian Food",
    image: mandiBanner,
    time: "25–40 min",
    rating: "4.0",
    color: "lavender",
    latitude: 17.4329,
    longitude: 78.6574,
    menu: [
      { id: "pa1", name: "Chicken Fry Mandi", price: 289, emoji: "🍗" },
      { id: "pa2", name: "Paneer Biryani", price: 249, emoji: "🍚" },
      { id: "pa3", name: "Chicken Handi Biryani", price: 340, emoji: "🍛" },
      { id: "pa4", name: "Butter Chicken Masala", price: 279, emoji: "🍲" },
    ],
  },
  {
    id: "fusion-flavours",
    name: "Fusion Flavours",
    category: "Burgers, Chinese & Fast Food",
    image: fastFoodBanner,
    time: "20–35 min",
    rating: "4.1",
    color: "cream",
    latitude: 17.4360,
    longitude: 78.6534,
    menu: [
      { id: "ff1", name: "Crispy Chicken Burger", price: 159, emoji: "🍔" },
      { id: "ff2", name: "Veg Hakka Noodles", price: 149, emoji: "🍜" },
      { id: "ff3", name: "Chicken Manchurian", price: 219, emoji: "🥡" },
      { id: "ff4", name: "Chocolate Shake", price: 119, emoji: "🥤" },
    ],
  },
  {
    id: "broz-kitchen",
    name: "Broz The Kitchen",
    category: "Cafe & Quick Bites",
    image: restaurantCollage,
    time: "20–35 min",
    rating: "5.0",
    color: "pink",
    latitude: 17.4319,
    longitude: 78.6585,
    menu: [
      { id: "br1", name: "Chicken Biryani", price: 229, emoji: "🍗" },
      { id: "br2", name: "Veg Fried Rice", price: 149, emoji: "🍚" },
      { id: "br3", name: "Chicken Noodles", price: 189, emoji: "🍜" },
      { id: "br4", name: "French Fries", price: 89, emoji: "🍟" },
    ],
  },
  {
    id: "zen-g",
    name: "Zen-G Mini Restaurant",
    category: "Budget Biryani & Indian Food",
    image: mandiBanner,
    time: "20–35 min",
    rating: "4.9",
    color: "lavender",
    latitude: 17.4352,
    longitude: 78.6588,
    menu: [
      { id: "zg1", name: "Chicken Biryani", price: 169, emoji: "🍗" },
      { id: "zg2", name: "Egg Biryani", price: 139, emoji: "🍚" },
      { id: "zg3", name: "Chicken Fried Rice", price: 159, emoji: "🍛" },
      { id: "zg4", name: "Veg Noodles", price: 129, emoji: "🍜" },
    ],
  },
];

const money = (amount) => `₹${amount.toLocaleString("en-IN")}`;

function getDistanceKm(origin, destination) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const earthRadiusKm = 6371;

  const latitudeDifference = toRadians(
    destination.latitude - origin.latitude
  );
  const longitudeDifference = toRadians(
    destination.longitude - origin.longitude
  );

  const a =
    Math.sin(latitudeDifference / 2) ** 2 +
    Math.cos(toRadians(origin.latitude)) *
    Math.cos(toRadians(destination.latitude)) *
    Math.sin(longitudeDifference / 2) ** 2;

  return (
    2 *
    earthRadiusKm *
    Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  );
}

function App() {
  const [page, setPage] = useState("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [filter, setFilter] = useState("All");
  const [userCoordinates, setUserCoordinates] = useState(null);
  const [locationStatus, setLocationStatus] = useState("idle");
  const [usingSampleLocation, setUsingSampleLocation] = useState(false);

  function getCurrentLocation() {
    if (!navigator.geolocation) {
      setLocationStatus("unsupported");
      return;
    }

    setLocationStatus("loading");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocationStatus("success");
      },
      () => setLocationStatus("error"),
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  }

  const nearbyRestaurants = useMemo(() => {
    if (!userCoordinates) return [];

    return restaurants
      .filter(
        (restaurant) =>
          Number.isFinite(restaurant.latitude) &&
          Number.isFinite(restaurant.longitude)
      )
      .map((restaurant) => ({
        ...restaurant,
        distance: getDistanceKm(userCoordinates, {
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
        }),
      }))
      .filter((restaurant) => restaurant.distance <= 5)
      .sort((a, b) => a.distance - b.distance);
  }, [userCoordinates]);

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Group cart lines by restaurant so OneBill can create a separate
  // child order for every restaurant while keeping one customer checkout.
  const cartRestaurantGroups = useMemo(() => {
    const groups = new Map();
    for (const item of cart) {
      const key = item.restaurantId || "unknown";
      if (!groups.has(key)) {
        groups.set(key, {
          restaurantId: key,
          restaurantName: item.restaurantName || "Restaurant",
          items: [],
          subtotal: 0,
        });
      }
      const group = groups.get(key);
      group.items.push(item);
      group.subtotal += item.price * item.quantity;
    }
    return Array.from(groups.values());
  }, [cart]);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Checkout fee configuration for the OneBill demo.
  // Delivery is charged per restaurant because each restaurant prepares
  // and dispatches its own order. Platform and handling fees are per checkout.
  const deliveryFee = cart.length > 0 ? cartRestaurantGroups.length * 20 : 0;
  const platformFee = cart.length > 0 ? 2 : 0;
  const handlingFee = cart.length > 0 ? 2 : 0;

  // Demo-only estimate: 5% on food subtotal. Confirm applicable GST rates,
  // fee taxation, invoicing, and Section 9(5) handling with a GST professional
  // before using real orders. Do not accept this rate from the browser/backend client.
  const gstRatePercent = 5;
  const gstAmount = Number(((subtotal * gstRatePercent) / 100).toFixed(2));
  const total = subtotal + gstAmount + deliveryFee + platformFee + handlingFee;

  const visibleRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
      const matchesSearch =
        `${restaurant.name} ${restaurant.category}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        (filter === "Fast Food" &&
          ["kfc", "burgerking", "mcdonalds", "fusion-flavours", "broz-kitchen"].includes(
            restaurant.id
          )) ||
        (filter === "Mandi & Biryani" &&
          ["zafrani", "rapol", "bagara", "suruchi", "parampara", "zen-g"].includes(
            restaurant.id
          )) ||
        (filter === "Cakes" && restaurant.id === "amogha");

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  function login(event) {
    event.preventDefault();
    setPage("location");
  }

  function saveLocation(event) {
    event.preventDefault();

    if (!location.trim()) {
      alert("Please enter your delivery location.");
      return;
    }

    // Jodimetla is the sample area for testing the nearby-restaurants flow.
    if (/jodimetla/i.test(location)) {
      setUserCoordinates({ latitude: 17.43358, longitude: 78.65595 });
      setUsingSampleLocation(true);
    }

    setPage("restaurants");
  }

  function addToCart(item, restaurant) {
    setCart((current) => {
      const existing = current.find(
        (entry) => entry.id === item.id &&
          entry.restaurantId === restaurant.id
      );

      if (existing) {
        return current.map((entry) =>
          entry.id === item.id && entry.restaurantId === restaurant.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }

      return [
        ...current,
        {
          ...item,
          quantity: 1,
          restaurantId: restaurant.id,
          restaurantName: restaurant.name,
        },
      ];
    });
  }

  function changeQuantity(itemId, change, restaurantId) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === itemId &&
            (restaurantId == null || item.restaurantId === restaurantId)
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function openRestaurant(restaurant) {
    setSelectedRestaurant(restaurant);
    setPage("menu");
    setShowCart(false);
  }

  function goHome() {
    setSelectedRestaurant(null);
    setShowCart(false);
    setPage("restaurants");
  }

  function placeOrder() {
    if (!cart.length) return;

    setOrderPlaced(true);
    setCart([]);
    setShowCart(false);
    setPage("restaurants");
  }

  if (page === "login") {
    return (
      <main className="auth-page">
        <section className="auth-art">
          <div className="brand-mark">
            <UtensilsCrossed size={26} />
            <span>OneBill</span>
          </div>

          <div className="auth-art-copy">
            <span className="eyebrow">GOOD FOOD, CLOSE TO YOU</span>
            <h1>
              Your next
              <br />
              favourite meal
              <br />
              is just around the corner.
            </h1>
            <p>
              Discover lovely local restaurants, delicious plates
              and sweet treats.
            </p>
          </div>

          <img
            className="auth-food-image"
            src={restaurantCollage}
            alt="Food and dessert selection"
          />

          <span className="art-sparkle sparkle-one">✳</span>
          <span className="art-sparkle sparkle-two">✦</span>
        </section>

        <section className="auth-panel">
          <div className="auth-card">
            <span className="pill-label">WELCOME TO ONEBILL</span>
            <h2>Let's get you fed.</h2>
            <p className="muted">
              Sign in or enter your details to continue.
            </p>

            <form onSubmit={login} className="form-stack">
              <label>
                Your name
                <input
                  value={fullName}
                  onChange={(event) =>
                    setFullName(event.target.value)
                  }
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  placeholder="Enter your password"
                  required
                  minLength={4}
                />
              </label>

              <button className="primary-button" type="submit">
                Continue <span>→</span>
              </button>
            </form>

            <p className="fine-print">
              Demo sign-in only. No account is created.
            </p>
          </div>
        </section>
      </main>
    );
  }

  if (page === "location") {
    return (
      <main className="location-page">
        <div className="location-card">
          <div className="location-icon">
            <MapPin size={30} />
          </div>

          <span className="pill-label">ONE MORE STEP</span>
          <h1>Where should we deliver?</h1>
          <p className="muted">
            Enter your area so you can explore nearby restaurants.
          </p>

          <form onSubmit={saveLocation} className="form-stack">
            <label>
              Delivery area or address
              <input
                value={location}
                onChange={(event) =>
                  setLocation(event.target.value)
                }
                placeholder="e.g. Ghatkesar, Hyderabad"
                required
              />
            </label>

            <button
              type="button"
              className="secondary-button"
              onClick={() => {
                setLocation("Jodimetla, Ghatkesar, Hyderabad");
                setUserCoordinates({ latitude: 17.43358, longitude: 78.65595 });
                setUsingSampleLocation(true);
              }}
            >
              <LocateFixed size={17} />
              Use Jodimetla sample location
            </button>

            <button className="primary-button" type="submit">
              Explore restaurants <span>→</span>
            </button>
          </form>

          <button
            className="text-button"
            onClick={() => setPage("login")}
          >
            <ArrowLeft size={15} />
            Back to sign in
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand-button" onClick={goHome}>
          <span className="brand-icon">
            <UtensilsCrossed size={22} />
          </span>
          <span>
            OneBill
            <small>food, found nearby</small>
          </span>
        </button>

        <div className="header-location">
          <MapPin size={17} />
          <div>
            <small>Delivering to</small>
            <strong>{location}</strong>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="icon-button"
            title="Sign out"
            onClick={() => {
              setPage("login");
              setSelectedRestaurant(null);
              setShowCart(false);
            }}
          >
            <LogOut size={18} />
          </button>

          <button
            className="cart-button"
            onClick={() => setShowCart(true)}
          >
            <ShoppingBag size={19} />
            <span>Cart</span>
            <b>{cartCount}</b>
          </button>
        </div>
      </header>

      <main className="main-content">
        {orderPlaced && (
          <div className="success-banner">
            <CheckCircle2 size={19} />
            Your demo order was placed successfully! Add more food
            whenever you're hungry.
            <button
              onClick={() => setOrderPlaced(false)}
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        )}

        {showCart ? (
          <section className="cart-page">
            <button
              className="back-link"
              onClick={() => setShowCart(false)}
            >
              <ArrowLeft size={17} />
              Continue browsing
            </button>

            <div className="page-heading">
              <span className="eyebrow">YOUR PICKS</span>
              <h1>
                Your cart{" "}
                <span className="heading-count">
                  ({cartCount})
                </span>
              </h1>
              <p className="muted">
                Everything delicious, all in one place.
              </p>
              {cartRestaurantGroups.length > 1 && (
                <p className="multi-restaurant-note">
                  <CheckCircle2 size={16} /> One combined checkout across {cartRestaurantGroups.length} restaurants; each restaurant receives its own order.
                </p>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">
                  <ShoppingBag size={32} />
                </div>
                <h2>Your cart is waiting for something tasty.</h2>
                <p className="muted">
                  Add a dish from any restaurant to get started.
                </p>
                <button
                  className="primary-button compact"
                  onClick={() => setShowCart(false)}
                >
                  Browse restaurants →
                </button>
              </div>
            ) : (
              <>
                <div className="cart-layout">
                  <div className="cart-items">
                    {cartRestaurantGroups.map((group) => (
                      <section className="cart-restaurant-group" key={group.restaurantId}>
                        <div className="cart-restaurant-heading">
                          <div>
                            <span className="eyebrow">RESTAURANT ORDER</span>
                            <h2>{group.restaurantName}</h2>
                          </div>
                          <strong>{money(group.subtotal)}</strong>
                        </div>
                        {group.items.map((item) => (
                          <article
                            className="cart-item"
                            key={`${item.restaurantId}-${item.id}`}
                          >
                            <div className="cart-item-emoji">
                              {item.emoji || "🍽️"}
                            </div>

                            <div className="cart-item-info">
                              <h3>{item.name}</h3>
                              <p>{item.restaurantName}</p>
                              <strong>{money(item.price)}</strong>
                            </div>

                            <div className="quantity-control">
                              <button
                                onClick={() => changeQuantity(item.id, -1, item.restaurantId)}
                                aria-label={`Decrease ${item.name} quantity`}
                              >
                                <Minus size={14} />
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() => changeQuantity(item.id, 1, item.restaurantId)}
                                aria-label={`Increase ${item.name} quantity`}
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            <button
                              className="remove-button"
                              onClick={() => changeQuantity(item.id, -item.quantity, item.restaurantId)}
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 size={17} />
                            </button>
                          </article>
                        ))}
                      </section>
                    ))}
                    <button
                      className="secondary-button add-more-restaurants-button"
                      onClick={() => { setShowCart(false); setPage("restaurants"); setSelectedRestaurant(null); }}
                    >
                      <Plus size={16} /> Add items from another restaurant
                    </button>
                  </div>

                  <aside className="bill-card">
                    <h2>Order summary</h2>

                    <div className="bill-row">
                      <span>Subtotal</span>
                      <span>{money(subtotal)}</span>
                    </div>

                    <div className="bill-row">
                      <span>GST (estimated {gstRatePercent}%)</span>
                      <span>{money(gstAmount)}</span>
                    </div>

                    <div className="bill-row">
                      <span>Delivery fee ({cartRestaurantGroups.length} restaurant{cartRestaurantGroups.length === 1 ? "" : "s"} × ₹20)</span>
                      <span>{money(deliveryFee)}</span>
                    </div>

                    <div className="bill-row">
                      <span>Platform fee</span>
                      <span>{money(platformFee)}</span>
                    </div>

                    <div className="bill-row">
                      <span>Handling fee</span>
                      <span>{money(handlingFee)}</span>
                    </div>

                    <div className="bill-total">
                      <span>Grand total</span>
                      <strong>{money(total)}</strong>
                    </div>

                    <p className="delivery-note">
                      GST is a demo estimate on food subtotal only. Final tax treatment and fee taxation must be confirmed before live orders.
                    </p>

                    <button
                      className="primary-button full-width"
                      onClick={placeOrder}
                    >
                      Place demo order <span>→</span>
                    </button>

                    <p className="fine-print">
                      Demo only. No payment will be collected.
                    </p>
                  </aside>
                </div>

                <section className="nearby-section">
                  <div className="nearby-heading">
                    <span className="eyebrow">
                      AROUND YOUR LOCATION
                    </span>
                    <h2>Restaurants within 5 km</h2>
                    <p className="muted">
                      Discover more places close to you while you check out.
                    </p>
                    {usingSampleLocation && (
                      <p className="muted">
                        Jodimetla test mode: nearby distances use sample branch pins. Replace them with verified branch GPS coordinates before launch.
                      </p>
                    )}
                  </div>

                  {!userCoordinates ? (
                    <div className="nearby-location-card">
                      <div>
                        <strong>
                          Find restaurants near you
                        </strong>
                        <p className="muted">
                          Allow location access to calculate
                          distances from your current position.
                        </p>
                      </div>

                      <button
                        className="primary-button"
                        onClick={getCurrentLocation}
                        disabled={locationStatus === "loading"}
                      >
                        <LocateFixed size={17} />
                        {locationStatus === "loading"
                          ? "Finding location..."
                          : "Use my location"}
                      </button>

                      {locationStatus === "error" && (
                        <p className="nearby-error">
                          Location access failed. Check your
                          browser permissions and try again.
                        </p>
                      )}

                      {locationStatus === "unsupported" && (
                        <p className="nearby-error">
                          Your browser does not support location
                          access.
                        </p>
                      )}
                    </div>
                  ) : nearbyRestaurants.length === 0 ? (
                    <div className="nearby-location-card">
                      <strong>
                        No restaurants found within 5 km of this location.
                      </strong>
                      <p className="muted">
                        Try refreshing your GPS location, or check that the restaurant branch coordinates are within 5 km.
                      </p>
                      <button
                        className="secondary-button"
                        onClick={getCurrentLocation}
                      >
                        <LocateFixed size={16} />
                        Refresh location
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="nearby-result-count">
                        {nearbyRestaurants.length} restaurant
                        {nearbyRestaurants.length !== 1 ? "s" : ""}{" "}
                        within 5 km, sorted by distance
                      </p>

                      <div className="nearby-grid">
                        {nearbyRestaurants.map((restaurant) => (
                          <article
                            className="nearby-card"
                            key={restaurant.id}
                          >
                            <img
                              src={restaurant.image}
                              alt={restaurant.name}
                            />

                            <div className="nearby-card-body">
                              <h3>{restaurant.name}</h3>
                              <p>{restaurant.category}</p>

                              <span className="nearby-distance">
                                <MapPin size={14} />
                                {restaurant.distance < 1
                                  ? `${Math.round(
                                    restaurant.distance * 1000
                                  )} m away`
                                  : `${restaurant.distance.toFixed(
                                    1
                                  )} km away`}
                              </span>

                              <button
                                className="view-menu-button"
                                onClick={() =>
                                  openRestaurant(restaurant)
                                }
                              >
                                View menu <span>→</span>
                              </button>
                            </div>
                          </article>
                        ))}
                      </div>
                    </>
                  )}
                </section>
              </>
            )}
          </section>
        ) : page === "menu" && selectedRestaurant ? (
          <section className="menu-page">
            <button className="back-link" onClick={goHome}>
              <ArrowLeft size={17} />
              All restaurants
            </button>

            <div className="menu-hero">
              <img
                src={selectedRestaurant.image}
                alt={selectedRestaurant.name}
              />
              <div className="menu-hero-overlay" />

              <div className="menu-hero-copy">
                <span className="pill-label">ONEBILL PICKS</span>
                <h1>{selectedRestaurant.name}</h1>
                <p>{selectedRestaurant.category}</p>

                <div className="restaurant-meta">
                  <span>★ {selectedRestaurant.rating}</span>
                  <span>
                    <Clock size={14} />
                    {selectedRestaurant.time}
                  </span>
                </div>
              </div>
            </div>

            <div className="page-heading menu-heading">
              <span className="eyebrow">
                MADE FOR YOUR CRAVINGS
              </span>
              <h2>Popular on the menu</h2>
              <p className="muted">
                Choose your favourites and add them to your cart.
              </p>
            </div>

            <div className="food-grid">
              {selectedRestaurant.menu.map((item) => (
                <article className="food-card" key={item.id}>
                  {item.image ? (
                    <img
                      className="food-photo"
                      src={item.image}
                      alt={item.name}
                    />
                  ) : (
                    <div
                      className={`food-emoji ${selectedRestaurant.color}`}
                    >
                      {item.emoji}
                    </div>
                  )}

                  <div className="food-card-body">
                    <div className="food-name-row">
                      <h3>{item.name}</h3>
                      <span
                        className="veg-dot"
                        title="Menu item"
                      />
                    </div>

                    <p className="food-description">
                      Freshly prepared and full of flavour.
                    </p>

                    <div className="food-card-footer">
                      <strong>{money(item.price)}</strong>
                      <button
                        className="add-button"
                        onClick={() =>
                          addToCart(item, selectedRestaurant)
                        }
                      >
                        <Plus size={15} />
                        Add
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <>
            <section className="hero-section">
              <div className="hero-copy">
                <span className="eyebrow">
                  A LITTLE CLOSER TO DELICIOUS
                </span>
                <h1>
                  Good food.
                  <br />
                  <em>Good mood.</em>
                </h1>
                <p>
                  Find your favourites and discover delicious places
                  around you.
                </p>

                <div className="hero-tags">
                  <span>♡ Local favourites</span>
                  <span>✦ Curated picks</span>
                </div>
              </div>

              <div className="hero-image-wrap">
                <img
                  src={restaurantCollage}
                  alt="Restaurant food selection"
                />
                <div className="floating-note">
                  <Heart size={16} fill="currentColor" />
                  Made for food lovers
                </div>
              </div>

              <div className="hero-orb orb-one" />
              <div className="hero-orb orb-two" />
            </section>

            <section className="discovery-section">
              <div className="section-title-row">
                <div>
                  <span className="eyebrow">
                    YOUR NEIGHBOURHOOD MENU
                  </span>
                  <h2>Restaurants near you</h2>
                  <p className="muted">
                    Start with a favourite, discover somewhere new.
                  </p>
                </div>

                <span className="restaurant-count">
                  {visibleRestaurants.length} places
                </span>
              </div>

              <div className="search-filter-row">
                <div className="search-box">
                  <Search size={19} />
                  <input
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    placeholder="Search restaurants or food..."
                  />
                </div>

                <div className="filter-chips">
                  {[
                    "All",
                    "Fast Food",
                    "Mandi & Biryani",
                    "Cakes",
                  ].map((item) => (
                    <button
                      key={item}
                      className={`filter-chip ${filter === item ? "active" : ""
                        }`}
                      onClick={() => setFilter(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="restaurant-grid">
                {visibleRestaurants.map((restaurant) => (
                  <article
                    className="restaurant-card"
                    key={restaurant.id}
                  >
                    <button
                      className="restaurant-image-button"
                      onClick={() => openRestaurant(restaurant)}
                    >
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className={`restaurant-image ${restaurant.id}`}
                      />
                      <span className="image-badge">
                        Popular choice
                      </span>
                      <span className="image-arrow">↗</span>
                    </button>

                    <div className="restaurant-card-body">
                      <div className="restaurant-title-row">
                        <div>
                          <h3>{restaurant.name}</h3>
                          <p>{restaurant.category}</p>
                        </div>

                        <span className="rating-pill">
                          ★ {restaurant.rating}
                        </span>
                      </div>

                      <div className="restaurant-card-bottom">
                        <span className="delivery-time">
                          <Clock size={14} />
                          {restaurant.time}
                        </span>

                        <button
                          className="view-menu-button"
                          onClick={() =>
                            openRestaurant(restaurant)
                          }
                        >
                          View menu <span>→</span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {visibleRestaurants.length === 0 && (
                <div className="empty-state">
                  <h2>No restaurants found</h2>
                  <p className="muted">
                    Try a different search or category.
                  </p>
                  <button
                    className="secondary-button"
                    onClick={() => {
                      setSearch("");
                      setFilter("All");
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}

              <section className="promo-banner">
                <div>
                  <span className="eyebrow">
                    A LITTLE SOMETHING EXTRA
                  </span>
                  <h2>
                    Good food is even better when shared.
                  </h2>
                  <p>
                    Browse nearby favourites and make your next meal
                    special.
                  </p>
                </div>

                <img
                  src={mandiBanner}
                  alt="Mandi and biryani selections"
                />
              </section>
            </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <button className="footer-brand" onClick={goHome}>
          <UtensilsCrossed size={19} />
          OneBill
        </button>

        <span>
          Made with care, served with a little lavender. ♡
        </span>

        <span className="footer-location">
          <MapPin size={14} />
          {location}
        </span>
      </footer>

      {!showCart && page !== "menu" && (
        <button
          className="mobile-cart-button"
          onClick={() => setShowCart(true)}
        >
          <ShoppingBag size={18} />
          View cart ({cartCount}) · {money(total)}
        </button>
      )}
    </div>
  );
}

export default App;