# We Sale — Frontend

A complete, production-styled React frontend for an ecommerce store called
**We Sale**. This is frontend only — no backend, database, or payment
processor is connected. Everything runs on mock data and in-memory state.

## Stack

- React 19 + Vite
- React Router (client-side routing)
- Tailwind CSS v4 (custom design tokens — see `src/index.css`)
- lucide-react (icons)

## Running it

```bash
npm install
npm run dev        # local dev server
npm run build       # production build → dist/
npm run preview     # preview the production build
```

## Project structure

```
src/
  components/
    Header.jsx        Nav, search, cart icon
    Footer.jsx         Site footer
    ProductCard.jsx    Product grid card
    PriceTag.jsx        Signature price-tag badge (SVG)
  context/
    CartContext.jsx    Client-side cart state (React context + useReducer)
  data/
    products.js         Mock product catalog — REPLACE with real API calls
  pages/
    Home.jsx, Shop.jsx, ProductDetail.jsx, Cart.jsx, Checkout.jsx,
    OrderConfirmed.jsx, About.jsx, Contact.jsx, NotFound.jsx
  App.jsx               Routes
  main.jsx              Entry point
```

## Pages

- `/` — Home (hero, featured products, sale banner)
- `/shop` — Catalog with category filter, search, sort (supports `?category=`, `?q=`, `?sort=`, `?sale=1`)
- `/product/:id` — Product detail with color/quantity selection
- `/cart` — Cart with quantity editing
- `/checkout` — Checkout form (client-side validation only)
- `/order-confirmed` — Confirmation screen shown after "placing" an order
- `/about`, `/contact` — Static/marketing pages

## Where the backend plugs in

Everything is intentionally isolated so you can wire up a real backend without
restructuring the app:

1. **Product data** — `src/data/products.js` exports `products`, `categories`,
   `getProductById()`, and `getRelated()`. Swap these for calls to your API
   (e.g. `fetch('/api/products')`) — the shape of each product object is kept
   flat and simple to match a typical `products` table/collection.

2. **Cart** — `src/context/CartContext.jsx` holds cart state in memory only
   (it resets on page refresh, by design, since there's no persistence
   layer yet). To persist carts, this is where you'd add calls to your
   backend (or `localStorage`/cookies) inside `addItem`, `removeItem`,
   `setQty`, and `clear`.

3. **Checkout** — `src/pages/Checkout.jsx` has a `handleSubmit` function with
   a clearly marked comment showing exactly where to POST the order to your
   server or a payment processor (e.g. Stripe) instead of the current
   `setTimeout` stand-in.

4. **Contact form** — `src/pages/Contact.jsx` has a `handleSubmit` that
   currently just flips local state. Point it at your form/email endpoint.

5. **Auth** — not included. If you add accounts, a natural place for a
   `/account` route and an `AuthContext` (mirroring `CartContext`) is
   already set up as a pattern to follow.

## Design notes

The visual identity is built around the idea of a real price tag — the
signature `PriceTag` component (a hand-drawn SVG badge with a string hole)
is used for sale badges, hero moments, and empty/error states. Palette,
type (Fraunces for display, Work Sans for body, JetBrains Mono for prices),
and copy all lean into "honest pricing" as the brand's core idea.
