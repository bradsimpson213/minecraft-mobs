'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    about: DataTypes.TEXT,
    damage: DataTypes.INTEGER,
    armor: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {
    const columnMappings = {
      through: 'Drop',
      foreignKey: 'itemId',
      otherKey: 'mobId'
  }
  Mob.belongsToMany(models.Mob, columnMappings)
  };
  return Item;
};