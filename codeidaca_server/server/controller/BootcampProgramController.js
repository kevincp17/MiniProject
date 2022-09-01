import { sequelize } from "../models/init-models"

const findAll = async (req, res) => {
    try {
        const program_entity = await req.context.models.program_entity.findAll({
            where: { prog_type: req.params.id }
        })
        return res.send(program_entity)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const searchProgram = async (req, res) => {
    try {
        await sequelize.query(`SELECT * FROM program_entity WHERE prog_type = '${req.params.program}' AND prog_title LIKE '%${req.params.search}%';`,
            { type: sequelize.QueryTypes.SELECT })
            .then(result => {
                return res.send(result)
            })
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    searchProgram
}