# Aura Florist

## Project Overview & Problem Statement
Aura Florist is a frontend e-commerce prototype for a local flower shop. Many small florist websites either lack clear pricing and care details or make users re-enter product choices during checkout. This project creates a clean, multi-page online storefront where users can browse bouquets, check flower care and lifespan information, view boutique locations, and place an order with automatic price calculation.

## Target Users
- People looking to buy flower bouquets online for gifts or special occasions.
- Local customers in İstanbul and Kocaeli who want to check store addresses, hours, and care instructions before ordering.

## Main Features
- **6 Interconnected Pages:** Includes a home page (`index.html`), three individual bouquet detail pages (`white.html`, `red.html`, `tulip.html`), a checkout page (`buy_screen.html`), and a contact page (`contact_us.html`).
- **Dark Mode:** A theme toggle button in the navigation bar that switches between light and dark mode and saves the user's choice in `localStorage`.
- **Dynamic Checkout Loading:** Clicking "Buy Now" sends the selected flower's name, price, and image to the checkout page using URL parameters.
- **Quantity & Price Calculator:** Users can increase or decrease bouquet quantities on the checkout screen and see the total price update automatically.
- **Care & Location Tables:** Structured HTML tables showing flower lifespan/watering tips and boutique branch addresses.
- **Form Validation:** Basic HTML5 and JavaScript validation on the checkout and contact forms.

## Technologies Used
- HTML5
- CSS3 (Flexbox, CSS Grid, Media Queries)
- JavaScript (`dynamic.js`)