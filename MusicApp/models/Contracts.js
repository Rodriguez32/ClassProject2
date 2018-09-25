module.exports = function(sequelize, DataTypes) {
  var Contracts = sequelize.define("Contracts", {
    contract_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    creator_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    receiver_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contract_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    created_At: DataTypes.DATE,
    updated_At: DataTypes.DATE
  });

  return Contracts;
};
