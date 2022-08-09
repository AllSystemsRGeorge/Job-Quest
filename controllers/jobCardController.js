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
        console.log(everyJob.jobs)
        // everyJob.jobs[0].dataValues.id
        res.render('jobCards', {
            eachJob
        });
    } catch (e) {
        res.status(404).send("Error in fetching all jobCards");
    }
    
});

// router.delete('/jobCards', async (req, res) => {
//     if { Jobs } = req.params;

//     const getTodoById = 'SELECT * FORM todos WHERE id = ?;';
//     const deleteTodoById = 'DELETE FROM todos WHERE = ?;';
    
//     try {
//         const [ todos ] = await connection.query(getTodoById, [queryResult.insertId]);

//         if(todos.length === 0) {
//             return res.status(404).json({error: 'Job not found with that id!'});
//         }
//         await connection.query(deleteTodoById, todoId);
//         res.json(todo[0]);
//     } catch (error) {
//         res.status(500).json({ error });
//     }
// });




module.exports = router;