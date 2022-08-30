import {sequelize} from "../models/init-models";

const findAll=async(req,res)=>{
    try{
        const batch=await req.context.models.batch.findAll()
        return res.send(batch)
    }catch(error){
        return res.status(404).send(error)
    }
}

const findOne=async(req,res)=>{
    try{
        const batch=await req.context.models.batch.findOne({
            where:{batch_id:req.params.id}
        })
        return res.send(batch)
    }catch(error){
        return res.status(404).send(error)
    }
}

const create=async(req,res)=>{
    try{
        const batch=await req.context.models.batch.create({
            batch_prog_id:req.body.batch_prog_id,
            batch_name:req.body.batch_name,
            batch_start_date:req.body.batch_start_date,
            batch_end_date:req.body.batch_end_date,
            batch_status:req.body.batch_status,
            batch_reason:req.body.batch_reason,
            batch_type:req.body.batch_type,
            batch_modified_date:req.body.batch_modified_date,
            batch_recruiter_id:req.body.batch_recruiter_id,
            batch_instructor_id:req.body.batch_instructor_id,
            batch_co_instructor_id:req.body.batch_co_instructor_id
        })
        return res.send(batch)
    }catch(error){
        return res.status(404).send(error)
    }
}

const update=async (req,res)=>{
    try{
        const batch=await req.context.models.batch.update({
            batch_prog_id:req.body.batch_prog_id,
            batch_name:req.body.batch_name,
            batch_start_date:req.body.batch_start_date,
            batch_end_date:req.body.batch_end_date,
            batch_status:req.body.batch_status,
            batch_reason:req.body.batch_reason,
            batch_type:req.body.batch_type,
            batch_modified_date:req.body.batch_modified_date,
            batch_recruiter_id:req.body.batch_recruiter_id,
            batch_instructor_id:req.body.batch_instructor_id,
            batch_co_instructor_id:req.body.batch_co_instructor_id
        },{returning :true,where:{batch_id: req.params.id}})
        return res.send(batch)
    }catch(error){
        return res.status(404).send(error)
    }
}

export default{
    findAll,
    findOne,
    create,
    update
}