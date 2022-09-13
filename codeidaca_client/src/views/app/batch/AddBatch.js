import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import  { GetBatchRequest, AddBatchRequest } from '../../../redux-saga/actions/Batch'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import swal from 'sweetalert'
import ReactPaginate from 'react-paginate'

function dataTahun (tanggalAwal, tanggalAkhir) {
	const hasil = []
	for(let i = tanggalAwal; i <= tanggalAkhir.getFullYear(); i++) {
		hasil.push(i)
	}
	return hasil
}

const filterYear = dataTahun(2000, new Date())

const filterMonth = [
	{value:1, name: 'January'},
	{value:2, name: 'February'},
	{value:3, name: 'March'},
	{value:4, name: 'April'},
	{value:5, name: 'May'},
	{value:6, name: 'June'},
	{value:7, name: 'July'},
	{value:8, name: 'August'},
	{value:9, name: 'September'},
	{value:10, name: 'October'},
	{value:11, name: 'November'},
	{value:12, name: 'December'}
]

export default function AddBatch() {
	const dispatch = useDispatch()
	let navigate = useNavigate()
	const { batchs } = useSelector((state) => state.createBatchState)
	const [totalPeserta, setTotalPeserta] = useState(0)
	const [peserta, setPeserta] = useState([])
	const [value, setValue] = useState("")
	const [search, setSearch] = useState("")
	const [dataAwal, setDataAwal] = useState([])
	const [jumlahHalaman, setJumlahHalaman] = useState(0)
	const [halamanTerkini, sethalamanTerkini] = useState(0)
	const dataPerPage = 6

	console.log(value);
	console.log(search);

	useEffect(() => {
    dispatch(GetBatchRequest())
  }, [dispatch])

	useEffect(() => {
		const halamanAkhir = halamanTerkini + dataPerPage;
		setDataAwal(batchs.candidate && batchs.candidate.filter((user) => {
			if(search === "") {
				return user
			} else if(user.user_modified_date.includes(search)) {
				return user
			}
		}).slice(halamanTerkini, halamanAkhir));
		setJumlahHalaman(Math.ceil(batchs.candidate && batchs.candidate.length / dataPerPage));
	}, [halamanTerkini, dataPerPage, batchs, search])

	const handlePageClick = (event) => {
		const pilihHalaman = (event.selected * dataPerPage) % batchs.candidate.length;
		sethalamanTerkini(pilihHalaman)
	}

	const onClick = (data) => {
    setSearch(data)
  }

	const onCheckPeserta = (item) => (event) => {
    let data = event.target.checked;
    let tampung = [data, item];

    if (tampung[0] === true) {
      setPeserta([...peserta, item.user_entity_id]);
      setTotalPeserta(totalPeserta + 1);
    } else {
      const filterPeserta = peserta.filter(
        (user) => user !== item.user_entity_id
      );
      setPeserta([...filterPeserta]);
      setTotalPeserta(totalPeserta - 1);
    }
  };

	const formik = useFormik({
		initialValues: {
			batch_name: '',
			batch_start_date: '',
			batch_end_date: ''
		},

		validationSchema: Yup.object({
			batch_name: Yup.string().required("Batch Name cannot be empty"),
			batch_prog_id: Yup.number().min(1, "Please select Technology").required("Please select Technology"),
			batch_start_date: Yup.date().required("Select Start Date"),
			batch_end_date: Yup.date().required("Select End Date"),
			batch_instructor_id: Yup.number().min(1, "Please select Trainer").required("Please select Trainer"),
			batch_co_instructor_id: Yup.number().min(1, "Please select Co-Trainer").required("Please select Co-Trainer")
      
    }),

		onSubmit: async (values) => {
			const dataBatch = batchs.dataBatch.map(data => data.batch_name.toLowerCase().split(' ').join(''))
			const namaBatch = values.batch_name.toLowerCase().split(' ').join('')

			console.log(dataBatch);

			if (dataBatch.includes(namaBatch)) {
				swal({
					text: "Batches already exist. Please use a new name",
					icon: "error",
				});
				navigate('/app/batch/new')
			}  else if (peserta === null || peserta.length === 0) {
				swal({
					text: "Please add participants",
					icon: "warning",
				});
			} else {
				const payload = {
					batch_name: values.batch_name,
					batch_prog_id: values.batch_prog_id,
					batch_start_date: values.batch_start_date,
					batch_end_date: values.batch_end_date,
					batch_instructor_id: values.batch_instructor_id,
					batch_co_instructor_id: values.batch_co_instructor_id,
					peserta: peserta
				}
	
				console.log(payload);
	
				dispatch(AddBatchRequest(payload))
				swal({
					text: "Data Succesfully Insert",
					icon: "success",
				});
				navigate('/app/batch')
			}
    }
	})

	return (
		<>
			<div className="border-b border-gray-300 shadow-sm px-4 py-3 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
				<div className="flex-1 min-w-0">
					<h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Create Batch</h1>
				</div>
			</div>

			<div className='container pt-3 px-3'>
				<div className='border border-gray-300 py-5 px-10 shadow-inner h-full w-full rounded-t-xl'>
					<div className='relative flex justify-between w-full'>
						<div className='flex w-3/4'>
							<div className='flex-1 w-1/3 pr-5'>
								<label className='block'>Batch Name <span className='text-red-600'> * </span> </label>
								<input
									class="w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
									type="text"
									name="batch_name"
									id="batch_name"
									value={formik.values.batch_name}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									autoComplete="batch_name"
								/>
								{formik.touched.batch_name && formik.errors.batch_name ? <span className="text-xs text-red-600">{formik.errors.batch_name}</span> : null}
							</div>
							<div className='flex-1 w-1/3'>
								<label className='block'>Technology  <span className='text-red-600'> * </span> </label>
								<select
									class="w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
									name="batch_prog_id"
									id="batch_prog_id"
									value={formik.values.batch_prog_id}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									autoComplete="batch_prog_id"
								>
									<option value="0" selected>--- Choose ---</option>
									{
										batchs.program && batchs.program.map(prog => (
											<option value={prog.prog_id}>{prog.prog_title}</option>
										))
									}
								</select>
								{formik.touched.batch_prog_id && formik.errors.batch_prog_id ? <span className="text-xs text-red-600">{formik.errors.batch_prog_id}</span> : null}
							</div>
						</div>
						<div className='absolute right-0 flex flex-1 justify-center w-1/5'>
							<div className='block'>
								<svg xmlns="http://www.w3.org/2000/svg" className="lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-16 sm:w-16" viewBox="0 0 20 20" fill="currentColor">
									<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
								</svg>
								<span className='lg:text-5xl lg:px-7 md:text-5xl md:px-7 sm:text-4xl sm:px-6'>{totalPeserta}</span>
							</div>
						</div>
					</div>
					<div className='mt-3'>
						<label>Periode  <span className='text-red-600'> * </span> </label>
						<div className='flex justify-start w-2/5'>
							<div className='flex-1'>
								<input
									class="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									type="date"
									name="batch_start_date"
									id="batch_start_date"
									value={formik.values.batch_start_date}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									autoComplete="batch_start_date"
								/>
								{formik.touched.batch_start_date && formik.errors.batch_start_date ? <span className="text-xs text-red-600">{formik.errors.batch_start_date}</span> : null}
							</div>
							<h4 className='py-1 px-3'>to</h4>
							<div className='flex-1'>
								<input
									class="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									type="date"
									name="batch_end_date"
									id="batch_end_date"
									value={formik.values.batch_end_date}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									autoComplete="batch_end_date"
								/>
								{formik.touched.batch_end_date && formik.errors.batch_end_date ? <span className="text-xs text-red-600">{formik.errors.batch_end_date}</span> : null}
							</div>
						</div>
					</div>
					<div className='flex w-3/4 mt-3'>
						<div className='flex-1 w-1/3 pr-5'>
							<label className='block'>Trainer  <span className='text-red-600'> * </span> </label>
							<select
                class="w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
								name="batch_instructor_id"
                id="batch_instructor_id"
                value={formik.values.batch_instructor_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="batch_instructor_id"
              >
								<option value="0" selected>--- Choose ---</option>
								{
									batchs.instructor && batchs.instructor.map(emp => (
										<option value={emp.user_entity_id}>{emp.user_name}</option>
									))
								}
              </select>
							{formik.touched.batch_instructor_id && formik.errors.batch_instructor_id ? <span className="text-xs text-red-600">{formik.errors.batch_instructor_id}</span> : null}
						</div>
						<div className='flex-1 w-1/3'>
							<label className='block'>Co-Trainer  <span className='text-red-600'> * </span> </label>
							<select
                class="w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
								name="batch_co_instructor_id"
                id="batch_co_instructor_id"
                value={formik.values.batch_co_instructor_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="batch_co_instructor_id"
              >
								<option value="0" selected>--- Choose ---</option>
								{
									batchs.instructor && batchs.instructor.map(emp => (
										<option value={emp.user_entity_id}>{emp.user_name}</option>
									))
								}
              </select>
							{formik.touched.batch_co_instructor_id && formik.errors.batch_co_instructor_id ? <span className="text-xs text-red-600">{formik.errors.batch_co_instructor_id}</span> : null}
						</div>
					</div>
					<h1 className='mt-4 mb-3 font-semibold uppercase'>Recommended Bootcamp Members</h1>
					<div className='flex justify-center text-sm'>
						<select
							className=' focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
							onChange={(event) => {
								setValue(event.target.value)
							}}
						>
							<option value="">Filter By Month</option>
							{
								filterMonth.map(data => (
									<option value={ data.value < 10 ? `-0${data.value}-` : `-${data.value}-` }>{data.name}</option>
								))
							}
						</select>
						<select
							className='h-9 ml-5 mr-10 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
							onChange={(event) => {
								setValue(event.target.value)
							}}
						>
							<option value="">Year</option>
							{
								filterYear.map(data => (
									<option value={data}>{data}</option>
								))
							}
						</select>
						<button 
							className='border px-2 shadow-sm rounded-md border-gray-300'
							onClick={() => onClick(value)}	
						>
							Search Candidate
						</button>
					</div>
					<div className='grid lg:grid-cols-3 gap-3 justify-items-center mt-5 sm:grid-cols-2'>
						{
							dataAwal && dataAwal.filter((user) => {
								if(search === "") {
									return user
								} else if(user.user_modified_date.includes(search)) {
									return user
								}
							}).map(user => (
								<div className='relative flex-1 w-5/6'>
									<label className='flex items-center'>
										<input
											type='checkbox'
											className='rounded-md hidden peer'
											name='bast_entity_id'
											id='bast_entity_id'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											autoComplete="bast_entity_id"
											onClick={onCheckPeserta(user)}
										/>
										<div className='flex flex-1 py-1 px-3 rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 peer-checked:bg-green-400 peer-checked:font-semibold duration-300'>
											<svg xmlns="http://www.w3.org/2000/svg" class=" h-14 w-14 mr-3" viewBox="0 0 20 20" fill="currentColor">
  											<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
											</svg>
											<div className='flex-1'>
												<span className='block text-xl font-semibold uppercase'>{user.user_name}</span>
												<span className='-mt-1 text-sm'>Univ. Ternama</span>
											</div>		
										</div>
										<div className='absolute right-3 peer-checked:rotate-45 duration-300 peer-checked:bg-green-400'>
											<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
  											<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
											</svg>
										</div>
									</label>
								</div>
							))		
						}
					</div>
					<ReactPaginate
						containerClassName='flex justify-center items-center gap-1 mt-4 text-sm'
						pageLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
						previousLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
						nextLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
						activeLinkClassName='bg-green-400'
						breakLabel="..."
						nextLabel="next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={jumlahHalaman}
						previousLabel="< previous"
						renderOnZeroPageCount={null}
					/>
				</div>
				<div className='bg-gray-100 px-8'>
					<div className='flex justify-end py-2 text-sm'>
						<button 
							className='mr-5 transition flex items-center text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 cursor-pointer pl-2 pr-4 py-1 shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							type='submit' 
							onClick={formik.handleSubmit}
						>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  							<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
							{ }
							Save
						</button>
						<button 
							className='transition flex items-center text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer pl-2 pr-4 py-1 shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' 
							onClick={() => navigate('/app/batch/')}
						>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</>
	)
}