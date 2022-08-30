import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class content_section_material extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    cosm_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cosm_filename: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    cosm_filesize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cosm_filetype: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cosm_filelink: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cosm_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cosm_cose_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'content_section',
        key: 'cose_id'
      }
    }
  }, {
    sequelize,
    tableName: 'content_section_material',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "content_section_material_pkey",
        unique: true,
        fields: [
          { name: "cosm_id" },
        ]
      },
    ]
  });
  }
}
