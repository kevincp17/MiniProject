import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users_roles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
  }
}
