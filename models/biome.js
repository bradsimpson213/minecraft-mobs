'use strict';
module.exports = (sequelize, DataTypes) => {
  const Biome = sequelize.define('Biome', {
    name: DataTypes.STRING
  }, {});
  Biome.associate = function(models) {
    // associations can be defined here
  };
  return Biome;
};