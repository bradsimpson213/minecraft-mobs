const { sequelize, Biome, Item, Mob } = require("./models");

const testConnection = async() => {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log("Database connection failure.");
    console.log(e);
    return;
  }
  console.log("Database connection success!");
  console.log("GO GO GADGET: Sequelize!!!");
  await sequelize.close();
}
// testConnection();

// GET MOB BY ID
const getMobById = async (id) => {
  const mob = await Mob.findByPk(id)
  console.log(mob.toJSON())
}
// getMobById(1)

// GET ALL MOBS
const getAllMobs = async () => {
  const mobs = await Mob.findAll()
  mobs.forEach( mob => console.log(mob.toJSON()));
}
// getAllMobs()

// POST CREATE NEW MOB
const createMob = async(name, about, hitPoints, biomeId, damage, hostile ) => {
  const mob = Mob.build({
      name,about,hitPoints,biomeId, damage, hostile
  })
  await mob.save()
  await sequelize.close();
  console.log("Created new Mob!")

};
// createMob('Wither', 'Withers have 3 heads and shoot flying skulls', 300, 5, 15, true)

// UPDATE MOB HOSTILITY BY ID
const updateMobHostility = async (id) =>{
  const mob = await Mob.findByPk(id);
  mob.hostile = !mob.hostile;
  await mob.save();
  await sequelize.close();
  console.log(`${mob.name} hostility switched!`);
}
updateMobHostility(3)

// DELETE A MOB
const deleteUserById = async (id) => {
  const mob = await Mob.findByPk(id)

  console.log(mob.toJSON());
  console.log("Mob has been deleted!")
  await mob.destroy();
  await sequelize.close()
}
// deleteUserById(18);

// GET MOB BY NAME
const getMobByName = async (name) => {
  const mob = await Mob.findOne({
    where: {
        name: name
    },
    include:{
      model: Biome
    }
  });
  console.log(mob.toJSON())
}
// getMobByName("Spider")

// GET MOB BY NAME AND ITS DROPS
const getMobAndDropsByName = async (name) => {
  const mob = await Mob.findOne({
    where: {
        name: name
    },
    include: {
      model: Item,
    }
  });
  console.log(mob.toJSON())
}
// getMobAndDropsByName()