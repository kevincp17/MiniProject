const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_category', {
    joca_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    joca_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    joca_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'job_category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "job_category_pkey",
        unique: true,
        fields: [
          { name: "joca_id" },
        ]
      },
    ]
  });
};
