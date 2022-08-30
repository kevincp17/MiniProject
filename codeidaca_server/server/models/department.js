const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    dept_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dept_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dept_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "department_pkey",
        unique: true,
        fields: [
          { name: "dept_id" },
        ]
      },
    ]
  });
};
