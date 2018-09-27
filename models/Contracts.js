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
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    extra: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    signature: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  return Contracts;
};
