const router = require('express').Router();
const { Jobs } = require('../models');
const AllJobs = require('../seeds/jobs');

// creates new job card with user input
router.post('/jobCards', async (req, res) => {
    
    const newJobCard = await Jobs.create({
        userId: req.session.user.id,
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


// renders empty job form on /jobform extension
router.get('/jobform', async (req,res) => {
    
    if (!req.session.isLoggedIn) {
        return res.redirect('/')
    }
    try {
        res.render('jobForm');
        }
    catch {
        res.status(404).send("Error in fetching all jobCards");
    }
});

// renders existing jobcard into job form on /jobform extension
router.get('/jobform/:id', async (req,res) => {
    try {
        const dbSelectedJob = await Jobs.findByPk(req.params.id);
        selectedJob = dbSelectedJob.get({plain:true});
        console.log(selectedJob);
        res.render('editJobForm', {
            selectedJob
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

// to update jobcards
router.put('/jobform', async (req, res) => {
    const updateJobCard = await Jobs.update(
        {
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
        },
        {
            where: {id: req.body.id }
        }
    );

    res.send(updateJobCard)
});

// to delete jobcards


module.exports = router;
