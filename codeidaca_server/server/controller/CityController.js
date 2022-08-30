import { sequelize } from "../models/init-models"
const findAll=async (req,res)=>{
    try{
        const city=await req.context.models.city.findAll({
             include: { all: true }
        })
        return res.send(city)
    }catch(error){
        return res.status(404).send(error)
    }
}

const findOne=async (req,res)=>{
    try{
        const city=await req.context.models.city.findOne({
            where:{city_id:req.params.id}
        })
        return res.send(city)
    }catch(error){
        return res.status(404).send(error)
    }
}

const create=async (req,res)=>{
    try{
        const city=await req.context.models.city.create({
            city_name:req.body.city_name,
            city_prov_id:req.body.city_prov_id
        })
        return res.send(city)
    }catch(error){
        return res.status(404).send(error)
    }
}

const update=async (req,res)=>{
    try{
        const city=await req.context.models.city.update({
            city_name:req.body.city_name,
            city_prov_id:req.body.city_prov_id
        },{returning :true,where:{city_id: req.params.id}})
        return res.send(city)
    }catch(error){
        return res.status(404).send(error)
    }
}

const deleted=async (req,res)=>{
    try{
        const city=await req.context.models.city.destroy({
            where:{city_id: req.params.id}
        })
        return res.send('delete '+city+' rows')
    }catch(error){
        return res.status(404).send(error)
    }
}

export default{
    findAll,
    findOne,
    create,
    update,
    deleted
}