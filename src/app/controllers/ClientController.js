import * as Yup from "yup";

import Client from "../models/Clients";

class ClientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      address: Yup.string().required(),
      rg: Yup.string().required(),
      cpf: Yup.string().required(),
      telephone: Yup.string()
        .required()
        .min(8),
      telephoneTwo: Yup.string().min(8)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Insira os dados corretamente." });
    }

    const clientExists = await Client.findOne({
      where: { cpf: req.body.cpf }
    });

    if (clientExists) {
      return res.status(400).json({ error: "Cliente já cadastrado." });
    }

    const { id, name, email } = await Client.create(req.body);

    return res.status(200).json({
      id,
      name,
      email,
      message: "Cliente cadastrado com sucesso."
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string(),
      address: Yup.string(),
      cpf: Yup.string().required(),
      telephone: Yup.string().min(8),
      telephoneTwo: Yup.string().min(8)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: "Insira os dados corretamente." });
    }

    const { cpf } = req.body;

    const user = await Client.findOne({ where: { cpf } });

    if (!user) {
      return res
        .status(401)
        .json({ error: "Cliente não encontrado. Verifique o CPF passado." });
    }

    const { id } = user;

    const { name, email } = await Client.update(
      {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        telephone: req.body.telephone,
        telephonwTwo: req.body.telephoneTwo
      },
      { where: { id } }
    );

    return res.status(200).json({
      id,
      name,
      email,
      message: "Cliente atualizado com sucesso."
    });
  }
}

export default new ClientController();
