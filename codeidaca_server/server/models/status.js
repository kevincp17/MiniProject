const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status', {
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
};
