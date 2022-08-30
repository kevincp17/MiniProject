const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address_type', {
    adty_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    adty_name: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: "address_type_adty_name_key"
    },
    adty_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'address_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "address_type_adty_name_key",
        unique: true,
        fields: [
          { name: "adty_name" },
        ]
      },
      {
        name: "address_type_pkey",
        unique: true,
        fields: [
          { name: "adty_id" },
        ]
      },
    ]
  });
};
