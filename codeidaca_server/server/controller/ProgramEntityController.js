const findFourBootcamps=async(req,res)=>{
    try{
        const program_entity=await req.context.models.program_entity.findAll({
            limit:4,
            where:{prog_type:'bootcamp'}
        })
        return res.send(program_entity)
    }catch(error){
        return res.status(404).send(error)
    }
}

const findThreeOnlineCourses=async(req,res)=>{
    try{
        const program_entity=await req.context.models.program_entity.findAll({
            limit:3,
            where:{prog_type:'course',prog_learning_type:'online'}
        })
        return res.send(program_entity)
    }catch(error){
        return res.status(404).send(error)
    }
}

const showAlumniProgramReview=async(req,res)=>{
    try{
        const program_entity=await req.context.models.programs_review.findAll({
            include: { all: true },
            limit:6
        })
        return res.send(program_entity)
    }catch(error){
        return res.status(404).send(error)
    }
}

export default{
    findFourBootcamps,
    findThreeOnlineCourses,
    showAlumniProgramReview
}