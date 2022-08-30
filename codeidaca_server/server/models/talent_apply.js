import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class talent_apply extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    taap_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    taap_jopo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'jopo_id'
      }
    },
    taap_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    taap_intro: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    taap_scoring: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    taap_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    taap_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'talent_apply',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "talent_apply_pkey",
        unique: true,
        fields: [
          { name: "taap_id" },
        ]
      },
    ]
  });
  }
}
