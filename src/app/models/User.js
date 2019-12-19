import Sequelize, { Model } from "sequelize";
import bycript from "bycriptjs";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    this.addHook("beforeSave", async user => {
      if (user.password) {
        user.password_hash = await bycript.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bycript.compare(password, this.password_hash);
  }
}

export default User;
