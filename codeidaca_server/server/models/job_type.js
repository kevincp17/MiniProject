import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class job_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    joty_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    joty_name: {
      type: DataTypes.STRING(56),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'job_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "job_type_pkey",
        unique: true,
        fields: [
          { name: "joty_id" },
        ]
      },
    ]
  });
  }
}
