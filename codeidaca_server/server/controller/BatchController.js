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

export default {
	findAll,
	createNext,
	updateRoles,
	createData
}