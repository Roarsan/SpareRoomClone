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

- View a single listing with details

- Create a new listing

- Edit existing listing details

- Delete a listing

- Styled with Bootstrap and custom responsive CSS

- Shared layout with partials (header and footer)

- REST-like routes using method override

## Prerequisites
- Node.js 18+
- MongoDB running locally (or a connection string)
  
## 🧰 Install
```bash
npm install
```
## 🌱 Seed the Database (Sample Data)
This will clear the `lists` collection and insert sample records.
```bash
nodemon models/init/index.js
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
- Routing is defined directly in `app.js` (`app.get('/list', ...)`). There is no separate `routes/` module at the moment.

## 🧱 Project Structure
```
SpareRoom/
├── app.js                 # App entry: defines routes, sets view engine
├── config/
│   └── database.js        # Centralized Mongo connection
├── controllers/
│   └── listController.js  # Controller (business logic)
├── css/
├── main.css
├── models/
│   ├── listModel.js       # Mongoose model
│   └── init/
│       ├── index.js       # Seed script (clears + inserts sample data)
│       └── sampleData.js  # Sample listings
└── views/
    ├── layouts/
    │   ├── navbar.ejs      # Shared navbar
    │   └── footer.ejs      # Shared footer
    └── listings/
        ├── listings.ejs    # Home page: all listings (grid)
        ├── listingDetail.ejs # View single listing
        ├── newlisting.ejs  # Create form
        └── editlisting.ejs # Edit form
```


## 🌐 Routes
| Method | Route                   | Description               |
| ------ | ----------------------- | ------------------------- |
| GET    | `/`                     | Welcome page              |
| GET    | `/list`                 | Show all listings         |
| GET    | `/list/newlisting`      | Show create form          |
| POST   | `/list`                 | Create a new listing      |
| GET    | `/list/:id`             | Show details of a listing |
| GET    | `/list/:id/editlisting` | Edit a listing            |
| PUT    | `/list/:id`             | Update listing            |
| DELETE | `/list/:id`             | Delete listing            |






