const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('courses', {
    corse_prog_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'program_entity',
        key: 'prog_id'
      }
    },
    corse_best_seler: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    corse_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    corse_language: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    corse_item_learning: {
      type: DataTypes.JSON,
      allowNull: true
    },
    corse_item_include: {
      type: DataTypes.JSON,
      allowNull: true
    },
    corse_requirement: {
      type: DataTypes.JSON,
      allowNull: true
    },
    corse_description: {
      type: DataTypes.JSON,
      allowNull: true
    },
    corse_target_level: {
      type: DataTypes.JSON,
      allowNull: true
    },
    corse_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    corse_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'courses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "courses_pkey",
        unique: true,
        fields: [
          { name: "corse_prog_id" },
        ]
      },
    ]
  });
};
