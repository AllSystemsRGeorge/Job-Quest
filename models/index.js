const Users = require('./Users');
const Jobs = require('./Jobs');

Users.hasMany(Jobs, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Jobs.belongsTo(Users, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

module.exports = {
    Users,
    Jobs,
};

