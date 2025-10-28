const session = require('express-session');
const MongoStore = require('connect-mongo');

function setSession(app){
  const store = MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    touchAfter: 24 * 3600, 
  });

  app.use(session({
    store,
    name: 'spare.sid', // custom cookie name
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,       // prevent client-side JS access
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  }));

};
 

module.exports =setSession;