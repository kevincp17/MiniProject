import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class roles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    role_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING(35),
      allowNull: false,
      unique: "roles_role_name_key"
    },
    role_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    role_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "roles_pkey",
        unique: true,
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "roles_role_name_key",
        unique: true,
        fields: [
          { name: "role_name" },
        ]
      },
    ]
  });
  }
}
