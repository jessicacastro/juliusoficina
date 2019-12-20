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
        rg: Sequelize.STRING,
        cpf: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

export default Clients;
