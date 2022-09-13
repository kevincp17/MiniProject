import { sequelize } from "../models/init-models"

const test = async(req,res)=> {
    try {
     await sequelize.query("Select a.batch_id, a.batch_name , b.prog_type , b.prog_title from batch a join program_entity b on a.batch_prog_id = b.prog_id",
     {type : sequelize.QueryTypes.SELECT})
     .then(result => {
       return res.send(result)
     })
   }catch (error) {
       return res.status(404).send(error)
   }
}


// const findAll = async (req,res) => {
//   try {
//     const result = await req.context.models.batch.findAll({
//       include : {all : true }
//     })
//     res.send(result)
//   } catch (error) {
//     res.status(404).json(error.message)
//   }
// }
export default {
    test
}
