const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    emp_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    emp_emp_number: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: "employee_emp_emp_number_key"
    },
    emp_national_id: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: "employee_emp_national_id_key"
    },
    emp_login_id: {
      type: DataTypes.STRING(85),
      allowNull: true
    },
    emp_birth_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    emp_marital_status: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    emp_gender: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    emp_hire_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    emp_salaried_flag: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    emp_vacation_hours: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    emp_sickleave_hours: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    emp_current_flag: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    emp_emp_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'emp_entity_id'
      }
    },
    emp_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    emp_joro_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_role',
        key: 'joro_id'
      }
    }
  }, {
    sequelize,
    tableName: 'employee',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "employee_emp_emp_number_key",
        unique: true,
        fields: [
          { name: "emp_emp_number" },
        ]
      },
      {
        name: "employee_emp_national_id_key",
        unique: true,
        fields: [
          { name: "emp_national_id" },
        ]
      },
      {
        name: "employee_pkey",
        unique: true,
        fields: [
          { name: "emp_entity_id" },
        ]
      },
    ]
  });
};
