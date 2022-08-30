import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class job_post extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    jopo_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jopo_number: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('job_id'),
      unique: "job_post_jopo_number_key"
    },
    jopo_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    jopo_min_salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jopo_max_salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jopo_description: {
      type: DataTypes.JSON,
      allowNull: true
    },
    jopo_responsibility: {
      type: DataTypes.JSON,
      allowNull: true
    },
    jopo_target: {
      type: DataTypes.JSON,
      allowNull: true
    },
    jopo_benefit: {
      type: DataTypes.JSON,
      allowNull: true
    },
    jopo_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jopo_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jopo_publish_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jopo_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jopo_emp_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'emp_entity_id'
      }
    },
    jopo_clit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'client',
        key: 'clit_id'
      }
    },
    jopo_joro_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_role',
        key: 'joro_id'
      }
    },
    jopo_joty_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_type',
        key: 'joty_id'
      }
    },
    jopo_joca_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_category',
        key: 'joca_id'
      }
    },
    jopo_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'job_post',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "job_post_jopo_number_key",
        unique: true,
        fields: [
          { name: "jopo_number" },
        ]
      },
      {
        name: "job_post_pkey",
        unique: true,
        fields: [
          { name: "jopo_id" },
        ]
      },
    ]
  });
  }
}
