const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('batch', {
    batch_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    batch_prog_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'program_entity',
        key: 'prog_id'
      }
    },
    batch_name: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    batch_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    batch_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    batch_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    batch_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    batch_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    batch_modified_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    batch_recruiter_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'emp_entity_id'
      }
    },
    batch_instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'emp_entity_id'
      }
    },
    batch_co_instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'emp_entity_id'
      }
    }
  }, {
    sequelize,
    tableName: 'batch',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "batch_pkey",
        unique: true,
        fields: [
          { name: "batch_id" },
        ]
      },
    ]
  });
};
