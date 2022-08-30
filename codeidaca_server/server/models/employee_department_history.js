import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class employee_department_history extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    edhi_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    edhi_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employee',
        key: 'emp_entity_id'
      }
    },
    edhi_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    edhi_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    edhi_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    edhi_dept_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'department',
        key: 'dept_id'
      }
    }
  }, {
    sequelize,
    tableName: 'employee_department_history',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_employee_department_history",
        unique: true,
        fields: [
          { name: "edhi_id" },
          { name: "edhi_entity_id" },
        ]
      },
    ]
  });
  }
}
