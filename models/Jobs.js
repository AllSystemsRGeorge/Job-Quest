const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Jobs extends Model {}

Jobs.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        companyName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        userId: {
            type: DataTypes.UUID,
            references: {
                model: 'users',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        modelName: 'jobs',
    }
);

module.exports = Jobs;