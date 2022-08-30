import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class country extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    country_code: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    country_name: {
      type: DataTypes.STRING(85),
      allowNull: true,
      unique: "country_country_name_key"
    },
    country_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'country',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "country_country_name_key",
        unique: true,
        fields: [
          { name: "country_name" },
        ]
      },
      {
        name: "country_pkey",
        unique: true,
        fields: [
          { name: "country_code" },
        ]
      },
    ]
  });
  }
}
