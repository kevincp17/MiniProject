import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class employee_client_contract extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ecco_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employee',
        key: 'emp_entity_id'
      }
    },
    ecco_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ecco_contract_no: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    ecco_contract_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ecco_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ecco_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ecco_comment: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    ecco_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ecco_media_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ecco_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ecco_joty_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_type',
        key: 'joty_id'
      }
    },
    ecco_account_manager: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'emp_entity_id'
      }
    },
    ecco_clit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'client',
        key: 'clit_id'
      }
    }
  }, {
    sequelize,
    tableName: 'employee_client_contract',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_employee_client_contract",
        unique: true,
        fields: [
          { name: "ecco_entity_id" },
          { name: "ecco_id" },
        ]
      },
    ]
  });
  }
}
