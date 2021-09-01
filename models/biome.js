'use strict';
module.exports = (sequelize, DataTypes) => {
  const Biome = sequelize.define('Biome', {
    name: DataTypes.STRING
  }, {});
  Biome.associate = function(models) {
    Biome.hasMany(models.Mob, { foreignKey: 'biomeId' })
  };
  return Biome;
};