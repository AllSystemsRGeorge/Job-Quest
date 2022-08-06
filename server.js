require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const expsesh = require('express-session');
const passport = require('passport');
const local = require('./strategies/local');


const SequelizeStore = require('connect-session-sequelize')(expsesh.Store);

const sequelize = require('./config/connection');
const routes = require('./controllers/homepageController');
const jobFormRoute = require('./controllers/jobCard-routes');

// handlebars init
const hbs = exphbs.create({});




// express session settings
const sessionSettings = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    // maxAge: sesh_expiration_time_millisec,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

const app = express();

const PORT = process.env.PORT || 3001;

// handlebars template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middlewares



app.use(express.static('public'));

app.use(expsesh(sessionSettings));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);
app.use(jobFormRoute);
// server listener + sequelize sync
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Go to http://localhost:3001/'));
});