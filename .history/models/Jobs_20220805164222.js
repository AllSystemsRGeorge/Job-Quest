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
            defaultValue: null,
        },
        recruitner_phone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        recruitner_email: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        screening_interview: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
        technical_interview: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
        final_interview: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
        job_offer: {
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