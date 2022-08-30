import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class address extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    addr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    addr_line1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "address_addr_line1_key"
    },
    addr_line2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "address_addr_line2_key"
    },
    addr_postal_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "address_addr_postal_code_key"
    },
    addr_spatial_location: {
      type: DataTypes.JSON,
      allowNull: true
    },
    addr_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    addr_city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'city',
        key: 'city_id'
      }
    }
  }, {
    sequelize,
    tableName: 'address',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "address_addr_line1_key",
        unique: true,
        fields: [
          { name: "addr_line1" },
        ]
      },
      {
        name: "address_addr_line2_key",
        unique: true,
        fields: [
          { name: "addr_line2" },
        ]
      },
      {
        name: "address_addr_postal_code_key",
        unique: true,
        fields: [
          { name: "addr_postal_code" },
        ]
      },
      {
        name: "address_pkey",
        unique: true,
        fields: [
          { name: "addr_id" },
        ]
      },
    ]
  });
  }
}
