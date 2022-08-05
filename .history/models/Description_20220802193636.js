const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Description extends Model {}

Description.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        initialSalary: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        haveApplied: {
            type: DataTypes.BOOLEAN ,
            allowNull: true,
            defaultValue: false,
            validate: {
                notNull: true,
            },
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        jobsId: {
            type: DataTypes.UUID,
            references: {
                model: 'jobs',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        modelName: 'todos',
    }
);

module.exports = Description;