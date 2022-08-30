import parent_category from "../models/parent_category";
import { sequelize } from "../models/init-models";

const findAll = async (req,res)=>{
    try {
        await sequelize.query('Select * from category where cate_cate_id is null',
        {replacements : {cateId : req.params.id},type : sequelize.QueryTypes.SELECT})
        .then(result =>{
            return res.send(result)
        })
    } catch (error) {
        return res.status(404).send(error)
    }
}


export default {
    findAll,
}