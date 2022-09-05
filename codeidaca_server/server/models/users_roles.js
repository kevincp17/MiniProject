const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_roles', {
    usro_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    usro_role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'role_id'
      }
    },
    usro_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users_roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_roles_pkey",
        unique: true,
        fields: [
          { name: "usro_entity_id" },
          { name: "usro_role_id" },
        ]
      },
    ]
  });
};
