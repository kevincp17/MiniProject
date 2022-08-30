import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class job_role extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    joro_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    joro_name: {
      type: DataTypes.STRING(55),
      allowNull: false,
      unique: "job_role_joro_name_key"
    },
    joro_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'job_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "job_role_joro_name_key",
        unique: true,
        fields: [
          { name: "joro_name" },
        ]
      },
      {
        name: "job_role_pkey",
        unique: true,
        fields: [
          { name: "joro_id" },
        ]
      },
    ]
  });
  }
}
