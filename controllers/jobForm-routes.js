const router = require('express').Router();
const { Jobs } = require('../models');

router.get('/jobform', async (req,res) => {
    
    if (!req.session.isLoggedIn) {
        return res.redirect('/')
    }
    try {
        res.render('landingPage');
        }
    catch {
        res.status(404).send("Error in fetching all jobCards");
    }
});

module.exports = router;
