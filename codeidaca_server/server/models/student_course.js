const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_course', {
    stud_prog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'courses',
        key: 'corse_prog_id'
      }
    },
    stud_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_entity_id'
      }
    },
    stud_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stud_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stud_certificated: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    stud_certificate_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stud_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stud_access_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stud_access_grant: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    stud_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'student_course',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "student_course_pkey",
        unique: true,
        fields: [
          { name: "stud_prog_id" },
          { name: "stud_entity_id" },
        ]
      },
    ]
  });
};
