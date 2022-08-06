// Monineath's file for POST request of job form/user input
const router = require('express').Router();
const { Jobs } = require('../models');

router.post('/jobCards', async (req, res) => {
    return await Jobs.create({
        userId: req.params.userId,
        company: req.body.company,
        position: req.body.position,
        link: req.body.link,
        salary: req.body.salary,
        haveApplied:req.body.haveApplied,
        feedback: req.body.feedback,
        recruiterName: req.body.recruiterName,
        recruiterPhone:req.body.recruiterPhone,
        recruiterEmail: req.body.recruiterPhone,
        screeningInterview: req.body.screeningInterview,
        technicalInterview: req.body.technicalInterview,
        finalInterview: req.body.finalInterview,
        jobOffer: req.body.jobOffer
    }).then(function(jobs) {
        if (jobs) {
            console.log(jobs);
            res.status(200).send();
        } else {
            res.status(400).send("Error add new jobCard.")
        }
    })
}); 

router.get('/jobCards', async (req,res) => {
    console.log(Jobs);
    if (!req.session.isLoggedIn) {
        return res.redirect('/')
    }
    // res.render('jobsCards', {
    //     // everyJob
    // });
    // const userJobsData = await Jobs.findAll({
    //     where: {
    //         userId: req.session.user.id,
    //     },
    // });

    // const jobs = userJobsData.map(job => job.get({plain: true}));

    // if (!jobs) {console.log('jobs exists')}
    try {
        const everyJob = Jobs.findAll({
            where: Sequelize.and(
                { userId: req.params.userId })
        });
        
        res.render('jobsCards', {
            everyJob
        });
    } catch {
        res.status(404).send("Error in fetching all jobCards");
    }
    
});

module.exports = router;