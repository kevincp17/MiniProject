const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entity', {
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
};
