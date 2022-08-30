import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class student_evaluation extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    stev_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stev_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    stev_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stev_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stev_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stev_cont_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contents',
        key: 'cont_id'
      }
    }
  }, {
    sequelize,
    tableName: 'student_evaluation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "student_evaluation_pkey",
        unique: true,
        fields: [
          { name: "stev_id" },
        ]
      },
    ]
  });
  }
}
