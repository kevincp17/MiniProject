import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_accounts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    usac_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'entity',
        key: 'entity_id'
      }
    },
    usac_user_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    usac_account_number: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: "user_accounts_usac_account_number_key"
    },
    usac_saldo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    usac_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usac_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usac_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    usac_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usac_branch: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    usac_branch_city: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'city',
        key: 'city_id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_accounts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_accounts_pkey",
        unique: true,
        fields: [
          { name: "usac_entity_id" },
          { name: "usac_user_entity_id" },
        ]
      },
      {
        name: "user_accounts_usac_account_number_key",
        unique: true,
        fields: [
          { name: "usac_account_number" },
        ]
      },
    ]
  });
  }
}
