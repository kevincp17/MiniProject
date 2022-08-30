const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_gateaway', {
    paga_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    paga_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "payment_gateaway_paga_code_key"
    },
    paga_name: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "payment_gateaway_paga_name_key"
    },
    paga_virtual_account: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: "payment_gateaway_paga_virtual_account_key"
    },
    paga_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    paga_owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    }
  }, {
    sequelize,
    tableName: 'payment_gateaway',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "payment_gateaway_paga_code_key",
        unique: true,
        fields: [
          { name: "paga_code" },
        ]
      },
      {
        name: "payment_gateaway_paga_name_key",
        unique: true,
        fields: [
          { name: "paga_name" },
        ]
      },
      {
        name: "payment_gateaway_paga_virtual_account_key",
        unique: true,
        fields: [
          { name: "paga_virtual_account" },
        ]
      },
      {
        name: "payment_gateaway_pkey",
        unique: true,
        fields: [
          { name: "paga_entity_id" },
        ]
      },
    ]
  });
};
