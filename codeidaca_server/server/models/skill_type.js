import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class skill_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    skty_name: {
      type: DataTypes.STRING(55),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'skill_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "skill_type_pkey",
        unique: true,
        fields: [
          { name: "skty_name" },
        ]
      },
    ]
  });
  }
}
