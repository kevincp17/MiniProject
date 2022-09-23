const Op = require('Sequelize').Op;
import { sequelize } from "../models/init-models";

const findCandidate = async(req, res)=>{
    try {
        const result = await req.context.models.users.findAll({
            attributes :['user_entity_id','user_first_name','user_last_name','user_photo','user_modified_date'],
            order:[['user_entity_id','ASC']],
            include : [
                {
                    model : req.context.models.users_education,
                    attributes : ['usdu_id','usdu_school'],
                    as : 'users_educations',
                },
                {
                    model : req.context.models.users_roles,
                    as : 'users_roles',
                    where : {usro_role_id :1},
                }
            ]
        });
        return res.send(result);
    } catch (error) {
        return res.status(404).send(error);
        
    }
}

export default{
    findCandidate
}