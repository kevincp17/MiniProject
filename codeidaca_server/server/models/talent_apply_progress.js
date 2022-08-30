import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class talent_apply_progress extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    tapr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tapr_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tapr_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tapr_comment: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    tapr_taap_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'talent_apply',
        key: 'taap_id'
      }
    },
    tapr_roac_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'route_actions',
        key: 'roac_id'
      }
    }
  }, {
    sequelize,
    tableName: 'talent_apply_progress',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "talent_apply_progress_pkey",
        unique: true,
        fields: [
          { name: "tapr_id" },
        ]
      },
    ]
  });
  }
}
