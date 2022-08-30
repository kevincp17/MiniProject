const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart_items', {
    cait_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cait_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cait_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cait_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    cait_prog_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'program_entity',
        key: 'prog_id'
      }
    }
  }, {
    sequelize,
    tableName: 'cart_items',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cart_items_pkey",
        unique: true,
        fields: [
          { name: "cait_id" },
        ]
      },
    ]
  });
};
