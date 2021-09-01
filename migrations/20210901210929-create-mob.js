'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      about: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      hitPoints: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      biomeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Biomes"}
      },
      damage: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hostile: {
        default: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Mobs');
  }
};