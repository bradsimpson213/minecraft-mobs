'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [
      { 
        name: 'Bow', 
        about: 'A mighty bow for shooting stuff', 
        damage: 9, 
        armor: 0, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Netherite sword', 
        about: 'A sharp, durable melle weapon', 
        damage: 8, 
        armor: 0, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Diamond Sword', 
        about: 'A less sharp, less durable melle weapon', 
        damage: 7, 
        armor: 0, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Diamond Chestplate', 
        about: 'A strong, durable breastplate', 
        damage: 0, 
        armor: 7, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Diamond Leggings', 
        about: 'Strong, durable pants', 
        damage: 0, 
        armor: 6, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Diamond Helmet', 
        about: 'A strong, durable helmet', 
        damage: 0, 
        armor: 4, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Diamond Boots', 
        about: 'Strong, durable shoes', 
        damage: 0, 
        armor: 3, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'String', 
        about: 'Good for bow strings and tripwires', 
        damage: 0, 
        armor: 0, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Gunpowder', 
        about: 'Useful for explosives from tnt to fireworks', 
        damage: 0, 
        armor: 0, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Ender Pearl', 
        about: 'A One-Use green orb that teleports the user', 
        damage: 0, 
        armor: 0, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Magma Cream', 
        about: 'A warm orb useful for brewing potions', 
        damage: 0, 
        armor: 0, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Raw Meat', 
        about: 'Can be cooked and eaten to restore hunger', 
        damage: 0, 
        armor: 0, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Leather', 
        about: 'Useful for making armor and other items', 
        damage: 0, 
        armor: 0, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Trident', 
        about: 'A stong melle and ranged weapon', 
        damage: 8, 
        armor: 0, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        name: 'Diamond Axe', 
        about: 'Some axes are stronger than swords', 
        damage: 8, 
        armor: 0, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
