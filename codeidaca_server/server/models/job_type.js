const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_type', {
    joty_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    joty_name: {
      type: DataTypes.STRING(56),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'job_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "job_type_pkey",
        unique: true,
        fields: [
          { name: "joty_id" },
        ]
      },
    ]
  });
};
