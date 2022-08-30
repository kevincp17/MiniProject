import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class payment_transaction extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    patr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    patr_trx_number: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "payment_transaction_patr_trx_number_key"
    },
    patr_debet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    patr_credit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    patr_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    patr_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    patr_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    patr_source_id: {
      type: DataTypes.STRING(25),
      allowNull: true,
      references: {
        model: 'user_accounts',
        key: 'usac_account_number'
      }
    },
    patr_target_id: {
      type: DataTypes.STRING(25),
      allowNull: true,
      references: {
        model: 'user_accounts',
        key: 'usac_account_number'
      }
    },
    patr_trx_number_ref: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "payment_transaction_patr_trx_number_ref_key"
    },
    patr_user_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    }
  }, {
    sequelize,
    tableName: 'payment_transaction',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "payment_transaction_patr_trx_number_key",
        unique: true,
        fields: [
          { name: "patr_trx_number" },
        ]
      },
      {
        name: "payment_transaction_patr_trx_number_ref_key",
        unique: true,
        fields: [
          { name: "patr_trx_number_ref" },
        ]
      },
      {
        name: "payment_transaction_pkey",
        unique: true,
        fields: [
          { name: "patr_id" },
        ]
      },
    ]
  });
  }
}
