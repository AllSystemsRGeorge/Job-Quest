const router = require('express').Router();
const passport = require('passport');
const apiController = require('./apiController');
const {Users} = require('../models');
const {Jobs} = require('../models');

// renders signup/landing page
router.get('/', (req,res) => {
    res.render('signUp&LogIn', {
        isLoggedIn: req.session.isLoggedIn,
    });
});

router.get('/signup', (req,res) => {
    res.render('signup');
});

router.get('/signin', (req,res) => {
    res.render('signin', {
        isLoggedIn: req.session.isLoggedIn,
    });
});


// renders users page using user database data
router.get('/users', async (req, res) => {
    try {
        const dbUsersData = await Users.findAll();
        // map db data to plain json
        const users = dbUsersData.map(dbUser => dbUser.get({plain: true}));
        console.log(users);
        res.render('users', {
            users,
            loggedInUser: req.session.user || null,
            isLoggedIn: req.session.isLoggedIn,
        });
    } catch (error) {
        console.log('Err L:25 homepageController', error);
        res.status(500).json({error});
    }
});

// renders user profile page given a user id
router.get('/users/:userId', async (req, res) => {
    try {
        const userData = await Users.findByPk(req.params.userId);
        const user = userData.get({plain: true});

        res.render('userProfile', {user});
    } catch (error) {
        res.status(500).json({error});
    }
});

// router.get('/jobs', async (req, res) => {
//     if(!req.session.isLoggedIn){
//         return res.redirect('/');
//     }

//     try {
//         const userJobsData = await Jobs.findAll({
//             where: {
//                 userId: req.session.user.id,
//             },
//         });

//         const jobs = userJobsData.map(job => job.get({plain: true}));

//         res.render('jobs', {
//             jobs,
//             isLoggedIn: req.session.isLoggedIn,
//         });
//     } catch (error) {
//         res.status(500).json({error});
//     }
// });


router.post('/signin', passport.authenticate('local'), (req, res) => {
    console.log('signin')
    console.log(req.user);
    
    req.session.save(() => {
        req.session.user = req.user;
        req.session.isLoggedIn = true;
        res.json({ success: true });
      });
     
});

router.post('/signup', async (req, res) => {

    const newUser = await Users.create({
        username: req.body.username,
        password: req.body.password
    });

    res.send(newUser)
});


//this is for quotes
router.get('/quotes', (req,res) => {
    res.render('quotes');
});

// sends routes w/ /api to apiController.js file
router.use('/api', apiController);

module.exports = router;