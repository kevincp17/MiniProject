import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class instructor_course extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    inco_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    inco_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employee',
        key: 'emp_entity_id'
      }
    },
    inco_prog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'courses',
        key: 'corse_prog_id'
      }
    },
    inco_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'instructor_course',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "instructor_course_pkey",
        unique: true,
        fields: [
          { name: "inco_id" },
          { name: "inco_prog_id" },
          { name: "inco_entity_id" },
        ]
      },
    ]
  });
  }
}
