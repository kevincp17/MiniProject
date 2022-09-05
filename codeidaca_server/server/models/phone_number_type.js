const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phone_number_type', {
    ponty_code: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    ponty_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'phone_number_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "phone_number_type_pkey",
        unique: true,
        fields: [
          { name: "ponty_code" },
        ]
      },
    ]
  });
};
