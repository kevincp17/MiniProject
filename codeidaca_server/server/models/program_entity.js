import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class program_entity extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    prog_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prog_title: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    prog_headline: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    prog_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    prog_learning_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    prog_rating: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    prog_total_student: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prog_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    prog_image: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    prog_city_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'city',
        key: 'city_id'
      }
    },
    prog_cate_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'cate_id'
      }
    }
  }, {
    sequelize,
    tableName: 'program_entity',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "program_entity_pkey",
        unique: true,
        fields: [
          { name: "prog_id" },
        ]
      },
    ]
  });
  }
}
