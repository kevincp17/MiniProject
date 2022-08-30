import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class entity extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'entity',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "entity_pkey",
        unique: true,
        fields: [
          { name: "entity_id" },
        ]
      },
    ]
  });
  }
}
