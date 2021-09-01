'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mob = sequelize.define('Mob', {
    name: DataTypes.STRING,
    about: DataTypes.TEXT,
    hitPoints: DataTypes.INTEGER,
    biomeId: DataTypes.INTEGER,
    damage: DataTypes.INTEGER,
    hostile: DataTypes.BOOLEAN
  }, {});
  Mob.associate = function(models) {
    Mob.belongsTo(models.Biome,  { foreignKey: 'biomeId' })
  };
  return Mob;
};