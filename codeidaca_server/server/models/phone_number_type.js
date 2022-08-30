import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class phone_number_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ponty_code: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    ponty_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'phone_number_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "phone_number_type_pkey",
        unique: true,
        fields: [
          { name: "ponty_code" },
        ]
      },
    ]
  });
  }
}
