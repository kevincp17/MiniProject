import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class province extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    prov_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prov_code: {
      type: DataTypes.STRING(5),
      allowNull: true,
      unique: "province_prov_code_key"
    },
    prov_name: {
      type: DataTypes.STRING(85),
      allowNull: true
    },
    prov_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    prov_country_code: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'country',
        key: 'country_code'
      }
    }
  }, {
    sequelize,
    tableName: 'province',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "province_pkey",
        unique: true,
        fields: [
          { name: "prov_id" },
        ]
      },
      {
        name: "province_prov_code_key",
        unique: true,
        fields: [
          { name: "prov_code" },
        ]
      },
    ]
  });
  }
}
