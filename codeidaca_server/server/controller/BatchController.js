const findAll = async (req,res)=>{
	try {
		const dataBatch = await req.context.models.batch.findAll({
			attributes: ['batch_name']
		});
		const candidate = await req.context.models.users.findAll({
			include:[{
				model:req.context.models.roles,
				as:"usro_role_id_roles",
				required:true,
				where: {
					role_name: "Candidat"
				}
			}]
		});
		const instructor = await req.context.models.users.findAll({
			include : [
				{
					model:req.context.models.employee,
					as:"employee",
					required:true
				},
				{
					model:req.context.models.roles,
					as:"usro_role_id_roles",
					required:true,
					where: {
						role_name: "Instructor"
					}
				}
			]
		});
		const program = await req.context.models.program_entity.findAll();
		const result = { dataBatch, candidate, instructor, program }
		return res.send(result)
	} catch (error) {
		return res.status(404).send(error)
	}
}

const createNext = async (req,res,next)=>{
	try {
		const batch = await req.context.models.batch.create({
			batch_name : req.body.batch_name,
			batch_prog_id : req.body.batch_prog_id,
			batch_start_date : req.body.batch_start_date,
			batch_end_date : req.body.batch_end_date,
			batch_status : "New",
			batch_modified_date : new Date(),
			batch_instructor_id : req.body.batch_instructor_id,
			batch_co_instructor_id : req.body.batch_co_instructor_id
		})
		req.batch = batch
		next()
	} catch (error) {
		return res.status(404).send(error)
	}
}

const createData = async (req,res,next)=>{
  const cekBatch = req.batch
  const {peserta} = req.body
  try {
    for(let i = 0; i < peserta.length; i++) {
      await req.context.models.batch_student.create({
        bast_batch_id : cekBatch.batch_id,
        bast_entity_id : peserta[i]
      })
    }
    next()
  } catch (error) {
    return res.status(404).send(error)
  }
}

const updateRoles = async (req,res)=>{
	const {peserta} = req.body
	try {
		for(let i = 0; i < peserta.length; i++) {
			await req.context.models.users_roles.update({
				usro_role_id : 2
			},{ returning : true , where:{usro_entity_id : peserta[i]}})
		}
		return res.send(peserta)
	} catch (error) {
		return res.status(404).send(error)
	}
}

const findAll1 = async(req,res) => {
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

const updateStatusBatch = async (req, res) => {
    
    try {
        const result = await req.context.models.batch.update({
            batch_status:req.body.batch_status
        },{ returning:true, where: { batch_id: req.params.id } })
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
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

export default{
    findAll,
	createNext,
	updateRoles,
	createData,
    findAll1,
    findById,
    updateBatch,
    updateStatusBatch,
    addSudent,
    deleted,
    deleteNext
}
