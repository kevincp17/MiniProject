import { sequelize } from "../models/init-models"

const apply = async (req, res) => {
    try {
        await sequelize.query(`select a.user_entity_id,a.user_photo,a.user_first_name,a.user_last_name,b.pmail_address,c.uspo_number,d.boap_entity_id,d.boap_status,d.boap_total_skor,TO_CHAR(e.batch_start_date,'MonthDD, YYYY') as batch_start_date,f.prog_title from users a 
        join users_email b on a.user_entity_id = b.pmail_entity_id 
        join users_phones c on b.pmail_entity_id = c.uspo_entity_id 
        join bootcamp_apply d on c.uspo_entity_id = d.boap_entity_id 
        join batch e on d.boap_prog_id = e.batch_prog_id 
        join program_entity f on e.batch_prog_id = f.prog_id 
        where boap_status = 'apply'`,
            { type: sequelize.QueryTypes.SELECT })
            .then(result => {
                return res.send(result)
            })
    } catch (error) {
        return res.status(404).send(error)
    }
}

const filtering = async (req, res) => {
    try {
        await sequelize.query("select a.user_entity_id,a.user_photo,a.user_first_name,a.user_last_name,b.pmail_address,c.uspo_number,d.boap_entity_id,d.boap_status,d.boap_total_skor,TO_CHAR(e.batch_start_date,'MonthDD, YYYY') as batch_start_date,d.boap_review,f.prog_title from users a join users_email b on a.user_entity_id = b.pmail_entity_id join users_phones c on b.pmail_entity_id = c.uspo_entity_id join bootcamp_apply d on c.uspo_entity_id = d.boap_entity_id join batch e on d.boap_prog_id = e.batch_prog_id join program_entity f on e.batch_prog_id = f.prog_id where boap_status = 'ready test'",
            { type: sequelize.QueryTypes.SELECT })
            .then(result => {
                return res.send(result)
            })
    } catch (error) {
        return res.status(404).send(error)
    }
}

const contracted = async (req, res) => {
    try {
        await sequelize.query("select a.user_entity_id,a.user_photo,a.user_first_name,a.user_last_name,b.pmail_address,c.uspo_number,d.boap_entity_id,d.boap_status,d.boap_total_skor,TO_CHAR(e.batch_start_date,'MonthDD, YYYY') as batch_start_date,f.prog_title from users a join users_email b on a.user_entity_id = b.pmail_entity_id join users_phones c on b.pmail_entity_id = c.uspo_entity_id join bootcamp_apply d on c.uspo_entity_id = d.boap_entity_id join batch e on d.boap_prog_id = e.batch_prog_id join program_entity f on e.batch_prog_id = f.prog_id where boap_status = 'passed' or boap_status = 'recommended' or boap_status = 'contracted'",
            { type: sequelize.QueryTypes.SELECT })
            .then(result => {
                return res.send(result)
            })
    } catch (error) {
        return res.status(404).send(error)
    }
}

const disqualified = async (req, res) => {
    try {
        await sequelize.query("select a.user_entity_id,a.user_photo,a.user_first_name,a.user_last_name,b.pmail_address,c.uspo_number,d.boap_entity_id,d.boap_status,d.boap_total_skor,TO_CHAR(e.batch_start_date,'MonthDD, YYYY') as batch_start_date,f.prog_title from users a join users_email b on a.user_entity_id = b.pmail_entity_id join users_phones c on b.pmail_entity_id = c.uspo_entity_id join bootcamp_apply d on c.uspo_entity_id = d.boap_entity_id join batch e on d.boap_prog_id = e.batch_prog_id join program_entity f on e.batch_prog_id = f.prog_id where boap_status = 'failed'",
            { type: sequelize.QueryTypes.SELECT })
            .then(result => {
                return res.send(result)
            })
    } catch (error) {
        return res.status(404).send(error)
    }
}

const notResponding = async (req, res) => {
    try {
        await sequelize.query("select a.user_entity_id,a.user_photo,a.user_first_name,a.user_last_name,b.pmail_address,c.uspo_number,d.boap_entity_id,d.boap_status,d.boap_total_skor,TO_CHAR(e.batch_start_date,'MonthDD, YYYY') as batch_start_date,f.prog_title from users a join users_email b on a.user_entity_id = b.pmail_entity_id join users_phones c on b.pmail_entity_id = c.uspo_entity_id join bootcamp_apply d on c.uspo_entity_id = d.boap_entity_id join batch e on d.boap_prog_id = e.batch_prog_id join program_entity f on e.batch_prog_id = f.prog_id where boap_status = 'not responding'",
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
        await sequelize.query(`select a.user_entity_id,a.user_photo,a.user_first_name,a.user_last_name,b.pmail_address,c.uspo_number,d.boap_entity_id,d.boap_status,d.boap_total_skor,TO_CHAR(e.batch_start_date,'MonthDD, YYYY') as batch_start_date,d.boap_review,f.prog_title from users a 
        join users_email b on a.user_entity_id = b.pmail_entity_id 
        join users_phones c on b.pmail_entity_id = c.uspo_entity_id 
        join bootcamp_apply d on c.uspo_entity_id = d.boap_entity_id 
        join batch e on d.boap_prog_id = e.batch_prog_id 
        join program_entity f on e.batch_prog_id = f.prog_id 
        where user_entity_id = ${req.params.id}`,
            { type: sequelize.QueryTypes.SELECT })
            .then(result => {
                return res.send(result[0])
            })
    } catch (error) {
        return res.status(404).send(error)
    }
}

const updateCandidate = async (req, res) => {
    try {
        const result = await req.context.models.bootcamp_apply.update({
            boap_status: req.body.boap_status,
            boap_total_skor: req.body.boap_total_skor,
            boap_review: req.body.boap_review
        },
            {
                returning: true,
                where: {
                    boap_entity_id: req.params.id,
                    // boap_prog_id: req.params.prog
                }
            })
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    apply,
    filtering,
    contracted,
    disqualified,
    notResponding,
    findOne,
    updateCandidate
}