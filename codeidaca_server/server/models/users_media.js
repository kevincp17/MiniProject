const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_media', {
    usme_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usme_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    usme_file_link: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    usme_filename: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    usme_filesize: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    usme_filetype: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    usme_note: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    usme_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users_media',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_media_pkey",
        unique: true,
        fields: [
          { name: "usme_id" },
          { name: "usme_entity_id" },
        ]
      },
    ]
  });
};
