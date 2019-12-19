import Sequelize, { Model } from "sequelize";

class Clients extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        address: Sequelize.STRING,
        telephone: Sequelize.STRING,
        telephoneTwo: Sequelize.STRING,
        RG: Sequelize.STRING,
        CPF: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

export default Clients;
