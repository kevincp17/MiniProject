const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contents', {
    cont_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: "contents_cont_id_key"
    },
    cont_prog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'courses',
        key: 'corse_prog_id'
      }
    },
    cont_title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cont_preview: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cont_description: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    cont_total_section: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cont_total_lecture: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cont_total_minute: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cont_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contents',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "contents_cont_id_key",
        unique: true,
        fields: [
          { name: "cont_id" },
        ]
      },
      {
        name: "contents_pkey",
        unique: true,
        fields: [
          { name: "cont_id" },
          { name: "cont_prog_id" },
        ]
      },
    ]
  });
};
