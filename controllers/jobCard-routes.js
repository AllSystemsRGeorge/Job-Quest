// Monineath's file for POST request of job form/user input
const router = require('express').Router();
const { Jobs } = require('../models');
const AllJobs = require('../seeds/jobs');

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

router.get('/jobCards/:userId', async (req,res) => {
    // if (!req.session.isLoggedIn) {
    //     return res.redirect('/')
    // }
    try {
        // const everyJob = Jobs.findAll({
        //     where: Sequelize.and(
        //         { userId: req.params.userId })
        // });
        const everyJob = AllJobs;
        res.render('jobCards', {
            everyJob
        });
    } catch {
        res.status(404).send("Error in fetching all jobCards");
    }
    
});

router.get('/search', async (req, res) => {
    // if (!req.session.isLoggedIn) {
    //         return res.redirect('/')
    //     }
    console.log('calling the backend');
    try {

        const company = req.query.company;
         // const everyJob = Jobs.findAll({
        //     where: {
            // userId: req.params.userId;
            // company,
        //         }
        // });
       
        // *** remove the following 2 lines whenever the db is accessible ***
        // *** and then rename the filteredJobs to everyJob ***

        const everyJob = AllJobs;
        const filteredJobs = everyJob.filter((job) => job.companyName === company);
        res.send(filteredJobs);

    } catch {
        res.status(404).send("Error in fetching all jobCards");
    }
});



module.exports = router;