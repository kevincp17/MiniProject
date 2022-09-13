import { sequelize } from "../models/init-models"

const list = async (req, res) => {
  try {
    await sequelize.query("Select a.user_entity_id, a.user_photo, a.user_first_name, a.user_last_name, b.bast_status, b.bast_review, b.bast_total_score,b.bast_entity_id from users a join batch_student b on a.user_entity_id = b.bast_entity_id",
      { type: sequelize.QueryTypes.SELECT })
      .then(result => {
        return res.send(result)
      })
  } catch (error) {
    return res.status(404).send(error)
  }
}

const findOne = async (req, res) => {
  try {
    await sequelize.query(`select * from batch_student where bast_entity_id = ${req.params.id}`,
      { type: sequelize.QueryTypes.SELECT })
      .then(result => {
        return res.send(result[0])
      })
  } catch (error) {
    return res.status(404).send(error)
  }
}

const update = async (req, res) => {
  const { bast_status, bast_review } = req.body;
  try {
    const result = await req.context.models.batch_student.update(
      {
        bast_status: bast_status,
        bast_review: bast_review
      },
      {
        returning: true,
        where: { bast_entity_id: req.params.id }
      }
    );
    return res.send(result);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}


// const UpdateReview = async (req, res) => {

//   const { bast_review} = req.body;
//   try{
//       const result = await req.context.models.batch_student.update(
//           { 
//               bast_review : bast_review
//           },
//           {
//               returning: true,
//               where: { bast_id: req.params.id }
//           }
//       );
//       return res.send(result)
//   }catch (error) {
//       res.status(404).json({message : error.message})
//   }
// }

export default {
  list,
  update,
  findOne
}
