const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_evaluation', {
    stev_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stev_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    stev_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stev_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stev_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stev_cont_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contents',
        key: 'cont_id'
      }
    }
  }, {
    sequelize,
    tableName: 'student_evaluation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "student_evaluation_pkey",
        unique: true,
        fields: [
          { name: "stev_id" },
        ]
      },
    ]
  });
};
