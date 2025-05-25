# RentalCar

**RentalCar** is a frontend web application for a car rental service. It allows users to browse a catalog of cars, filter them by various parameters, view detailed information, and send a booking request.

## 🔗 Live Demo

[👉 View the live app](https://rental-car-iota-three.vercel.app/)

---

## ⚙️ Features

- 🏠 Home page with banner and CTA button
- 🚘 Catalog page with:
  - Filtering by brand, price, mileage (handled via API)
  - "Add to favorites" feature (stored in localStorage)
  - Pagination via "Load more" button (lazy loading from API)
- 📋 Car details page with:
  - Full vehicle information and image
  - Booking form with validation
- 🔔 Notifications upon successful booking
- 🧭 Routing: `/`, `/catalog`, `/catalog/:id`
- ❌ 404 Not Found page

---

## 🧰 Tech Stack

- **React 19** + **Vite**
- **Redux Toolkit** for global state management
- **Redux Persist** for saving favorites
- **React Router v7** for navigation
- **Axios** for API requests
- **Formik** + **Yup** for form handling and validation
- **React Toastify** for notifications
- **React Datepicker** for date selection
- **CSS Modules** + `modern-normalize` for styling
- **clsx** for conditional class names
- **PropTypes** for prop validation
