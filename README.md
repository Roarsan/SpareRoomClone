# 🏠 SpareRoom Clone

A simple property listings web app inspired by [SpareRoom.co.uk](https://www.spareroom.co.uk).  
Built with **Express**, **Mongoose**, and **EJS**, following an MVC architecture and styled with **Bootstrap 5** and custom CSS.  
Users can create, edit, and delete property listings.


## 🚀 Tech Stack
Express.js 5 — Routing and middleware

Mongoose 8 — MongoDB ODM

EJS — Server-side templates

Bootstrap 5 — Frontend layout and components

method-override — Support for PUT and DELETE HTTP methods

CSS (custom) — Custom theme inspired by SpareRoom’s clean blue-and-white UI

## 🧩 Features
- View all listings
- View single listing details
- Create new listing
- Edit listing
- Delete listing
- Responsive UI with Bootstrap + custom CSS

## ✅ Prerequisites
- Node.js 18+
- MongoDB running locally (or supply a connection string)



If unset, it falls back to `mongodb://127.0.0.1:27017/spare_room`.

## 🧰 Install
```bash
npm install
```

## 🌱 Seed the database (sample data)
This clears the collection and inserts a few sample listings.

```bash
nodemon models/init/initDB.js
```

## ▶️ Run the App
```bash
nodemon app.js
```

Then open `http://localhost:8080`.

## MVC Notes
- Model: `models/listModel.js`
- View: `views/listings & layouts`
- Controller: `controllers/listController.js`
- Routing is defined in routes/routes.js

## 🧱 Project Structure
```
SpareRoom/
├── app.js
├── config/
│   └── connectDB.js
├── controllers/
│   └── listController.js
├── models/
│   ├── listModel.js
│   └── init/
│       ├── initDB.js
│       └── sampleData.js
├── public/
│   └── main.css (and other assets)
├── routes/
│   └── routes.js
└── views/
    ├── partials/
    │   ├── navbar.ejs
    │   └── footer.ejs
    └── listings/
        ├── listings.ejs       # All listings grid
        ├── listingDetail.ejs  # Single listing page
        ├── createlisting.ejs  # Create form
        ├── updatelisting.ejs  # Edit form
        └── deletelisting.ejs  # (Optional) delete confirmation
```

## 🌐 Routes
| Method | Route                      | Handler                         | Description                 |
| ------ | -------------------------- | --------------------------------| --------------------------- |
| GET    | `/`                        | inline in `app.js`              | Welcome page                |
| GET    | `/list`                    | `getAllListings`                | Show all listings           |
| GET    | `/list/newlisting`         | `newListing`                    | Show create form            |
| POST   | `/list/createlisting`      | `createListing`                 | Create a new listing        |
| GET    | `/list/:id`                | `showListingDetails`            | Show listing details        |
| GET    | `/list/:id/editlisting`    | `editListing`                   | Show edit form              |
| PUT    | `/list/:id`                | `updateListing`                 | Update listing              |
| DELETE | `/list/:id`                | `deleteListing`                 | Delete listing              |



---
