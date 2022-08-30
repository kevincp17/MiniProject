import { sequelize } from "../models/init-models"
const findAll=async (req,res)=>{
    try{
        const address_type=await req.context.models.address_type.findAll()
        return res.send(address_type)
    }catch(error){
        return res.status(404).send(error)
    }
}

const findOne=async (req,res)=>{
    try{
        const address_type=await req.context.models.address_type.findOne({
            where:{adty_id:req.params.id}
        })
        return res.send(address_type)
    }catch(error){
        return res.status(404).send(error)
    }
}

const create=async (req,res)=>{
    try{
        const address_type=await req.context.models.address_type.create({
            adty_name:req.body.adty_name
        })
        return res.send(address_type)
    }catch(error){
        return res.status(404).send(error)
    }
}

const update=async (req,res)=>{
    try{
        const address_type=await req.context.models.address_type.update({
            adty_name:req.body.adty_name
        },{returning :true,where:{adty_id: req.params.id}})
        return res.send(address_type)
    }catch(error){
        return res.status(404).send(error)
    }
}

const deleted=async (req,res)=>{
    try{
        const address_type=await req.context.models.address_type.destroy({
            where:{adty_id: req.params.id}
        })
        return res.send('delete '+address_type+' rows')
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