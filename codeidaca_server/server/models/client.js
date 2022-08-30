const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client', {
    clit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clit_name: {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "client_clit_name_key"
    },
    clit_about: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    clit_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    clit_addr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'address',
        key: 'addr_id'
      }
    },
    clit_emra_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee_range',
        key: 'emra_id'
      }
    }
  }, {
    sequelize,
    tableName: 'client',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "client_clit_name_key",
        unique: true,
        fields: [
          { name: "clit_name" },
        ]
      },
      {
        name: "client_pkey",
        unique: true,
        fields: [
          { name: "clit_id" },
        ]
      },
    ]
  });
};
