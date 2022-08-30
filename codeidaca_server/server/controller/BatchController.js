import e from "express";
import { sequelize } from "../models/init-models";

const findAll = async(req,res) => {
    try {
        const result =await req.context.models.batch.findAll({
            include : [
                {
                    all : true
                }
            ]
        });
        return res.send(result);
    } catch (error) {
        return res.status(404).send(error);
    }
}

const findById= async(req,res)=>{
    try {
        const batch = await req.context.models.batch.findOne({
            attributes : ['batch_id','batch_prog_id','batch_name','batch_start_date','batch_end_date','batch_instructor_id','batch_co_instructor_id'],
            where: { batch_id: req.params.id },
            include : [{
                model : req.context.models.program_entity,
                attributes : ['prog_title'],
                as : 'batch_prog'
            },{
                model : req.context.models.employee,
                attributes : ['emp_entity_id'],
                as : 'batch_instructor',
                include: [{
                    model : req.context.models.users,
                    as : 'emp_entity',
                    attributes:['user_entity_id','user_first_name','user_last_name']
                }]
            },
            {
                model : req.context.models.employee,
                attributes : ['emp_entity_id'],
                as : 'batch_co_instructor',
                include: [{
                    model : req.context.models.users,
                    as : 'emp_entity',
                    attributes:['user_entity_id','user_first_name','user_last_name']
                }]
            },
            {
                model : req.context.models.users,
                attributes : ['user_entity_id','user_first_name','user_last_name','user_photo'],
                as : 'bast_entity_id_users',
                include: [{
                    model : req.context.models.users_education,
                    as : 'users_educations'
                }]
            }]
        });
        return res.send(batch);
    } catch (error) {
        return res.status(404).send(error);
    }
}


const updateBatch = async(req,res, next) => {
    const {  batch_prog_id,batch_name, batch_start_date,batch_end_date,batch_instructor_id,batch_co_instructor_id} = req.body;
    try {
        let today = new Date()
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        const result = await req.context.models.batch.update(
            {
                batch_prog_id : batch_prog_id,
                batch_name : batch_name,
                batch_start_date: batch_start_date,
                batch_end_date: batch_end_date,
                batch_instructor_id: batch_instructor_id,
                batch_co_instructor_id: batch_co_instructor_id,
                batch_modified_date: dateTime
            },{
                returning: true, where: { batch_id: req.params.id }
            }
        );
        
        next()
    } catch (error) {
        return res.status(404).send(error);
    }
}


const addSudent = async(req,res)=>{
    const {batch_students} = req.body;
    const batch = req.params.id
    const studenCheck=[]

    try {
        let today = new Date()
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        const batchStudentList = await req.context.models.batch_student.findAll({
            where : {bast_batch_id: batch}
        }).map(e=>e.dataValues.bast_entity_id)

        await batch_students.map(el=>{
            studenCheck.push(parseInt(el.entity_id))
            if(batchStudentList.includes(parseInt(el.entity_id))){

            }else{
                req.context.models.batch_student.create({
                    bast_batch_id: parseInt(batch),
                    bast_entity_id:el.entity_id,
                    bast_modified_date: dateTime
                })

                req.context.models.users_roles.update({
                    usro_role_id : 2
                },{returning : true, where:{usro_entity_id:el.entity_id}})
                
            }

        })

        console.log(studenCheck);


        batchStudentList.map(e=>{
            if(studenCheck.includes(e)){
                const x=true;
            }else{
                req.context.models.batch_student.destroy({
                    where:{bast_entity_id:e}
                });
                req.context.models.users_roles.update({
                    usro_role_id : 1,
                    usro_modified_date: dateTime

                },
                    {returning: true, where: { usro_entity_id: e }})
            }
        })

        return res.send('Update Batch Success')
        
    } catch (error) {
        res.status(404).json({message : error.message})
        
    }
}


export default{
    findAll,
    findById,
    updateBatch,
    addSudent
}
