import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users_email extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pmail_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    pmail_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pmail_address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pmail_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users_email',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_email_pkey",
        unique: true,
        fields: [
          { name: "pmail_entity_id" },
          { name: "pmail_id" },
        ]
      },
    ]
  });
  }
}
