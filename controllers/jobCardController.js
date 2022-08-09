// Monineath's file for POST request of job form/user input
const router = require('express').Router();
const { Jobs } = require('../models');
const { Users } = require('../models');

router.get('/jobCards', async (req,res) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/')
    }
    try {
        const everyJob = await Jobs.findAll({
            where: { userId: req.session.user.id}
        });
        console.log(everyJob);
        res.render('jobCards', {
            everyJob
        });
    } catch (e) {
        res.status(404).send("Error in fetching all jobCards");
    }
    
});

module.exports = router;