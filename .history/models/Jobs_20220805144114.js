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
        position: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
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
            allowNull: true,
        },
        haveApplied: {
            type: DataTypes.BOOLEAN ,
            allowNull: true,
            defaultValue: false,
        },
        feedback: {
            type: DataTypes.BOOLEAN ,
            allowNull: true,
            defaultValue: false,
        },
        recruitnerName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false,
        },
        recruitnerPhone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false,
        },
        recruitnerEmail: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false,
        },
        screeningInterview: {
            type: DataTypes.DATETIME,
            allowNull: true,
            defaultValue: false,
        },
        technicalInterview: {
            type: DataTypes.DATETIME,
            allowNull: true,
            defaultValue: false,
        },
        finalInterview: {
            type: DataTypes.DATETIME,
            allowNull: true,
            defaultValue: false,
        },
        offerPackage: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false,
        }
    },
    {
        sequelize,
        modelName: 'jobs',
    }
);

module.exports = Jobs;