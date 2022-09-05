const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_education', {
    usdu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usdu_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    usdu_school: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usdu_degree: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usdu_field_study: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    usdu_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usdu_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usdu_grade: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    usdu_activities: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    usdu_description: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    usdu_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users_education',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_education_pkey",
        unique: true,
        fields: [
          { name: "usdu_id" },
          { name: "usdu_entity_id" },
        ]
      },
    ]
  });
};
