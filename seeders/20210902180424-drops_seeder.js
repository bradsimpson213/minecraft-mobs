'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Drops', [
        {
          mobId: 6,
          itemId: 1,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 2,
          itemId: 3,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 2,
          itemId: 4,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 2,
          itemId: 5,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 2,
          itemId: 6,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 2,
          itemId: 7,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 2,
          itemId: 15,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 3,
          itemId: 10,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 7,
          itemId: 8,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 8,
          itemId: 12,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 9,
          itemId: 12,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 10,
          itemId: 12,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 11,
          itemId: 12,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 9,
          itemId: 13,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 8,
          itemId: 13,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 12,
          itemId: 1,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 14,
          itemId: 9,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 16,
          itemId: 11,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 17,
          itemId: 3,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 17,
          itemId: 4,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 17,
          itemId: 5,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 17,
          itemId: 6,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 17,
          itemId: 7,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 13,
          itemId: 14,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          mobId: 1,
          itemId: 9,
          createdAt: new Date(), 
          updatedAt: new Date() 
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Drops', null, {});

  }
};
