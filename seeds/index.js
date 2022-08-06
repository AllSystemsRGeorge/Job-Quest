const users = require('./users');
const {Users} = require('../models');
const sequelize = require('../config/connection');

const seeder = async () => {
    await sequelize.sync({force: true});
    await Users.bulkCreate(users, {
        individualHooks: true,
    });
    process.exit(0);
};

(async () => {
    await seeder();
})();