import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class batch_student_evaluation extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    base_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    base_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    base_skill: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    base_grade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    base_note: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    base_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    base_modified_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    base_bast_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'batch_student',
        key: 'bast_id'
      }
    }
  }, {
    sequelize,
    tableName: 'batch_student_evaluation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "batch_student_evaluation_pkey",
        unique: true,
        fields: [
          { name: "base_id" },
        ]
      },
    ]
  });
  }
}
