const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bootcamp_apply_progress', {
    bapr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bapr_prog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'bootcamp_apply',
        key: 'boap_prog_id'
      }
    },
    bapr_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'bootcamp_apply',
        key: 'boap_prog_id'
      }
    },
    boar_comment: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    boar_modified_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bor_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    bapr_roac_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'route_actions',
        key: 'roac_id'
      }
    }
  }, {
    sequelize,
    tableName: 'bootcamp_apply_progress',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bootcamp_apply_progress_pkey",
        unique: true,
        fields: [
          { name: "bapr_id" },
          { name: "bapr_prog_id" },
          { name: "bapr_entity_id" },
        ]
      },
    ]
  });
};
