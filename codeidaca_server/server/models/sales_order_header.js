import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sales_order_header extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    sohe_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: "sales_order_header_sohe_id_key"
    },
    sohe_student_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    sohe_revision_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sohe_order_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sohe_due_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sohe_ship_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sohe_order_number: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: "sales_order_header_sohe_order_number_key"
    },
    sohe_account_number: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    sohe_patr_trx_number: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    sohe_subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sohe_tax: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sohe_total_discount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sohe_total_due: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sohe_comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sohe_access_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sohe_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sohe_ship_address: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'address',
        key: 'addr_id'
      }
    },
    sohe_status: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'status',
        key: 'status'
      }
    }
  }, {
    sequelize,
    tableName: 'sales_order_header',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sales_order_header_pkey",
        unique: true,
        fields: [
          { name: "sohe_id" },
          { name: "sohe_student_entity_id" },
        ]
      },
      {
        name: "sales_order_header_sohe_id_key",
        unique: true,
        fields: [
          { name: "sohe_id" },
        ]
      },
      {
        name: "sales_order_header_sohe_order_number_key",
        unique: true,
        fields: [
          { name: "sohe_order_number" },
        ]
      },
    ]
  });
  }
}
