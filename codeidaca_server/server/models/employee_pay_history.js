const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_pay_history', {
    ephi_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employee',
        key: 'emp_entity_id'
      }
    },
    ephi_rate_change_date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    ephi_rate_salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ephi_pay_frequence: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ephi_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employee_pay_history',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_employee_pay_history",
        unique: true,
        fields: [
          { name: "ephi_entity_id" },
          { name: "ephi_rate_change_date" },
        ]
      },
    ]
  });
};
