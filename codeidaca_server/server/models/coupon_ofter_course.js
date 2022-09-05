const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coupon_ofter_course', {
    saca_coof_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'coupon_ofter',
        key: 'coof_id'
      }
    },
    saca_prog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'program_entity',
        key: 'prog_id'
      }
    },
    saca_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'coupon_ofter_course',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "coupon_ofter_course_pkey",
        unique: true,
        fields: [
          { name: "saca_coof_id" },
          { name: "saca_prog_id" },
        ]
      },
    ]
  });
};
