const Users = require('./Users');
const Jobs = require('./Jobs');

Jobs.belongsTo(Users, {
    foreignKey: 'userId',
});

Users.hasMany(Jobs, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});


module.exports = {
    Users,
    Jobs,
};

