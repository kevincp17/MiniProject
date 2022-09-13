import { sequelize } from "../models/init-models"

const querySQL = async (req, res) => {
    try {
        await sequelize.query('SELECT * FROM users join programs_review on users.user_entity_id = programs_review.pore_entity_id',
            { type: sequelize.QueryTypes.SELECT })
            .then(result => {
                return res.send(result)
            })
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    querySQL
}
