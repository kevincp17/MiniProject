
import employee from "../models/employee";
import { sequelize } from "../models/init-models";

const findInstructor = async(req,res)=>{
    try {
        /*
        const result = await req.context.models.employee.findAll({
            attributes:['emp_entity_id'],
            
            include : [
                {
                    model : req.context.models.users,
                    as : 'emp_entity',
                    attributes:['user_entity_id','user_first_name','user_last_name'],
                    required : true,
                    include : [
                        {
                            model : req.context.models.roles,
                            as : 'usro_role_id_roles',
                            //where : {role_name: "Instructor"}
                        }
                    ]
                }
            ]
        });
        */
        const result = await req.context.models.users.findAll({
            include : [{
                model : req.context.models.employee,
                as : 'employee',
                required: true
            },{
                model : req.context.models.roles,
                as : 'usro_role_id_roles',
                required:true,
                where : {role_name: "Instructor"}
            }
            ]
        })
        
        
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error);
        
    }
}
export default{
    findInstructor
}