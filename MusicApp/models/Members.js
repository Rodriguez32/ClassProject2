module.exports = function(sequelize, DataTypes) {
  var Members = sequelize.define("Members", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    last_login: { type: DataTypes.DATE }
  });

  return Members;
};
