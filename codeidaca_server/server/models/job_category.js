import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class job_category extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    joca_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    joca_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    joca_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'job_category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "job_category_pkey",
        unique: true,
        fields: [
          { name: "joca_id" },
        ]
      },
    ]
  });
  }
}
