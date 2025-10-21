# 🏠 SpareRoom Clone - Developer Notes

## 📋 Project Overview
A property listings web application inspired by SpareRoom.co.uk, built with Node.js, Express, MongoDB, and EJS templating. The application follows MVC architecture and provides CRUD operations for property listings.

## 🏗️ Architecture & Tech Stack

### Backend Technologies
- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework and routing
- **Mongoose 8.18.0** - MongoDB ODM for database operations
- **method-override 3.0.0** - Enables PUT/DELETE methods via HTML forms

### Frontend Technologies
- **EJS 3.1.10** - Server-side templating engine
- **Bootstrap 5.3.3** - CSS framework for responsive design
- **Custom CSS** - SpareRoom-inspired styling with blue/white theme
- **Vanilla JavaScript** - Form validation and client-side interactions

### Database
- **MongoDB** - NoSQL database for storing property listings
- **Default Connection**: `mongodb://127.0.0.1:27017/spare_room`

## 📁 Project Structure

```
SpareRoom/
├── app.js                    # Main application entry point
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
├── utils/
│   ├── ExpressError.js      # Custom error class
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

## 🗄️ Database Schema

### ListModel Schema
```javascript
{
  image: String (required)     // Property image URL
  title: String (required)    // Property title
  address: String (required)  // Property address
  description: String (required) // Property description
  price: Number (required, min: 0) // Monthly rent price
  timestamps: true            // Auto-generated createdAt/updatedAt
}
```

## 🛣️ API Routes

| Method | Route | Handler | Description |
|--------|-------|---------|-------------|
| GET | `/` | inline | Welcome page with navigation |
| GET | `/list` | getAllListings | Display all property listings |
| GET | `/list/newlisting` | newListing | Show create listing form |
| POST | `/list/createlisting` | createListing | Create new listing |
| GET | `/list/:id` | showListingDetails | Show single listing details |
| GET | `/list/:id/editlisting` | editListing | Show edit listing form |
| PUT | `/list/:id` | updateListing | Update existing listing |
| DELETE | `/list/:id` | deleteListing | Delete listing |

## 🔧 Key Components

### Error Handling
- **ExpressError Class**: Custom error class with status codes
- **wrapAsync**: Utility function to catch async errors and pass to error middleware
- **Global Error Handler**: Centralized error handling in app.js
- **404 Handler**: Catches undefined routes

### Middleware Stack
1. `express.urlencoded()` - Parse form data
2. `express.json()` - Parse JSON bodies
3. `express.static()` - Serve static files
4. `methodOverride()` - Enable PUT/DELETE methods
5. Route handlers
6. 404 handler
7. Global error handler

### Database Operations
- **Connection**: Automatic MongoDB connection on app startup
- **Sample Data**: Pre-populated with 3 sample listings
- **CRUD Operations**: Full Create, Read, Update, Delete functionality

## 🎨 Frontend Features

### UI Components
- **Responsive Navigation**: Bootstrap navbar with mobile toggle
- **Property Cards**: Grid layout for listing display
- **Form Validation**: Client-side validation with Bootstrap classes
- **Error Pages**: Custom error handling with user-friendly messages

### Styling
- **Color Scheme**: SpareRoom-inspired blue (#004a99) and white theme
- **Typography**: Inter font family for modern appearance
- **Layout**: Bootstrap grid system with custom spacing
- **Responsive Design**: Mobile-first approach

## 🚀 Development Setup

### Prerequisites
- Node.js 18+
- MongoDB running locally
- npm or yarn package manager

### Installation
```bash
# Install dependencies
npm install

# Seed database with sample data
nodemon models/init/initDB.js

# Start development server
nodemon app.js
```

### Environment Variables
- `PORT`: Server port (default: 8080)
- `MONGO_URL`: MongoDB connection string (default: mongodb://127.0.0.1:27017/spare_room)

## 🔍 Code Quality & Patterns

### MVC Architecture
- **Model**: `listModel.js` - Data structure and validation
- **View**: EJS templates in `views/` directory
- **Controller**: `listController.js` - Business logic and request handling

### Error Handling Patterns
- All async controller functions wrapped with `wrapAsync()`
- Custom error class for consistent error responses
- Centralized error middleware for global error handling

### Code Organization
- Separation of concerns with dedicated directories
- Reusable components (navbar, footer)
- Utility functions for common operations

## 🐛 Known Issues & Limitations

### Current Limitations
1. **No Authentication**: No user management or login system
2. **No Image Upload**: Only URL-based image storage
3. **No Search/Filter**: Basic listing display without search functionality
4. **No Pagination**: All listings displayed on single page
5. **No Input Validation**: Server-side validation not implemented
6. **No Error Recovery**: Limited error recovery mechanisms

### Potential Improvements
1. **Add User Authentication**: Implement user registration/login
2. **Image Upload**: Add file upload for property images
3. **Search & Filters**: Implement search by location, price range, etc.
4. **Pagination**: Add pagination for large datasets
5. **Input Validation**: Server-side validation with express-validator
6. **API Documentation**: Add Swagger/OpenAPI documentation
7. **Testing**: Add unit and integration tests
8. **Logging**: Implement proper logging with winston/morgan

## 🔒 Security Considerations

### Current Security Measures
- Basic error handling prevents information leakage
- Method override for proper HTTP methods

### Security Improvements Needed
1. **Input Sanitization**: Prevent XSS attacks
2. **Rate Limiting**: Prevent abuse of endpoints
3. **CORS Configuration**: Proper cross-origin resource sharing
4. **Environment Variables**: Secure configuration management
5. **HTTPS**: SSL/TLS encryption in production

## 📊 Performance Considerations

### Current Performance
- Direct MongoDB queries without optimization
- No caching mechanisms
- Static file serving through Express

### Performance Optimizations
1. **Database Indexing**: Add indexes for frequently queried fields
2. **Caching**: Implement Redis for session/data caching
3. **CDN**: Use CDN for static assets
4. **Compression**: Enable gzip compression
5. **Database Connection Pooling**: Optimize MongoDB connections

## 🧪 Testing Strategy

### Recommended Testing Approach
1. **Unit Tests**: Test individual controller functions
2. **Integration Tests**: Test database operations
3. **E2E Tests**: Test complete user workflows
4. **API Tests**: Test all route endpoints

### Testing Tools
- **Jest**: Unit testing framework
- **Supertest**: HTTP assertion library
- **MongoDB Memory Server**: In-memory database for testing

## 🚀 Deployment Considerations

### Production Checklist
- [ ] Set up environment variables
- [ ] Configure MongoDB Atlas or production database
- [ ] Set up process manager (PM2)
- [ ] Configure reverse proxy (Nginx)
- [ ] Set up SSL certificates
- [ ] Configure logging and monitoring
- [ ] Set up CI/CD pipeline

### Docker Configuration
Consider adding Docker support for containerized deployment:
```dockerfile
# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
```

## 📝 Development Guidelines

### Code Style
- Use consistent indentation (2 spaces)
- Follow JavaScript ES6+ features
- Use meaningful variable and function names
- Add comments for complex logic

### Git Workflow
- Use feature branches for new development
- Write descriptive commit messages
- Keep commits atomic and focused
- Use pull requests for code review

### Documentation
- Keep README.md updated
- Document API endpoints
- Add inline comments for complex functions
- Maintain this developer notes file

---

## 📞 Support & Contact

For questions or issues related to this project, refer to:
- Project README.md for basic setup
- This developer notes file for technical details
- GitHub issues for bug reports and feature requests

**Last Updated**: $(date)
**Version**: 1.0.0
**Branch**: ft--Error-handling
