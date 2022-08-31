const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_email', {
    pmail_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    pmail_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pmail_address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pmail_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users_email',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_email_pkey",
        unique: true,
        fields: [
          { name: "pmail_entity_id" },
          { name: "pmail_id" },
          { name: "pmail_address" }, //jangan lupa tambah lagi ini kalau mau manggil di join nanti
        ]
      },
    ]
  });
};
