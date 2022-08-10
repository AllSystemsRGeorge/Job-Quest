const sequelize = require('./../config/connection');

module.exports = {
    up: (queryInterface, sequelize) => {
      return queryInterface.bulkInsert('Jobs', );
    },
    down: (queryInterface, sequelize) => {
      return queryInterface.bulkDelete('jobs', null, {});
    }
  };
