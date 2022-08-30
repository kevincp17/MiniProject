
const allget = async(req,res) => {
    try {
        const result = await req.context.models.batch.findAll({
            include:[{
                all:true
            }]
        })
         res.send(result)
    } catch (error) {
        res.status(404).json(error.message);
    }
}
const findOne = async (req, res) => {
    try {
        const batch = await req.context.models.batch.findOne({
            where: { batch_id: req.params.id }
        })
        return res.send(batch)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const update = async (req, res) => {
    
    try {
        const result = await req.context.models.batch.update({
            //batch_status: fields[0].value,
            batch_status:req.body.batch_status
        },{ returning:true, where: { batch_id: req.params.id } })
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req, res) => {
    try {
        const batch = await req.context.models.batch.destroy({
            where: { batch_id: req.params.id }
        })
        return res.send('delete ' + batch + ' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}
const deleteNext = async (req, res, next) => {
    try {
        const batch = await req.context.models.batch_student.destroy({
            where: { bast_batch_id: req.params.id }
        })
        next()
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {

    allget, findOne, update, deleted, deleteNext

}