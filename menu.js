import zafraniImage from "../assets/zafrani-mandi.jpeg";
import rapolImage from "../assets/rapol-mandi.webp";
import bagaraImage from "../assets/bagara-kodi-pulao.jpg";
import cakeImage from "../assets/cake.jpg";
import amoghaImage from "../assets/amogha-cakes.png";
const menus = {
    KFC: [
        { id: 'kfc-1', name: 'Chicken Krisper Meal', price: 199, description: 'Crispy chicken burger with fries and a drink' },
        { id: 'kfc-2', name: 'Hot & Crispy Chicken', price: 249, description: 'Golden, crunchy chicken pieces' },
        { id: 'kfc-3', name: 'Zinger Burger', price: 179, description: 'Spicy crispy chicken burger' },
        { id: 'kfc-4', name: 'French Fries', price: 99, description: 'Classic salted fries' },
    ],
    'Burger King': [
        { id: 'bk-1', name: 'Whopper', price: 199, description: 'Flame-grilled burger with fresh toppings' },
        { id: 'bk-2', name: 'Crispy Veg Burger', price: 99, description: 'Crispy vegetable patty and sauce' },
        { id: 'bk-3', name: 'Chicken Whopper', price: 189, description: 'Juicy chicken burger with fresh lettuce' },
        { id: 'bk-4', name: 'Classic Fries', price: 89, description: 'Golden, crispy fries' },
    ],
    "McDonald's": [
        { id: 'mc-1', name: 'McChicken Burger', price: 149, description: 'Crispy chicken patty with lettuce' },
        { id: 'mc-2', name: 'McAloo Tikki', price: 79, description: 'Spiced potato patty burger' },
        { id: 'mc-3', name: 'Large Fries', price: 119, description: 'Golden potato fries' },
        { id: 'mc-4', name: 'McFlurry', price: 99, description: 'Creamy dessert with chocolate pieces' },
    ],
    "Domino's": [
        { id: 'do-1', name: 'Margherita Pizza', price: 199, description: 'Classic cheese pizza' },
        { id: 'do-2', name: 'Farmhouse Pizza', price: 329, description: 'Veggies, mushrooms and cheese' },
        { id: 'do-3', name: 'Garlic Bread', price: 129, description: 'Toasted bread with garlic butter' },
    ],
    'Zafrani Mandi': [
        { id: 'za-1', name: 'Chicken Mandi Plate', price: 349, description: 'Mandi rice, grilled chicken, dips and garnish', image: zafraniImage },
        { id: 'za-2', name: 'Full Chicken Mandi', price: 899, description: 'Sharing platter with mandi rice and sides', image: zafraniImage },
        { id: 'za-3', name: 'Mandi Rice', price: 179, description: 'Fragrant spiced rice' },
    ],
    'Rapol Mandi': [
        { id: 'ra-1', name: 'Chicken Mandi Plate', price: 369, description: 'Roasted chicken with spiced rice', image: rapolImage },
        { id: 'ra-2', name: 'Family Chicken Mandi', price: 999, description: 'Large roasted chicken and rice platter', image: rapolImage },
        { id: 'ra-3', name: 'Mandi Rice', price: 189, description: 'Aromatic rice with herbs and spices' },
    ],
    'Bagara Kodi Pulao': [
        { id: 'ba-1', name: 'Bagara Kodi Pulao', price: 299, description: 'Spiced rice served with chicken curry', image: bagaraImage },
        { id: 'ba-2', name: 'Chicken Pulao Family Pack', price: 699, description: 'Family-sized chicken pulao platter', image: bagaraImage },
    ],
    Suruchi: [
        { id: 'su-1', name: 'Veg Meals', price: 180, description: 'Indian vegetarian meal' },
        { id: 'su-2', name: 'Paneer Curry with Rice', price: 220, description: 'Paneer curry served with rice' },
        { id: 'su-3', name: 'South Indian Thali', price: 199, description: 'Traditional selection of dishes' },
    ],
    Amogha: [
        { id: 'am-1', name: 'Chocolate Truffle Cake', price: 499, description: 'Rich chocolate cake with cream', image: cakeImage },
        { id: 'am-2', name: 'Red Velvet Cake', price: 549, description: 'Soft red velvet with cream cheese style frosting', image: amoghaImage },
        { id: 'am-3', name: 'Vanilla Celebration Cake', price: 449, description: 'Classic vanilla cake for celebrations', image: amoghaImage },
        { id: 'am-4', name: 'Chocolate Cupcake', price: 99, description: 'Chocolate cupcake topped with frosting', image: amoghaImage },
    ],
};
export default menus;