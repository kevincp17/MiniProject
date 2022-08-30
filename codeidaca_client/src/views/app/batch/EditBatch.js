import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import { useFormik,  } from "formik";
import Page from '../../../component/commons/Page';
 
import {
    CalendarIcon,
    ChevronLeftIcon,
    UserGroupIcon,
    XIcon
} from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux';
import { doGetBatchIdRequest, doUpdateBatchRequest } from '../../../redux-saga/actions/Batch';
import config from '../../../config/config';
import { ChevronRightIcon } from '@heroicons/react/outline';
const listOfMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function listOfYear (start,end){
    const arr = []
    for (let i = start; i < end+1; i++) {
        arr.push(i)
    }
    return arr
}
/*
const listOfYear = [2017,2018,2019,2020,2021,2022];
*/
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function EditBatch() {
    let navigate = useNavigate();
    
    const dispatch = useDispatch();
    
    const {batch,talents, candidates, instructors,programs} = useSelector((state) => state.batchState)
    //const { userProfile } = useSelector((state) => state.userState);
    const [previewImg, setPreviewImg] = useState();
    const [members, setMembers] = useState([])
    const [talens, setTalens] = useState([])
    const [countMembers, setCountMembers] = useState(0)
    const [instructorNames, setinstructorNames] = useState([])
    const [coInstructor, setCoInstructor] = useState([])
    const [programNames, setProgramNames] = useState([])
    const filtered = false;


    const [pageNumbers, setPageNumbers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageRange, setPageRange] = useState(0)
    
    const [value, setValue] = useState("")
    const [search, setSearch] = useState("")
    const [values, setValues] = useState("")
    
    const {id} = useParams()
    
    useEffect(()=>{
      dispatch(doGetBatchIdRequest(id))
    },[])

    console.log(members);
    console.log(pageNumbers);
    console.log(currentPage);
    console.log(pageRange)

    
    
    /*
    
    useEffect(()=>{
        setinstructorNames(instructors && instructors.map(ins=>(
            {
                instructor_id : ins.user_entity_id,
                instructor_name : ins.user_first_name+' '+ins.user_last_name
            }
        )))
        
    },[instructors])



    useEffect(()=>{
        setCoInstructor(
            instructors && instructors.map(coIns=>(
                {
                    coInstructor_id : coIns.user_entity_id,
                    coInstructor_name : coIns.user_first_name+' '+coIns.user_last_name
                }
            ))
        )

    },[instructors])

    */

    useEffect(()=>{
        setinstructorNames([...new Set(instructors.map(coIns => coIns.user_first_name+' '+coIns.user_last_name))])
        
    },[instructors])

    useEffect(()=>{
        setCoInstructor([...new Set(instructors.map(coIns => coIns.user_first_name+' '+coIns.user_last_name))])

    },[instructors])

    
    useEffect(()=>{
        setProgramNames([...new Set(programs.map(item => item.prog_title))])
    },[programs])

    useEffect(()=>{
        
        setMembers(
            
            candidates && candidates.map(t=>(
                {   
                    candidate_id:t.user_entity_id,
                    candidate_fullname : t.user_first_name+' '+t.user_last_name,
                    candidate_education : t.users_educations.map(x=>x.usdu_school) || '' ,
                    candidate_photo : t.user_photo,
                    tahun : new Date(t.user_modified_date).getFullYear() || '',
                    bulan : new Date(t.user_modified_date).getMonth() || '',
                    selected : batch.bast_entity_id_users.map(el=>el.user_entity_id).includes(t.user_entity_id) ? true : false

                }
            )), 
            
        )

    },[candidates])

    
    

    useEffect(() => {
        setCountMembers(
            (members.length && members.filter(el=>el.selected).length) 
        )
    }, [members])

    
    useEffect(()=>{
        setPageNumbers(Array.from({length: Math.ceil(members.length/12)}, (v, i) => (i+1 === 1 ? {number: i+1, active: true} : {number: i+1, active: false})))
    },[members])

   
    

    

    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            batch_id: batch.batch_id || 0,
            batch_name: batch.batch_name || '', 
            batch_start_date: batch.batch_start_date && new Date(batch.batch_start_date),
            batch_end_date: batch.batch_end_date && new Date(batch.batch_end_date),
            batch_instructor_name:batch.batch_instructor === undefined ? 'choose' : batch.batch_instructor.emp_entity.user_first_name+' '+batch.batch_instructor.emp_entity.user_last_name,
            batch_instructor_id : batch.batch_instructor === undefined ? '' : batch.batch_instructor_id,
            batch_co_instructor_name:batch.batch_co_instructor == undefined? 'choose' : batch.batch_co_instructor.emp_entity.user_first_name+' '+batch.batch_co_instructor.emp_entity.user_last_name,
            batch_co_instructor_id : batch.batch_co_instructor === undefined ? '' : batch.batch_co_instructor_id,
            batch_prog_name : batch.batch_prog === undefined ? '': batch.batch_prog.prog_title,
            batch_prog_id : batch.batch_prog === undefined ? '': batch.batch_prog_id,
            
            
            
        },
        onSubmit: async (values) => {

            values.batch_prog_id = programs.filter(prog => prog.prog_title === values.batch_prog_name)[0].prog_id
            values.batch_instructor_id = instructors.filter(el=>el.user_first_name +' '+ el.user_last_name === values.batch_instructor_name).user_entity_id
            values.batch_co_instructor_id= instructors.filter(el=>el.user_first_name +' '+ el.user_last_name === values.batch_co_instructor_name)[0].user_entity_id
            values.batch_students = (members.filter(el=>el.selected).map(el=>({entity_id: el.candidate_id})))
            

            const payload = {
                batch_id: values.batch_id,
                batch_name: values.batch_name,
                batch_prog_id : values.batch_prog_id,
                batch_start_date: values.batch_start_date,
                batch_end_date: values.batch_end_date,
                batch_instructor_id: values.batch_instructor_id,
                batch_co_instructor_id: values.batch_co_instructor_id,
                batch_students: values.batch_students,
            }

            console.log(payload)

            //post with redux-saga
            dispatch(doUpdateBatchRequest(payload))

            navigate('/app/batch', {state:{ updated: true }})
        }
      });

      
    
      


    return (
        <Page title={`Edit ${formik.values.batch_name}`} titleButton='Back' onClick={() => navigate('/app/batch', {state:{ updated: false }})} >
        
            <div class="rounded-xl border p-5 shadow-md w-12/12 bg-white">
            <form action="#" method="POST" >
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-10 py-5 bg-gray-100 sm:p-6 ">
                            <div className="sm:grid sm:grid-cols-5 gap-4">
                                <div className="col-span-2 lg:row-start-1 lg:col-span-2">
                                    <label htmlFor="batch_name" className="block text-sm font-medium text-gray-900">
                                        Batch Name
                                    </label>
                                    <input
                                        type="text"
                                        name="batch_name"
                                        id="batch_name"
                                        value={formik.values.batch_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="batch_name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.batch_name && formik.errors.batch_name?(
                                         <span className="mt-2 text-sm text-red-600">{formik.errors.batch_name}</span>
                                    ):null}
                                </div>
                                <div className="col-span-5 lg:row-start-1 lg:col-span-2">
                                    <label htmlFor="batch_prog_name" className="block text-sm font-medium text-gray-900">
                                        Technology
                                    </label>
                                    <select
                                        name="batch_prog_name"
                                        id="batch_prog_name"
                                        value={formik.values.batch_prog_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="batch_prog_name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        {programNames && programNames.map((value,index)=>
                                             <option value={value} key={index} >{value}</option>
                                        )}
                                    </select>
                                </div>

                                
                                
                                <div className="col-span-2 lg:row-start-2 lg:col-span-1">
                                    <label htmlFor="batch_start_date" className="block text-sm font-medium text-gray-700">
                                        Period
                                    </label>
                                    <div className='flex items-center'>
                                        <DatePicker
                                            name="batch_start_date"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            selected={formik.values.batch_start_date}
                                            onChange={(date)=> formik.setFieldValue("batch_start_date", date)}
                                            />
                                        <CalendarIcon
                                            htmlFor="batch_start_date"
                                            className="ml-1 w-8 h-8 text-gray-600"
                                            />
                                    </div>
                                    {formik.touched.batch_start_date && formik.errors.batch_start_date ? (
                                        <div className="mt-2 text-sm text-red-600">{formik.errors.batch_start_date}</div>
                                    ) : null}
                                </div>
                                <div className="col-span-2 lg:row-start-2 lg:col-span-1 relative">
                                    <div className='flex items-center absolute bottom-0'>
                                        <DatePicker
                                            name="batch_end_date"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            selected={formik.values.batch_end_date}
                                            onChange={(date) => formik.setFieldValue("batch_end_date", date)}
                                            />
                                        <CalendarIcon
                                            htmlFor="batch_end_date"
                                            className="ml-1 w-8 h-8 text-gray-600"
                                            />
                                    </div>
                                    {formik.touched.batch_end_date && formik.errors.batch_end_date ? (
                                        <div className="mt-2 text-sm text-red-600">{formik.errors.batch_end_date}</div>
                                    ) : null}
                                </div> 
                                <div className="col-span-5 row-start-6 lg:row-start-1 lg:col-span-1 row-span-2 justify-self-start self-start lg:justify-self-center lg:self-center">
                                    <UserGroupIcon className="w-20 h-20 text-gray-600" aria-hidden="true" />
                                    <h1 className='font-bold text-gray-600 text-4xl text-center'>{countMembers}</h1>
                                </div>
                                
                                <div className="col-span-5 lg:row-start-3 lg:col-span-2">
                                    <label htmlFor="batch_instructor_name" className="block text-sm font-medium text-gray-900">
                                        Trainer
                                    </label>
                                    <select
                                        name="batch_instructor_name"
                                        id="batch_instructor_name"
                                        value={formik.values.batch_instructor_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="batch_instructor_name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        
                                        {instructorNames&&instructorNames.map((value,index)=>
                                             <option value={value} key={index} >{value}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="col-span-5 lg:row-start-3 lg:col-span-2">
                                    <label htmlFor="batch_co_instructor_name" className="block text-sm font-medium text-gray-900">
                                        Co Trainer
                                    </label>
                                    <select
                                        name="batch_co_instructor_name"
                                        id="batch_co_instructor_namee"
                                        value={formik.values.batch_co_instructor_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="batch_co_instructor_name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        
                                        {coInstructor&&coInstructor.map((value,index)=>
                                             <option value={value} key={index} >{value}</option>
                                        )}

                                    </select>
                                </div>
                                
                            </div>
                            
                            <div className="mt-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="sm:col-span-2 lg:col-span-3">
                                    <h1 className='font-medium text-gray-400'>
                                        RECOMMENDED BOOTCAMP MEMBERS
                                    </h1>
                                    <div className='flex justify-center text-sm'>
                                    <select
                                         
                                         onChange={(event) => {
                                            setValue(event.target.value);
                                        }}
                                        className="border border-gray-300  text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                        <option>Filter By Month</option>
                                        {
                                            (listOfMonth || []).map((value,index)=>(
                                                <option className="capitalize" value={value} key={index}>{value}</option>
                                            ))
                                        }
                                    </select>
                                    <select
                                        onChange={(event) => {
                                            setValue(event.target.value);
                                        }}
							            className="border border-gray-300  text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
							            <option>Year</option>
                                        {
                                            (listOfYear(2017,new Date().getFullYear()) || []).map((value, index) => (
                                                <option value={value} key={index}>{value}</option>
                                            ))
                                        }
						            </select>
                                    <button 
                                    className="border border-gray-700 bg-gray-700 text-white  h-10 pl-5 pr-10 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={()=>{
                                        setSearch(value)
                                    }}>
                                        Search Candidate</button>
                                    </div>
                                </div>
                                {
                                members && members.filter((el)=>{
                                    if(search==='' ||search==='Year' || search === 'Filter By Month' ){
                                        return el
                                    }else if(el.tahun === parseInt(search)){
                                        return el
                                    } else if(el.bulan ===listOfMonth.indexOf(search)){
                                        
                                        return el
                                        
                                    }
                                })
                                .slice((currentPage-1)*12,currentPage*12).map((el)=>(
                                    <div>
                                        <input 
                                            className='hidden'
                                            type="checkbox" 
                                            id={`${el.candidate_id}`}
                                            checked={el.selected}
                                            onChange={(event)=>{
                                                setMembers(()=>{
                                                members[members.indexOf(el)].selected = !el.selected
                                                return [...members]
                                                })
                                            }}  

                                        />
                                        {console.log(`${pageNumbers}`)}
                                        <label 
                                            htmlFor={`${el.candidate_id}`}
                                            className={classNames(
                                                el.selected ? "border-gray-400 bg-green-400" : "border-gray-400 bg-white",
                                                "cursor-pointer border border-gray-400 bg-white shadow-md rounded-lg py-2 pl-2 flex items-center justify-between"
                                            )}  
                                        >
                                            <div className="flex w-full items-center">
                                                <img crossOrigin='annonymous' className="h-10 w-10 rounded-full" src={`${config.urlImage}/${el.candidate_photo}`} alt='NotFound'/>
                                                <div className="ml-3 text-left">
                                                    <div className="text-sm font-medium text-gray-900">{el.candidate_fullname}</div>
                                                    <div className="text-[10px] text-gray-500">{el.candidate_education}</div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                className={classNames(el.selected ? "rotate-0":"rotate-[135deg]","transition ease-in-out duration-500 text-gray-600 h-7 w-7 mr-2 rotate-0" )}
                                                stroke="currentColor" viewBox="0 0 20 20" fill="currentColor">
                                                <path strokeLinecap="round"    strokeLinejoin="round" strokeWidth="1" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </label>
                                    </div>    
                                ))}
                                
                            </div>
                            
                        
                            
                        </div>
                        <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-300 sm:px-6">
                                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing <span className="font-medium">{(currentPage-1)*12+1}</span> to <span className="font-medium">{(currentPage)*12<members.length ? (currentPage)*12 : members.length}</span> of{' '}
                                            <span className="font-medium">{members.length}</span> results
                                        </p>
                                    </div>
                                    <div>
                                        <nav className="relative z-0 inline-flex rounded-md -space-x-px" aria-label="Pagination">
                                            <button
                                                type="button"
                                                onClick={()=>{
                                                    const min = 0
                                                    if (pageRange>min) {
                                                        setPageRange(pageRange-1)
                                                    }
                                                }}
                                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                >
                                                <span className="sr-only">Previous</span>
                                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

                                            {pageNumbers.slice(pageRange*4, pageRange*4+4).map(el=>(
                                                <button
                                                    type="button"
                                                    onClick={()=>{
                                                        setCurrentPage(el.number)
                                                        setPageNumbers([...pageNumbers].map(val=>(val.number === el.number ? {...val,active:true} : {...val,active:false})))
                                                    }}
                                                    aria-current="page"
                                                    className={classNames(el.active ? "z-20 bg-orange-100 border-orange-600 text-orange-900" : "z-10 bg-white border-gray-300 text-gray-600",
                                                    "relative inline-flex items-center px-4 py-2 border text-sm font-medium")}
                                                    >
                                                    {el.number}
                                                </button>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={()=>{
                                                    const max = Math.ceil(pageNumbers.length/4)-1
                                                    if (pageRange<max) {
                                                        setPageRange(pageRange+1)
                                                    }
                                                }}
                                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                >
                                                <span className="sr-only">Next</span>
                                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        
                        
                        <div className="px-4 py-3 bg-gray-200 text-right sm:px-6 ">
                            <button
                                type="button"
                                onClick= {formik.handleSubmit} 
                                className="focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() =>{
                                    if(window.confirm('Do you really want to leave?')){
                                        navigate('/app/batch', {state:{ updated: false }})
                                        
                                    }
                                } }
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        
      </Page>

        
    )
}
