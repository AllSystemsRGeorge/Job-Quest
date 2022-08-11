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
        userId: {
            type: DataTypes.UUID,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        company: {
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
        salary: {
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
        recruiterName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        recruiterPhone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        recruiterEmail: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        screeningInterview: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        technicalInterview: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        finalInterview: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        jobOffer: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        }
    },
    {
        sequelize,
        modelName: 'jobs',
    }
);

module.exports = Jobs;