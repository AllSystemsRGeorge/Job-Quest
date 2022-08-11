const router = require('express').Router();
const { Jobs } = require('../models');
const AllJobs = require('../seeds/jobs');

// creates new job card with user input
router.post('/jobform', async (req, res) => {
    
    const newJobCard = await Jobs.create({
        userId: req.session.user.id,
        company: req.body.company,
        position: req.body.position,
        link: req.body.link,
        salary: req.body.salary
    });

    res.send(newJobCard);
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
        res.render('editJobForm', {
            selectedJob
        });
    } catch {
        res.status(404).send("Error in fetching all jobCards");
    }
});

router.get('/search', async (req, res) => {
    if (!req.session.isLoggedIn) {
            return res.redirect('/')
        }
    try {

        const company = req.query.company;
        const everyJob = await Jobs.findAll({
            where: {
            userId: req.session.user.id,
            company,
                }
        });
        
        res.send(everyJob);

    } catch {
        res.status(404).send("Error in fetching all jobCards");
    }
});

// to update jobcards
router.put('/jobform', async (req, res) => {
    try {
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
        res.send(updateJobCard);
    } catch(error) {
        res.status(404).send("Fail to update job card.");
    }
});

module.exports = router;
