const router = require('express').Router();
const { Jobs } = require('../models');

router.post('/jobCards', async (req, res) => {
    console.log(req.body);
    const newJobCard = await Jobs.create({
        company: req.body.company,
        position: req.body.position,
        link: req.body.link,
    });

    res.send(newJobCard)
});
    // Jobs.create({
    //     company: req.body.company,
    //     position: req.body.position,
    //     link: req.body.link,
        // salary: req.body.salary,
        // haveApplied:req.body.haveApplied,
        // feedback: req.body.feedback,
        // recruiterName: req.body.recruiterName,
        // recruiterPhone:req.body.recruiterPhone,
        // recruiterEmail: req.body.recruiterPhone,
        // screeningInterview: req.body.screeningInterview,
        // technicalInterview: req.body.technicalInterview,
        // finalInterview: req.body.finalInterview,
        // jobOffer: req.body.jobOffer
    // }).then(function(jobs) {
    //     if (jobs) {
    //         console.log(jobs);
    //         res.status(200).send();
    //     } else {
    //         res.status(400).send("Error add new jobCard.")
    //     }
    // })
// }); 
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
