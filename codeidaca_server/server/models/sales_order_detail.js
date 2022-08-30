import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sales_order_detail extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    sode_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sode_qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sode_unit_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sode_unit_price_discount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sode_line_total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sode_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sode_prog_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'program_entity',
        key: 'prog_id'
      }
    },
    sode_coof_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'coupon_ofter',
        key: 'coof_id'
      }
    },
    sode_sohe_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sales_order_header',
        key: 'sohe_id'
      }
    }
  }, {
    sequelize,
    tableName: 'sales_order_detail',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sales_order_detail_pkey",
        unique: true,
        fields: [
          { name: "sode_id" },
        ]
      },
    ]
  });
  }
}
