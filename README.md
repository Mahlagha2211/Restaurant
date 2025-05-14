# 🍽️ Restaurant

A fully responsive restaurant web app built with **Bootstrap** and powered by **TheMealDB API**, offering users an interactive and seamless digital menu experience with ordering and reservation features.

---

## 🔥 Demo
You can see the live demo of the website [here](https://restaurant-liard-ten.vercel.app/).

### 🧭 Overview
- Built with **HTML**, **CSS**, **React**, and **Bootstrap**.
- Responsive across all devices (mobile, tablet, desktop).
- Google Map integrated using **Leaflet** to show the restaurant's exact location.
- Data fetched from [TheMealDB](https://www.themealdb.com) API.

---

## 🧑‍🍳 Main Features

### 📋 Menu Categories
- Dynamic categories (e.g., Beef, Chicken, Seafood, etc.) fetched from API.
- Clicking on a category displays its meals.

### 🍲 Meal Details
- Each meal is clickable.
- A **Modal** opens showing full meal details:
  - Description
  - Ingredients
  - Image
  - Option to choose quantity and add to cart

### 🛒 Shopping Cart
- Add meals to the cart with selected quantity.
- Edit quantity or remove meals directly from the cart.
- Total price calculated and displayed dynamically.

### 🌶️ Hot Items (Special Offers)
- Highlighted section in the menu for special or new items.
- Uses **Splide** for a smooth horizontal scroll slider.

### 📍 Location
- Interactive map embedded via **Leaflet** showing restaurant location.

### 🔐 Auth System
- Basic **Sign In** and **Login** modals provided.

### 📅 Reservation
- “Reserve a table” section available.
- Shows contact methods and options in a modal popup.

### ⏳ Loading State
- Uses **React Spinner** for loading indicators during data fetching.

### 🔗 Footer
- Footer includes direct contact links and social media.

---

## 🚀 Technologies Used

- **Bootstrap 5**
- **Leaflet (react-leaflet)**
- **Splide.js**
- **Axios**
- **React Hot Toast**
- **React Modal**
- **React Spinner**
- **Formik & Yup**
- **SimpleBar for custom scroll**
- **FontAwesome Icons**
- **TheMealDB API**

---
## 🧠 Key Learnings 
Through this project, I learned:

- Building fully responsive UIs using Bootstrap.
- API integration using Axios with asynchronous data handling. 
- Using Leaflet.js for embedding interactive maps.
- Creating dynamic modals and managing component state.
- Managing shopping cart logic and state updates (add/edit/remove items).
- Implementing form validation using Formik and Yup.
- Enhancing user experience with loading spinners and hot toast notifications.
- Creating interactive UI sliders with Splide.
- Working with reusable components and responsive layout techniques.
## 📦 Installation

```bash
git clone https://github.com/your-username/restaurant.git
cd restaurant
npm install
npm start
