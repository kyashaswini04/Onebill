# OneBill demo: restaurants, cart, checkout and GST estimate

## Run locally
1. Extract this ZIP.
2. Open the `foodhub-frontend` folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL shown in the terminal.

## Included demo functionality
- Jodimetla, Ghatkesar sample delivery location.
- Existing restaurants plus five additional Jodimetla-area demo listings: Sri Suruchi Restaurant, Parampara Family Restaurant, Fusion Flavours, Broz The Kitchen and Zen-G Mini Restaurant.
- Sample menus/prices, restaurant search and category filters.
- Multi-restaurant cart with restaurant-wise item groups and subtotals.
- One combined customer checkout, with an illustrative separate order group per restaurant.
- Bill estimate: food subtotal, GST estimate, delivery fee (₹20 per restaurant), platform fee (₹2 per checkout), handling fee (₹2 per checkout), and grand total.
- Demo order confirmation. No payment is collected and no real restaurant order is transmitted.

## GST and launch limitations
The UI currently uses a **5% illustrative GST estimate on food subtotal only**. This is a prototype placeholder, not tax advice or a confirmed tax configuration. Actual tax rates, whether fees are taxable, invoice responsibility, and the applicable e-commerce-operator rules (including CGST Act section 9(5), where relevant) must be confirmed with a qualified GST professional before live use. Do not treat the client-side calculation as an authoritative tax engine.

Restaurant listings, menu names/prices, ratings, delivery times and branch coordinates are demo data. Added Jodimetla-area pins are approximate placeholders and must be replaced with verified branch coordinates and real availability before representing a restaurant as within a real 5 km delivery radius.

## Not included yet
- Live GPS/verified delivery geofencing or route distance.
- Backend/API, database persistence, restaurant-owner dashboard or real restaurant order dispatch.
- Payment gateway, refunds, production authentication, and compliant tax invoice generation.
