# 🏠 SpareRoom Clone

A modern property listings web application inspired by [SpareRoom.co.uk](https://www.spareroom.co.uk).  
Built with **Express.js**, **MongoDB**, and **EJS**, following clean MVC architecture with **Bootstrap 5** styling and custom CSS.  
A fully functional CRUD application for managing property listings with responsive design and comprehensive error handling.

## ✨ Live Demo
Visit `http://localhost:8080` after running the application to see the live demo.

## 🚀 Tech Stack

### Backend
- **Node.js 18+** — JavaScript runtime
- **Express.js 5.1.0** — Web framework and routing
- **Mongoose 8.18.0** — MongoDB ODM for database operations
- **method-override 3.0.0** — Support for PUT and DELETE HTTP methods
- **Joi 18.0.1** — Data validation and schema validation

### Frontend
- **EJS 3.1.10** — Server-side templating engine
- **Bootstrap 5.3.3** — CSS framework for responsive design
- **Custom CSS** — SpareRoom-inspired styling with blue/white theme
- **Vanilla JavaScript** — Client-side interactions and form validation

### Database
- **MongoDB** — NoSQL database for storing property listings
- **Default Connection**: `mongodb://127.0.0.1:27017/spare_room`

## 🧩 Features

### Core Functionality
- ✅ **View All Listings** — Grid layout with property cards
- ✅ **View Single Listing** — Detailed property information
- ✅ **Create New Listing** — Add properties with form validation
- ✅ **Edit Listing** — Update existing property information
- ✅ **Delete Listing** — Remove properties with confirmation
- ✅ **Responsive Design** — Mobile-first Bootstrap layout
- ✅ **Error Handling** — Comprehensive error management
- ✅ **Input Validation** — Server-side validation with Joi

### UI/UX Features
- 🎨 **Modern Design** — Clean, SpareRoom-inspired interface
- 📱 **Responsive Layout** — Works on all device sizes
- 🖼️ **Property Cards** — Beautiful card-based listing display
- 🎯 **Intuitive Navigation** — Easy-to-use navigation system
- ⚡ **Fast Loading** — Optimized for performance
- 🎨 **Custom Styling** — Professional blue/white color scheme

## ✅ Prerequisites

- **Node.js 18+** — Download from [nodejs.org](https://nodejs.org/)
- **MongoDB** — Running locally or MongoDB Atlas connection
- **npm** — Comes with Node.js

### MongoDB Setup Options

1. **Local MongoDB**: Install MongoDB locally and run `mongod`


Default connection string: `mongodb://127.0.0.1:27017/spare_room`

## 🧰 Installation & Setup

### 1. Clone and Install
```bash
git clone <repository-url>
cd SpareRoom
npm install
```

### 2. Database Setup
This clears the collection and inserts a few sample listings.
```bash
# Seed the database with sample data
nodemon models/init/initDB.js
```

### 3. Start the Application
```bash
# Development mode with auto-restart
nodemon app.js

# Or production mode
node app.js
```

### 4. Access the Application
Open your browser and navigate to: `http://localhost:8080`

## 🗄️ Database Schema

### Property Listing Model
```javascript
{
  image: String (required)        // Property image URL
  title: String (required)        // Property title
  address: String (required)      // Property address
  description: String (required)  // Property description
  price: Number (required, min: 0) // Monthly rent price
  createdAt: Date (auto-generated) // Creation timestamp
  updatedAt: Date (auto-generated) // Last update timestamp
}
```

### Sample Data
The application comes with 3 sample listings:
- Spacious Two-Bedroom Flat in Manchester (£950/month)
- Luxury Ensuite Room in Oxford (£850/month)
- Cozy Room with Balcony in Bristol (£780/month)

## 🌐 API Routes

| Method | Route | Handler | Description |
|--------|-------|---------|-------------|
| GET | `/` | inline | Welcome page with navigation |
| GET | `/list` | `getAllListings` | Display all property listings |
| GET | `/list/newlisting` | `newListing` | Show create listing form |
| POST | `/list/createlisting` | `createListing` | Create new listing |
| GET | `/list/:id` | `showListingDetails` | Show single listing details |
| GET | `/list/:id/editlisting` | `editListing` | Show edit listing form |
| PUT | `/list/:id` | `updateListing` | Update existing listing |
| DELETE | `/list/:id` | `deleteListing` | Delete listing |

## 🧱 Project Structure

```
SpareRoom/
├── app.js                    # Main application entry point
├── package.json              # Dependencies and scripts
├── config/
│   └── connectDB.js         # MongoDB connection configuration
├── controllers/
│   └── listController.js     # Business logic for listing operations
├── models/
│   ├── listModel.js         # Mongoose schema definition
│   └── init/
│       ├── initDB.js        # Database initialization script
│       └── sampleData.js    # Sample property data
├── public/
│   ├── css/
│   │   └── main.css         # Custom styling
│   └── js/
│       └── script.js        # Client-side JavaScript
├── routes/
│   └── routes.js            # Route definitions
├── schemas/
│   └── schema.js            # Joi validation schemas
├── utils/
│   ├── ExpressError.js      # Custom error class
│   ├── validateList.js      # Validation middleware
│   └── wrapAsync.js         # Async error handling wrapper
└── views/
    ├── error.ejs            # Error page template
    ├── partials/
    │   ├── navbar.ejs       # Navigation component
    │   └── footer.ejs       # Footer component
    └── listings/
        ├── listings.ejs     # All listings grid view
        ├── listingDetail.ejs # Single listing detail view
        ├── createlisting.ejs # Create listing form
        ├── updatelisting.ejs # Edit listing form
        └── deletelisting.ejs # Delete confirmation view
```

## 🔧 Architecture & Patterns

### MVC Architecture
- **Model**: `models/listModel.js` — Data structure and validation
- **View**: EJS templates in `views/` directory — User interface
- **Controller**: `controllers/listController.js` — Business logic and request handling

### Error Handling
- **Custom Error Class**: `ExpressError` for consistent error responses
- **Async Error Wrapper**: `wrapAsync` utility for catching async errors
- **Global Error Handler**: Centralized error handling in app.js
- **404 Handler**: Catches undefined routes

### Middleware Stack
1. `express.urlencoded()` — Parse form data
2. `express.json()` — Parse JSON bodies
3. `express.static()` — Serve static files
4. `methodOverride()` — Enable PUT/DELETE methods
5. Route handlers
6. 404 handler
7. Global error handler

## 🎨 Styling & Design

### Color Scheme
- **Primary Blue**: #004a99 (SpareRoom-inspired)
- **Secondary Blue**: #0073e6 (Hover states)
- **Background**: #f5f7fa (Light gray)
- **Text**: #333 (Dark gray)

### Typography
- **Font Family**: Inter, Segoe UI, Roboto, Arial
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold)

### Responsive Design
- **Mobile First**: Bootstrap's mobile-first approach
- **Breakpoints**: xs, sm, md, lg, xl
- **Grid System**: Bootstrap's 12-column grid

## 🚀 Development

### Environment Variables
```bash
PORT=8080                                    # Server port
MONGO_URL=mongodb://127.0.0.1:27017/spare_room  # MongoDB connection
```

### Development Scripts
```bash
# Install dependencies
npm install

# Seed database
nodemon models/init/initDB.js

# Start development server
nodemon app.js

# Start production server
node app.js
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

## 📞 Support

For questions or issues:
- Check the [Developer Notes](DEVELOPER_NOTES.md) for technical details
- Open an issue on GitHub
- Review the code documentation

---

**Version**: 1.0.0  
**Last Updated**: December 2024  
**Node.js**: 18+  
**MongoDB**: Latest
