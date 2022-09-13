import bcrypt from "bcrypt";
const signup = async (req, res) => {
  try {
    // insert table entity
    let resultEntity = await req.context.models.entity.create({
      entity_id: null,
    });
    // users
    const { username, password, user_phone, ponty_code, pmail_add, role_id } =
      req.body;
    const entityId = resultEntity.dataValues.entity_id;
    const salt = await bcrypt.genSalt(10);
    let hashPassword = password;
    hashPassword = await bcrypt.hash(hashPassword, salt);
    let result = await req.context.models.users.create({
      user_entity_id: entityId,
      user_name: username,
      user_password: hashPassword,
      user_modified_date: new Date(),
    });
    // user phone
    result = await req.context.models.users_phones.create({
      uspo_entity_id: entityId,
      uspo_number: user_phone,
      uspo_ponty_code: ponty_code,
    });
    // ?users_email
    result = await req.context.models.users_email.create({
      pmail_entity_id: entityId,
      pmail_address: pmail_add,
    });
    // user role
    result = await req.context.models.users_roles.create({
      usro_entity_id: entityId,
      usro_role_id: role_id,
    });
    res.send({ msg: "success" });
  } catch (error) {
    console.log(error);
    res.status(404).json(error.message);
  }
};

const SignupEmp = async (req, res) => {
  try {
    // insert table entity
    let resultEntity = await req.context.models.entity.create({
      entity_id: null,
    });
    // users
    const { username, password, user_phone, ponty_code, pmail_add, role_id } =
      req.body;
    const entityId = resultEntity.dataValues.entity_id;
    const salt = await bcrypt.genSalt(10);
    let hashPassword = password;
    hashPassword = await bcrypt.hash(hashPassword, salt);
    let result = await req.context.models.users.create({
      user_entity_id: entityId,
      user_name: username,
      user_password: hashPassword,
      user_modified_date: new Date(),
    });
    // user phone
    result = await req.context.models.users_phones.create({
      uspo_entity_id: entityId,
      uspo_number: user_phone,
      uspo_ponty_code: ponty_code,
    });
    // ?users_email
    result = await req.context.models.users_email.create({
      pmail_entity_id: entityId,
      pmail_address: pmail_add,
    });
    // user role
    result = await req.context.models.users_roles.create({
      usro_entity_id: entityId,
      usro_role_id: 3,
    });
    res.send({ msg: "success" });
  } catch (error) {
    console.log(error);
    res.status(404).json(error.message);
  }
};

// use sigin with token in authJWT
const signin = async (req, res) => {
  const { email, password } = req.body; // email : riko@gmail.com pw : admin

  try {
    const result = await req.context.models.users.findOne({
      include: {
        model: req.context.models.users_email,
        as: "users_emails",
        required: true,
        where: {
          pmail_address: email,
        },
      },
    });
    const { user_name, user_password } = result.dataValues;
    // return res.send({password, user_password});
    const compare = await bcrypt.compare(password, user_password);
    // const compare = (password == user_password) ? true : false;
    // return res.send(compare);
    if (compare) {
      return res.send({ user_name, email });
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    return res.status(404).send("email atau password anda tidak cocok");
  }
};

const allget = async (req, res) => {
  try {
    const result = await req.context.models.users.findAll({
      include: [
        {
          model: req.context.models.roles,
          as: "usro_role_id_roles",
          required: true,
        },
      ],
    });
    res.send(result);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const findOne = async (req, res) => {
  try {
    const result = await req.context.models.users.findOne({
      include: {
        model: req.context.models.users_email,
        as: "users_emails",
        required: true,
        where: {
          pmail_entity_id: req.params.id,
        },
      },
    });
    res.send(result);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export default {
  signup,
  signin,
  allget,
  findOne,
  SignupEmp,
};
