'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    quantity: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});

  Item.associate = function(models) {
    Item.hasMany(models.Purchase, {
      as: "purchases",
      foreignKey: "itemId"   //// this one can be userId
    })
  }

  return Item;
};
