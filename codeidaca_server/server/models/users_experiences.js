const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_experiences', {
    usex_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usex_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    usex_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usex_profile_headline: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    usex_employment_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usex_company_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usex_city_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'city',
        key: 'city_id'
      }
    },
    usex_is_current: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    usex_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usex_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usex_industry: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usex_description: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    usex_experience_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users_experiences',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_experiences_pkey",
        unique: true,
        fields: [
          { name: "usex_id" },
        ]
      },
    ]
  });
};
