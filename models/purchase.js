'use strict';
module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define('Purchase', {
    itemId: DataTypes.INTEGER,
    inputCash: DataTypes.INTEGER,
    change: DataTypes.INTEGER
  }, {});

  Purchase.associate = function(models) {
    Purchase.belongsTo(models.Item, {
      as: "item",
      foreignKey: "itemId"
    })
  }
  return Purchase;
};
