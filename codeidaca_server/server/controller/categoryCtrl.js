import category from "../models/category";
import { sequelize } from "../models/init-models";

const findAll = async (req,res)=>{
    try{
        const category = await req.context.models.category.findAll({
            include : [{
                model : req.context.models.category,
                as : "cate_cate",
                required : true
        }]
    })
        return res.send(category)
    }catch(error){
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
        const category = await req.context.models.category.create({
            cate_name: req.body.cate_name,
            cate_cate_id: req.body.cate_cate_id
        })
        return res.send(category)
    }catch(error){
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    try {
        const category = await req.context.models.category.update({
            cate_name: req.body.cate_name,
            cate_cate_id: req.body.cate_cate_id
        },{returning : true, where:{cate_id : req.params.id}})
        return res.send(category)
    } catch (error){
        return res.status(404).send(error)
    }
}


const deleted = async (req,res)=>{
    try{
        const category = await req.context.models.category.destroy({
            where:{cate_id : req.params.id}
        })
        return res.send('delete '+category+' rows')
    }catch (error) {
        return res.status(404).send.error
    }
}

const findOne = async (req,res)=>{
    try {
        const category = await req.context.models.category.findOne({
            where:{cate_id : req.params.id}
        })
        return res.send(category)
    } catch (error) {
        return res.status(404).send(error)
    }
}


export default {
    findAll,
    create,
    update,
    deleted,
    findOne
}
