const User = require('./User');
const Jobs = require('./Jobs');

Jobs.belongsTo(User, {
    foreignKey: 'userId',
});

User.hasMany(Jobs, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});


module.exports = {
    User,
    Jobs,
};

