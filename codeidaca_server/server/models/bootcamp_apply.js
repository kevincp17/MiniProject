import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class bootcamp_apply extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    boap_prog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'program_entity',
        key: 'prog_id'
      }
    },
    boap_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    boap_total_skor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    boap_review: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    boap_modified_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    boap_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bootcamp_apply',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bootcamp_apply_pkey",
        unique: true,
        fields: [
          { name: "boap_prog_id" },
          { name: "boap_entity_id" },
        ]
      },
    ]
  });
  }
}
