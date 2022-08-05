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
        company_name: {
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
        initial_salary: {
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
        recruitner_name: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false,
        },
        recruitner_phone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false,
        },
        recruitner_email: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: false,
        },
        screening_interview: {
            type: DataTypes.DATETIME,
            allowNull: true,
            defaultValue: false,
        },
        technical_interview: {
            type: DataTypes.DATETIME,
            allowNull: true,
            defaultValue: false,
        },
        final_interview: {
            type: DataTypes.DATETIME,
            allowNull: true,
            defaultValue: false,
        },
        job_offer: {
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