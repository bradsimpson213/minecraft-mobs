'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drop = sequelize.define('Drop', {
    mobId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  Drop.associate = function(models) {
    // associations can be defined here
  };
  return Drop;
};