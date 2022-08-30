import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class modules extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    module_name: {
      type: DataTypes.STRING(125),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'modules',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "modules_pkey",
        unique: true,
        fields: [
          { name: "module_name" },
        ]
      },
    ]
  });
  }
}
