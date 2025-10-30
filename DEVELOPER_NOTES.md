# 🏠 SpareRoom Clone - Developer Notes

## 📋 Project Overview
A modern property listings web application inspired by SpareRoom.co.uk, built with Node.js, Express, MongoDB, and EJS templating. The application follows clean MVC architecture and provides comprehensive CRUD operations for property listings with responsive design, error handling, and input validation.

## 🏗️ Architecture & Tech Stack

### Backend
- **Node.js 18+** - JavaScript runtime
- **Express.js 5.1.0** - Web framework
- **Mongoose 8.18.0** - MongoDB ODM
- **express-session 1.18.2** - Session management
- **connect-mongo 5.1.0** - MongoDB session store
- **method-override 3.0.0** - PUT/DELETE support
- **Joi 18.0.1** - Data validation
- **dotenv 17.2.3** - Environment variables

### Frontend Technologies
- **EJS 3.1.10** - Server-side templating engine
- **Bootstrap 5.3.3** - CSS framework for responsive design
- **Custom CSS** - SpareRoom-inspired styling with blue/white theme
- **Vanilla JavaScript** - Form validation and client-side interactions

### Database
- **MongoDB** - NoSQL database
- **Default Connection**: `mongodb://127.0.0.1:27017/spare_room`

## 📁 Project Structure

```
SpareRoom/
├── app.js                      # Main application entry point
├── config/
│   ├── connectDB.js           # MongoDB connection
│   ├── session.js             # Session configuration
│   └── flash.js               # Flash messages setup
├── controllers/
│   ├── authController.js      # Auth views and session control
│   └── listController.js      # Listing business logic
├── initDB/
│   └── initDB.js              # DB seed script
├── joiSchemas/
│   ├── listSchema.js          # Listing validation
│   └── userSchema.js          # User validation
├── middleware/
│   ├── auth.js                # isLoggedIn, isOwner
│   └── validateSchema.js      # Joi validator
├── models/
│   ├── listModel.js           # Listing schema
│   ├── sampleData/
│   │   └── sampleData.js      # Seed data
│   └── userModel.js           # User schema
├── public/                    # Static assets
├── routes/
│   ├── authRoutes.js          # Auth routes
│   └── listRoutes.js          # Listing routes
├── services/
│   ├── listService.js         # Listing DB ops
│   └── userService.js         # Auth logic (bcrypt)
├── utils/
│   ├── ExpressError.js        # Custom error class
│   ├── httpStatus.js          # HTTP status helpers
│   └── wrapAsync.js           # Async wrapper
└── views/
    ├── error.ejs              # Error page
    ├── partials/
    │   ├── navbar.ejs
    │   └── footer.ejs
    ├── auth/
    │   ├── login.ejs
    │   └── register.ejs
    └── listings/
        ├── listings.ejs
        ├── listingDetail.ejs
        ├── createlisting.ejs
        ├── updatelisting.ejs
        └── deletelisting.ejs
```

## 🗄️ Database Schema

### ListModel Schema
```javascript
{
  image: String (required)     // Property image URL
  title: String (required)    // Property title
  address: String (required)  // Property address
  description: String (required) // Property description
  price: Number (required, min: 0) // Monthly rent
  createdAt: Date (auto)      // Creation timestamp
  updatedAt: Date (auto)      // Update timestamp
}
```

## 🛣️ API Routes

| Method | Route | Handler | Description |
|--------|-------|---------|-------------|
| GET | `/` | inline | Welcome page with navigation |
| GET | `/list/listing` | getAllListings | Display all property listings |
| GET | `/list/newlisting` | newListing | Show create listing form |
| POST | `/list/createlisting` | createListing | Create new listing |
| GET | `/list/:id` | showListingDetails | Show single listing details |
| GET | `/list/:id/editlisting` | editListing | Show edit listing form |
| PUT | `/list/:id` | updateListing | Update existing listing |
| DELETE | `/list/:id` | deleteListing | Delete listing |

## 🔧 Key Components

### Error Handling System
- **ExpressError Class**: Custom error class with status codes and messages
- **wrapAsync**: Utility function to catch async errors and pass to error middleware
- **Global Error Handler**: Centralized error handling in app.js with user-friendly messages
- **404 Handler**: Catches undefined routes and redirects to error page
- **Validation Errors**: Joi schema validation with detailed error messages

### Session Management
- **MongoDB Store**: Sessions persisted in MongoDB
- **Security**: HttpOnly cookies, secure session secrets
- **Configuration**: 7-day session duration, custom session name (`spare.sid`)


### Input Validation
- **Joi Schemas**: Server-side validation for all form inputs
- **Required Fields**: All fields (image, title, address, description, price) are required
- **Data Types**: Proper type validation (String, Number with min constraints)
- **Error Messages**: User-friendly validation error messages

## 🎨 Frontend Features

### UI Components
- **Responsive Navigation**: Bootstrap navbar with mobile toggle and brand styling
- **Property Cards**: Grid layout for listing display with hover effects
- **Form Validation**: Client-side validation with Bootstrap classes and server-side validation
- **Error Pages**: Custom error handling with user-friendly messages and proper status codes
- **Loading States**: Smooth transitions and responsive design

### Styling System
- **Color Scheme**: SpareRoom-inspired blue (#004a99) and white theme
- **Typography**: Inter font family for modern, clean appearance
- **Layout**: Bootstrap grid system with custom spacing and responsive breakpoints
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Custom CSS**: Professional styling with hover effects and smooth transitions

### Template Structure
- **Partials**: Reusable navbar and footer components
- **EJS Templates**: Server-side rendering with dynamic content
- **Form Handling**: Proper form submission with method override for PUT/DELETE
- **Error Handling**: Dedicated error template with consistent styling

## 🚀 Development Setup

### Prerequisites
- **Node.js 18+** - Download from [nodejs.org](https://nodejs.org/)
- **MongoDB** - Running locally or MongoDB Atlas connection
- **npm** - Comes with Node.js
- **Git** - For version control

### Installation Steps
```bash
# Clone and install
git clone <repository-url>
cd SpareRoom
npm install

# Environment setup
cp .env.example .env  # Update with your values

# Database setup
nodemon models/init/initDB.js

# Start development
nodemon app.js
```

### Environment Variables
```bash
PORT=8080
MONGO_URL=mongodb://127.0.0.1:27017/spare_room
SESSION_SECRET=your-super-secret-session-key-change-this-in-production
NODE_ENV=development
```

### Development Workflow
1. **Database Setup**: Run initDB.js to populate with sample data
2. **Start Server**: Use nodemon for auto-restart during development
3. **Access Application**: Navigate to http://localhost:8080
4. **Test Features**: Verify all CRUD operations work correctly

### Current Security
- **Session Security**: HttpOnly cookies, secure secrets
- **Input Validation**: Joi schema validation
- **Error Handling**: Prevents information leakage
- **Environment Variables**: Secure configuration management

### MVC Architecture Implementation
- **Model**: `listModel.js` - Mongoose schema with validation and timestamps
- **View**: EJS templates in `views/` directory with partials for reusability
- **Controller**: `listController.js` - Business logic and request handling with async/await

### Error Handling Patterns
- All async controller functions wrapped with `wrapAsync()` utility
- Custom error class (`ExpressError`) for consistent error responses
- Centralized error middleware for global error handling
- Proper HTTP status codes and user-friendly error messages

### Code Organization
- **Separation of Concerns**: Dedicated directories for different functionality
- **Reusable Components**: Navbar and footer partials
- **Utility Functions**: Common operations like error handling and validation
- **Clean Routing**: RESTful route structure with proper HTTP methods

### Validation Strategy
- **Client-side**: Bootstrap form validation classes
- **Server-side**: Joi schema validation with detailed error messages
- **Database**: Mongoose schema validation with required fields
- **Error Recovery**: Graceful error handling with user feedback

## 🐛 Known Issues & Limitations

### Current Limitations
1. **No Image Upload**: Only URL-based image storage (no file upload)
2. **No Search/Filter**: Basic listing display without search functionality
3. **No Pagination**: All listings displayed on single page
4. **No Advanced Validation**: Basic server-side validation only
5. **No Error Recovery**: Limited error recovery mechanisms
6. **No API Documentation**: No Swagger/OpenAPI documentation
7. **No Testing**: No unit or integration tests

### Technical Debt
- **Code Duplication**: Some template code is duplicated in listings.ejs
- **Error Handling**: Could be more granular for different error types
- **Validation**: Could include more sophisticated validation rules
- **Performance**: No caching or database optimization

### Potential Improvements
1. **User Authentication**: Implement user registration/login with JWT
2. **Image Upload**: Add file upload for property images with multer
3. **Search & Filters**: Implement search by location, price range, property type
4. **Pagination**: Add pagination for large datasets
5. **Advanced Validation**: Enhanced input validation with express-validator
6. **API Documentation**: Add Swagger/OpenAPI documentation
7. **Testing**: Add unit and integration tests with Jest
8. **Logging**: Implement proper logging with winston/morgan
9. **Caching**: Add Redis for session/data caching
10. **Real-time Features**: Add WebSocket support for real-time updates

## 🔒 Security Considerations

### Current Security Measures
- **Error Handling**: Prevents information leakage through proper error messages
- **Method Override**: Proper HTTP methods for RESTful operations
- **Input Validation**: Joi schema validation prevents malformed data
- **MongoDB Injection**: Mongoose ODM prevents NoSQL injection attacks

### Security Improvements Needed
1. **Input Sanitization**: Prevent XSS attacks with proper HTML escaping
2. **Rate Limiting**: Prevent abuse of endpoints with express-rate-limit
3. **CORS Configuration**: Proper cross-origin resource sharing
4. **Environment Variables**: Secure configuration management with dotenv
5. **HTTPS**: SSL/TLS encryption in production
6. **Authentication**: User authentication and authorization
7. **Session Management**: Secure session handling
8. **CSRF Protection**: Cross-site request forgery protection

## 📊 Performance Considerations

### Current Performance Features
- **Direct MongoDB Queries**: Efficient database operations
- **Static File Serving**: Express static middleware for assets
- **Bootstrap CDN**: External CSS framework for faster loading
- **Minimal Dependencies**: Lightweight package.json

### Performance Optimizations Needed
1. **Database Indexing**: Add indexes for frequently queried fields (title, address, price)
2. **Caching**: Implement Redis for session/data caching
3. **CDN**: Use CDN for static assets and images
4. **Compression**: Enable gzip compression with compression middleware
5. **Database Connection Pooling**: Optimize MongoDB connections
6. **Image Optimization**: Compress and resize images
7. **Lazy Loading**: Implement lazy loading for images
8. **Code Splitting**: Split JavaScript bundles

## 🧪 Testing Strategy

### Recommended Testing Approach
1. **Unit Tests**: Test individual controller functions and utilities
2. **Integration Tests**: Test database operations and API endpoints
3. **E2E Tests**: Test complete user workflows with Playwright/Cypress
4. **API Tests**: Test all route endpoints with Supertest

### Testing Tools
- **Jest**: Unit testing framework with mocking capabilities
- **Supertest**: HTTP assertion library for API testing
- **MongoDB Memory Server**: In-memory database for testing
- **Playwright/Cypress**: End-to-end testing frameworks

### Test Coverage Goals
- Controllers: 100% CRUD operations
- Models: Schema validation
- Routes: All endpoints
- Utilities: Error handling

## 🚀 Deployment



## 📝 Development Guidelines

### Code Standards
- 2-space indentation
- ES6+ features (async/await, arrow functions)
- Meaningful variable names
- Comments for complex logic
- Graceful error handling

### Git Workflow
- Feature branches for development
- Descriptive commit messages
- Atomic commits
- Pull requests for review
- Branch protection on main

---

**Version**: 1.0.0  
**Last Updated**: October 2025  
**Node.js**: 18+  
**MongoDB**: Latest