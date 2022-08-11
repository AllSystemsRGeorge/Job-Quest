// to render job cards at /jobcard extension
const router = require('express').Router();
const { Users, Jobs } = require('../models');
const { every } = require('../seeds/jobs');

router.get('/jobCards', async (req,res) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/')
    }
    try {
       
        const dbEveryJob = await Users.findByPk(req.session.user.id, {
            include: [{
                model: Jobs
            }]
        });
        everyJob = dbEveryJob.get({plain:true});
        // const everyJob = dbEveryJob.map(everyJobs => everyJobs.get({plain:true}));
        eachJob = everyJob.jobs
        // console.log(everyJob.jobs)
        // everyJob.jobs[0].dataValues.id
        res.render('jobCards', {
            eachJob
        });
    } catch (e) {
        res.status(404).send("Error in fetching all jobCards");
    }
    
});

router.get('/jobCards/clear', async (req,res) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/')
    }
    try {
       
        const dbEveryJob = await Users.findByPk(req.session.user.id, {
            include: [{
                model: Jobs
            }]
        });
        everyJob = dbEveryJob.get({plain:true});
        // const everyJob = dbEveryJob.map(everyJobs => everyJobs.get({plain:true}));
        eachJob = everyJob.jobs
        // console.log(everyJob.jobs)
        // everyJob.jobs[0].dataValues.id
        res.send(
            eachJob
        );
    } catch (e) {
        res.status(404).send("Error in fetching all jobCards");
    }
    
});

router.delete('/jobCards/:id', async (req, res) => {
    const jobsId  = req.params.id;
    
    try{
    const jobs  = await Jobs.destroy ({
            where: {
               id: jobsId
            },
        });

        res.json(jobs);

    } catch(error) {
        console.error(error);
    }
});




module.exports = router;