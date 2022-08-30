import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users_experiences_skill extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    uesk_usex_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users_experiences',
        key: 'usex_id'
      }
    },
    uesk_uski_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users_skill',
        key: 'uski_id'
      }
    }
  }, {
    sequelize,
    tableName: 'users_experiences_skill',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_experiences_skill_pkey",
        unique: true,
        fields: [
          { name: "uesk_usex_id" },
          { name: "uesk_uski_id" },
        ]
      },
    ]
  });
  }
}
