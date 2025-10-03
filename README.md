# SpareRoom (MVC Express + Mongoose + EJS)

A minimal SpareRoom-style listings app built with Express, Mongoose, and EJS, structured in a simple MVC pattern.

## Tech Stack
- Express 5 (routing, middleware)
- Mongoose 8 (MongoDB ODM)
- EJS (server-side templates)

## Project Structure
```
SpareRoom/
├── app.js                 # App entry: defines routes, sets view engine
├── config/
│   └── database.js        # Centralized Mongo connection
├── controllers/
│   └── listController.js  # Controller (business logic)
├── models/
│   ├── listModel.js       # Mongoose model
│   └── init/
│       ├── index.js       # Seed script (clears + inserts sample data)
│       └── sampleData.js  # Sample listings
└── views/
    └── listings/
        └── index.ejs      # Renders list of listings
```

## Prerequisites
- Node.js 18+
- MongoDB running locally (or a connection string)

## Environment
Optionally set a custom Mongo URL via `MONGO_URL` (defaults to `mongodb://127.0.0.1:27017/spare_room`).

```bash
export MONGO_URL="mongodb://127.0.0.1:27017/spare_room"
```

## Install
```bash
npm install
```

## Run the App
```bash
nodemon app.js
```

Then open `http://localhost:8080`.

## Seed the Database (Sample Data)
This will clear the `lists` collection and insert sample records.
```bash
nodemon models/init/index.js
```

## Routes
- `GET /` — Welcome page with link to listings
- `GET /list` — Render all listings via EJS

## MVC Notes
- Model: `models/listModel.js`
- View: `views/listings/index.ejs`
- Controller: `controllers/listController.js`
- Routing is defined directly in `app.js` (`app.get('/list', ...)`). There is no separate `routes/` module at the moment.



