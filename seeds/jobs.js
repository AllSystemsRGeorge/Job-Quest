const jobs = require('./jobs');
const {Jobs} = require('../models');
const sequelize = require('../config/connection');

const seeder = async () => {
    await sequelize.sync({force: true});
    await Jobs.bulkCreate(jobs, {
        individualHooks: true,
    });
    process.exit(0);
};

(async () => {
    await seeder();
})();