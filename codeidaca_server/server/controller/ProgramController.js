import { sequelize } from "../models/init-models";

const findProgram = async(req,res)=>{
    try {
        const result = await req.context.models.program_entity.findAll({
            attributes:['prog_id','prog_title'],
        })
        return res.send(result)
        
    } catch (error) {
        return res.status(404).send(error);
    }
}

export default{
    findProgram
}