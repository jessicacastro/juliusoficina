import * as Yup from "yup";

import User from "../models/User";

class UserController {
  async store(req, res) {
    // VALIDAÇÃO DE DADOS DE ENTRADA
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
      address: Yup.string().required()
    });
  }
}
