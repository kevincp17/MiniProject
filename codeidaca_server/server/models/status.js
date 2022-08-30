import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class status extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    status: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    status_module: {
      type: DataTypes.STRING(125),
      allowNull: false,
      references: {
        model: 'modules',
        key: 'module_name'
      }
    },
    status_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "status_pkey",
        unique: true,
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
  }
}
