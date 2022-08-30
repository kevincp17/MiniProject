import { sequelize } from "../models/init-models"
const findAll=async (req,res)=>{
    try{
        const country=await req.context.models.country.findAll()
        return res.send(country)
    }catch(error){
        return res.status(404).send(error)
    }
}

const findOne=async (req,res)=>{
    try{
        const country=await req.context.models.country.findOne({
            where:{country_code:req.params.id}
        })
        return res.send(country)
    }catch(error){
        return res.status(404).send(error)
    }
}

const create=async (req,res)=>{
    try{
        const country=await req.context.models.country.create({
            country_code:req.body.country_code,
            country_name:req.body.country_name
        })
        return res.send(country)
    }catch(error){
        return res.status(404).send(error)
    }
}

const update=async (req,res)=>{
    try{
        const country=await req.context.models.country.update({
            country_name:req.body.country_name
        },{returning :true,where:{country_code: req.params.id}})
        return res.send(country)
    }catch(error){
        return res.status(404).send(error)
    }
}

const deleted=async (req,res)=>{
    try{
        const country=await req.context.models.country.destroy({
            where:{country_code: req.params.id}
        })
        return res.send('delete '+country+' rows')
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