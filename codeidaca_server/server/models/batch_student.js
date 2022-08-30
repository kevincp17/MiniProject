const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('batch_student', {
    bast_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: "bast_id_unique"
    },
    bast_batch_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'batch',
        key: 'batch_id'
      }
    },
    bast_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    bast_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    bast_review: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    bast_total_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bast_modified_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'batch_student',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bast_id_unique",
        unique: true,
        fields: [
          { name: "bast_id" },
        ]
      },
      {
        name: "batch_student_pkey",
        unique: true,
        fields: [
          { name: "bast_id" },
          { name: "bast_batch_id" },
          { name: "bast_entity_id" },
        ]
      },
    ]
  });
};
