const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill_type', {
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
};
