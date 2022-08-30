import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class employee_range extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    emra_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emra_range_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "employee_range_emra_range_min_key"
    },
    emra_range_max: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "employee_range_emra_range_max_key"
    },
    emra_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employee_range',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "employee_range_emra_range_max_key",
        unique: true,
        fields: [
          { name: "emra_range_max" },
        ]
      },
      {
        name: "employee_range_emra_range_min_key",
        unique: true,
        fields: [
          { name: "emra_range_min" },
        ]
      },
      {
        name: "employee_range_pkey",
        unique: true,
        fields: [
          { name: "emra_id" },
        ]
      },
    ]
  });
  }
}
