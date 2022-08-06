// Monineath's file for POST request of job form/user input
const router = require('express').Router();
const Jobs = require('../models/Jobs');
const perspectiveJobs = [
    {
        
    }
]

router.post('/api/jobcard', (req, res) => {
    Jobs.create({
        userId: req.body.userId,
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