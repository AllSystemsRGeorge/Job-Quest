const router = require('express').Router();
const { Jobs } = require('../models');

router.post('/jobCards', async (req, res) => {
    const newJobCard = await Jobs.create({
        company: req.body.company,
        position: req.body.position,
        link: req.body.link,
        salary: req.body.salary,
        haveApplied:req.body.haveApplied,
        feedback: req.body.feedback,
        recruiterName: req.body.recruiterName,
        recruiterPhone:req.body.recruiterPhone,
        recruiterEmail: req.body.recruiterPhone,
        // conditions for if dates not selected
        screeningInterview: req.body.screeningInterview == "" ? null : req.body.screeningInterview,
        technicalInterview: req.body.technicalInterview == "" ? null : req.body.technicalInterview,
        finalInterview: req.body.finalInterview == "" ? null : req.body.finalInterview,
        jobOffer: req.body.jobOffer
    });

    res.send(newJobCard)
});


// renders job form on html
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
