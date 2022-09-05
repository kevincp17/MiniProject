const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'entity',
        key: 'entity_id'
      }
    },
    user_name: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: "users_user_name_key"
    },
    user_password: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    user_first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_email_promotion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    user_demographic: {
      type: DataTypes.JSON,
      allowNull: true
    },
    user_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "user_entity_id" },
        ]
      },
      {
        name: "users_user_name_key",
        unique: true,
        fields: [
          { name: "user_name" },
        ]
      },
    ]
  });
};
