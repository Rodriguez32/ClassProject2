module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("users", {
    id: {
      type: DataTypes.INT,
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
      allowNull: false
    }
  });

  // var creators = sequelize.define("creators", {
  //   user_id: {
  //     type: DataTypes.INT,
  //     foreignKey: true,
  //     allowNull: false
  //   }
  // });
  // return creators;

  // var receivers = sequelize.define("receivers", {
  //   user_id: {
  //     type: DataTypes.INT,
  //     foreignKey: true,
  //     allowNull: false
  //   }
  // });
  // return receivers;

  var contracts = sequelize.define("contracts", {
    contract_id: {
      type: DataTypes.INT,
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

    created_At: sequelize.DATE,
    updated_At: sequelize.DATE
  });
  return contracts && user;
};
