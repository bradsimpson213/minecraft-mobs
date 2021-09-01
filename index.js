const { sequelize, Biome } = require("./models");

async function main() {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log("Database connection failure.");
    console.log(e);
    return;
  }

  console.log("Database connection success!");
  console.log("Sequelize is ready to use!");
  const biome = await Biome.findByPk(1);
  console.log(biome.toJSON());

  // Close database connection when done with it.
  await sequelize.close();
}

main();
