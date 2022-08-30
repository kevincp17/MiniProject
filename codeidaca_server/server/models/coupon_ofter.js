import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class coupon_ofter extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    coof_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    coof_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    coof_discount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    coof_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    coof_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    coof_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    coof_min_qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coof_max_qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coof_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    coof_cate_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cart_items',
        key: 'cait_id'
      }
    }
  }, {
    sequelize,
    tableName: 'coupon_ofter',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "coupon_ofter_pkey",
        unique: true,
        fields: [
          { name: "coof_id" },
        ]
      },
    ]
  });
  }
}
