const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bootcamp_apply', {
    boap_prog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'program_entity',
        key: 'prog_id'
      },
      unique: "boap_prog_unique"
    },
    boap_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    boap_total_skor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    boap_review: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    boap_modified_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    boap_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bootcamp_apply',
    schema: 'public',
    timestamps: false
  });
};
