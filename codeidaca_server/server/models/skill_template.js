import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class skill_template extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    skte_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    skte_skill: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    skte_description: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    skte_week: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    skte_orderby: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    skte_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    skty_name: {
      type: DataTypes.STRING(55),
      allowNull: true,
      references: {
        model: 'skill_type',
        key: 'skty_name'
      }
    },
    skte_skte_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'skill_template',
        key: 'skte_id'
      }
    },
    skte_module: {
      type: DataTypes.STRING(125),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'skill_template',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "skill_template_pkey",
        unique: true,
        fields: [
          { name: "skte_id" },
        ]
      },
    ]
  });
  }
}
