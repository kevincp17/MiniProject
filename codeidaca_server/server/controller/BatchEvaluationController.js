
import { sequelize } from "../models/init-models"

const findOne = async (req,res)=>{
    try {
        const batcheva = await req.context.models.batch_student.findOne({
            raw : true,
            attributes: [
                'bast_entity_id',
                'bast_id'
                
            ],
            
            where:{bast_entity_id : req.params.id}
        })
        return res.send(batcheva)
    } catch (error) {
        return res.status(404).send(error)
    }
}


const findAll = async(req,res) => {
    try {
        const result = await req.context.models.batch_student_evaluation.findAll({

            attributes: [[sequelize.fn('max', sequelize.col('base_id')), 'base_id']],
            
        })
         res.send(result)
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const create = async (req,res)=>{
  
    try {
        const { files, fields } = req.fileAttrb;
        const result = await req.context.models.batch_student_evaluation.bulkCreate([{ 
          
            base_type : fields[0].value,
            base_skill : fields[1].value,
            base_grade : parseInt(fields[2].value),
            base_bast_id : parseInt(fields[3].value),
            base_modified_date : new Date()
       
        }, {
         
            base_type : fields[4].value,
            base_skill : fields[5].value,
            base_grade : parseInt(fields[6].value),
            base_bast_id : parseInt(fields[7].value),
            base_modified_date : new Date()
        },
        {       
            base_type : fields[8].value,
            base_skill : fields[9].value,
            base_grade : parseInt(fields[10].value),
            base_bast_id : parseInt(fields[11].value),
            base_modified_date : new Date()
        },
        {   
            base_type : fields[12].value,
            base_skill : fields[13].value,
            base_grade : parseInt(fields[14].value),
            base_bast_id : parseInt(fields[15].value),
            base_modified_date : new Date()
        },
        {
            base_type : fields[16].value,
            base_skill : fields[17].value,
            base_grade : parseInt(fields[18].value),
            base_bast_id : parseInt(fields[19].value),
            base_modified_date : new Date()
        },
        {
            base_type : fields[20].value,
            base_skill : fields[21].value,
            base_grade : parseInt(fields[22].value),
            base_bast_id : parseInt(fields[23].value),
            base_modified_date : new Date()
        }
    ])
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
    }
}

// const create = async (req,res)=>{
  
//     try { 
//         const {files, fields} = req.fileAttrb;
//         const result = await req.context.models.batch_student_evaluation.create({ 
            
//             base_type : fields[0].value,
//             base_skill :fields[1].value,
//             base_grade : parseInt(fields[2].value),
//             base_bast_id : parseInt(fields[3].value),
//         }
//     )
//         return res.send(result)
//     } catch (error) {
//         return res.status(404).send(error)
//     }
// }
//Query Join
const querySQL = async(req,res)=>{
    try {
        await sequelize.query(`SELECT 
        users.user_entity_id, users.user_first_name,
        users.user_photo,
        users_education.usdu_school, users_education.usdu_field_study,
        users_education.usdu_grade,
        batch.batch_name, batch.batch_start_date, 
        batch_end_date,
        batch_student.bast_id, batch_student.bast_status,
        batch_student.bast_total_score
        FROM entity
        INNER JOIN users ON entity.entity_id = users.user_entity_id
        INNER JOIN users_education ON entity.entity_id = users_education.usdu_entity_id
        INNER JOIN batch_student ON entity.entity_id = batch_student.bast_entity_id
        INNER JOIN batch on batch_student.bast_batch_id = batch.batch_id
        where entity_id = :entityId`,
        {replacements : {entityId : req.params.id},type : sequelize.QueryTypes.SELECT})
        .then(result =>{
            return res.send(result)
        })
    } catch (error) {
        return res.status(404).send(error)
    }
}


export default {

    findOne,
    findAll,
    create,
    querySQL
}