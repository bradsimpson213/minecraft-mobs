'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Mobs', [
        {
          name: 'Creeper',
          about: 'Creepers will attempt to sneak up on you and blow up.',
          hitPoints: 20,
          biomeId: 1,
          damage: 49,
          hostile: true, 
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Zombie',
          about: 'Zombies chase you around and continuously hit you.',
          hitPoints: 20,
          biomeId: 1,
          damage: 3,
          hostile: true,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Enderman',
          about: 'Endermen are neutral until looked at or hit.',
          hitPoints: 40,
          biomeId: 6,
          damage: 6,
          hostile: false,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Wolf',
          about: 'Wolves are passive until hit and can be tamed with bones.',
          hitPoints: 4,
          biomeId: 3,
          damage: 1,
          hostile: false,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Tamed Wolf',
          about: 'Wolves are passive until hit and can be tamed with bones.',
          hitPoints: 10,
          biomeId: 3,
          damage: 2,
          hostile: false,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Skeleton',
          about: 'Skeletons will attemt to snipe you with their bow.',
          hitPoints: 20,
          biomeId: 1,
          damage: 3,
          hostile: true,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Spider',
          about: 'Spiders will climb up walls and pounce on you from above.',
          hitPoints: 16,
          biomeId: 1,
          damage: 3,
          hostile: true,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Cow',
          about: 'Peaceful animal found roaming around plains biomes.',
          hitPoints: 10,
          biomeId: 2,
          damage: 0,
          hostile: false,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Mushroom Cow',
          about: 'The same as a cow except it makes mushroom stuff.',
          hitPoints: 10,
          biomeId: 4,
          damage: 0,
          hostile: false,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Pig',
          about: 'Peaceful animal found roaming around plains biomes.',
          hitPoints: 5,
          biomeId: 2,
          damage: 0,
          hostile: false,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Sheep',
          about: 'Peaceful animal found roaming around plains biomes.',
          hitPoints: 7,
          biomeId: 2,
          damage: 0,
          hostile: false,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Stray',
          about: 'Similar to a skeleton. Its arrows inflict slowness.',
          hitPoints: 20,
          biomeId: 8,
          damage: 2,
          hostile: true,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Drowned',
          about: 'A zobie that can be found underwater.',
          hitPoints: 20,
          biomeId: 7,
          damage: 5,
          hostile: true,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Ghast',
          about: 'Shoots explosive fireballs  and flies around.',
          hitPoints: 10,
          biomeId: 5,
          damage: 17,
          hostile: true,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Zombified Piglin',
          about: 'Can be found walking around any area in the nether.',
          hitPoints: 20,
          biomeId: 5,
          damage: 9,
          hostile: false,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Magma Cube',
          about: 'Splits when killed into smaller magma cubes.',
          hitPoints: 16,
          biomeId: 5,
          damage: 6,
          hostile: true,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: 'Husk',
          about: 'Similar to a zombie. Its punches inflict hunger.',
          hitPoints: 20,
          biomeId: 9,
          damage: 3,
          hostile: true,
          createdAt: new Date(), 
          updatedAt: new Date() 
        }
    ], {});
      
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('Mobs', null, {});
    
  }
};
