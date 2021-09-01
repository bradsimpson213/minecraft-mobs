'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Biomes', [
      { name: 'Overworld dimension', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Plains', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Forest', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mushroom Plains', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nether Dimension', createdAt: new Date(), updatedAt: new Date() },
      { name: 'End Dimension', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ocean', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Snowy Plains', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Desert', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Biomes', null, {});
  }
};
