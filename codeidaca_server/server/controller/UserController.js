import bcrypt from 'bcrypt';
const SALT_ROUND = 10;

const entity = async(req,res,next) => {
    try {
        const result = await req.context.models.entity.create({
            entity_id : null
        })
        req.entitas = {
            entity_id : result.entity_id
        }
        next()
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const signup = async (req, res, next) => {
    const { username, first, last, password } = req.body;
    const enti = req.entitas
    let hashPassword = password;
    hashPassword = await bcrypt.hash(hashPassword, SALT_ROUND);
    try {
        const result = await req.context.models.users.create({
            user_entity_id : enti.entity_id,
            user_name: username,
            user_first_name : first,
            user_last_name : last,
            user_password: hashPassword,
            user_modified_date : new Date()
        }

        );
        req.users = {
            result
        }
        next()

    } catch (error) {
        res.status(404).json(error.message);
    }
}

const userRole = async(req,res) => {
    const userAll = req.users
    try {
        const result = await req.context.models.users_roles.create({
            usro_entity_id : userAll.result.user_entity_id,
            usro_role_id : req.body.role_id,
            usro_modified_date : new Date()
        })
        const { user_name, user_first_name, user_last_name } = req.users.result;
        res.send({ user_name, user_first_name, user_last_name });
    } catch (error) {
        res.status(404).json(error.message);
    }
}

// use sigin with token in authJWT
const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await req.context.models.users.findOne({
            where: { user_email: email }
        });
        const { user_name, user_email, user_password } = result.dataValues;
        const compare = await bcrypt.compare(password, user_password);
        if (compare) {
            return res.send({ user_name, user_email });
        } else {
            return res.sendStatus(404);
        }

    } catch (error) {
        return res.sendStatus(404);
    }
}

// const allget = async(req,res) => {
//     try {
//         const result = await req.context.models.users.findAll({
//             include:[{
//                 model:req.context.models.roles,
//                 as:"usro_role_id_roles",
//                 required:true,
//             }]
//         })
//          res.send(result)
//     } catch (error) {
//         res.status(404).json(error.message);
//     }
// }
const allget = async(req,res) => {
    try {
        const result = await req.context.models.users.findAll()
         res.send(result)
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export default {
    entity,
    signup,
    signin,
    allget,
    userRole
}