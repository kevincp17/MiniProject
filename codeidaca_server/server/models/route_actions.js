import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class route_actions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    roac_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    roac_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    roac_orderby: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    roac_display: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    roac_module_name: {
      type: DataTypes.STRING(125),
      allowNull: true,
      references: {
        model: 'modules',
        key: 'module_name'
      }
    }
  }, {
    sequelize,
    tableName: 'route_actions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "route_actions_pkey",
        unique: true,
        fields: [
          { name: "roac_id" },
        ]
      },
    ]
  });
  }
}
