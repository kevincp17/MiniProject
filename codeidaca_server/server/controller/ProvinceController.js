import { sequelize } from "../models/init-models"
const findAll=async (req,res)=>{
    try{
        const province=await req.context.models.province.findAll()
        return res.send(province)
    }catch(error){
        return res.status(404).send(error)
    }
}

const findOne=async (req,res)=>{
    try{
        const province=await req.context.models.province.findOne({
            where:{prov_id:req.params.id}
        })
        return res.send(province)
    }catch(error){
        return res.status(404).send(error)
    }
}

const create=async (req,res)=>{
    try{
        const province=await req.context.models.province.create({
            prov_name:req.body.prov_name,
            prov_country_code:req.body.prov_country_code
        })
        return res.send(province)
    }catch(error){
        return res.status(404).send(error)
    }
}

const update=async (req,res)=>{
    try{
        const province=await req.context.models.province.update({
            prov_name:req.body.prov_name,
            prov_country_code:req.body.prov_country_code
        },{returning :true,where:{prov_id: req.params.id}})
        return res.send(province)
    }catch(error){
        return res.status(404).send(error)
    }
}

const deleted=async (req,res)=>{
    try{
        const province=await req.context.models.province.destroy({
            where:{prov_id: req.params.id}
        })
        return res.send('delete '+province+' rows')
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