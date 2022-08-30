import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class content_section extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    cose_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cose_title: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    cose_preview: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cose_note: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    cose_minute: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cose_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cose_cont_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'contents',
        key: 'cont_id'
      }
    }
  }, {
    sequelize,
    tableName: 'content_section',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "content_section_pkey",
        unique: true,
        fields: [
          { name: "cose_id" },
        ]
      },
    ]
  });
  }
}
