import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users_phones extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    uspo_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    uspo_number: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    uspo_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    uspo_ponty_code: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'phone_number_type',
        key: 'ponty_code'
      }
    }
  }, {
    sequelize,
    tableName: 'users_phones',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_phones_pkey",
        unique: true,
        fields: [
          { name: "uspo_entity_id" },
        ]
      },
    ]
  });
  }
}
