import React, { useState, useEffect,Fragment,useMemo } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Page from '../../../component/commons/Page';
import { useNavigate, NavLink, Link, useLocation } from 'react-router-dom';
import { GetBatchRequest, DelBatchRequest, EditBatchRequest } from '../../../redux-saga/actions/Batch';  
import { GetUserRequest} from '../../../redux-saga/actions/User'; 
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon, SearchIcon,ChevronDownIcon } from '@heroicons/react/solid';
import ModalBatch from './ModalBatch';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default function Batch() {
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState(false)
  const {batch} = useSelector(state => state.batchState);
  const {users} = useSelector(state => state.userState);

  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState({})

  const [listBatches, setListBatches] = useState([])


  const [pageNumbers, setPageNumbers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageRange, setPageRange] = useState(0)
  const [filter, setFilter] = useState({
    input:'',
    select:''
})
const batch_status =['new','running', 'closed']

const handleOnChange = (name) => (event) => {
    setFilter({ ...filter, [name]: event.target.value });
  };

  useEffect(() => {
    dispatch(GetBatchRequest());
    dispatch(GetUserRequest());

}, [refresh])



useEffect(() => {
    setListBatches(
        Array.isArray(batch) && batch.filter(data=>(
            (data.batch_name.toLowerCase().includes(filter.input.toLowerCase()) || 
            data.batch_instructor.emp_login_id.toLowerCase().includes(filter.input.toLowerCase()) || 
            data.batch_prog.prog_title.toLowerCase().includes(filter.input.toLowerCase()))
            &&
            (filter.select === 'Status' || data.batch_status.toLowerCase().includes(filter.select))))
        )
    
}, [batch]);

useEffect(()=>{
    setPageNumbers(Array.from({length: Math.ceil(listBatches.length/10)}, (v, i) => (i+1 === 1 ? {number: i+1, active: true} : {number: i+1, active: false})))
    setCurrentPage(1)
    setPageRange(0)
},[listBatches])


const onSearch = event =>{
    event.preventDefault();
    setListBatches(
        Array.isArray(batch) && batch.filter(data=>(
            (data.batch_name.toLowerCase().includes(filter.input.toLowerCase()) || 
            data.batch_instructor.emp_login_id.toLowerCase().includes(filter.input.toLowerCase()) || 
            data.batch_prog.prog_title.toLowerCase().includes(filter.input.toLowerCase())) &&
            (filter.select === 'Status' || data.batch_status.toLowerCase().includes(filter.select))))
        )
    
}

const onClick = (batchID) => {
    setShowModal(true)
    setId(batchID)
}


const onEditClose = async (id) =>{
    if (refresh === true){
        setRefresh(false)
    }else{
        {
            const payload = {
                batch_id: parseInt(id),
                batch_status :"Closed"
                
            };
            dispatch(EditBatchRequest(payload))
            setShowModal(false);
        }
        //window.alert('Data Succesfully Edited')
        setRefresh(true);
    }
    
    
}
const onEditRun = async (id) =>{
    if (refresh === true){
        setRefresh(false)
    }else{
        {
            const payload = {
                batch_id: parseInt(id),
                batch_status :"Running"
                
            };
            dispatch(EditBatchRequest(payload))
        }
        window.alert('Data Succesfully Edited')
        setRefresh(true);
    }
}

const onDelete = async (id) =>{
    if (refresh === true){
        setRefresh(false)
    }else{
    dispatch(DelBatchRequest(id))//menjalankan reducer untuk merubah state 
    setRefresh(true);
    }
}


  let navigate = useNavigate();
 console.log(batch);
 console.log(users);

return (
    
    <Page title='Batch' titleButton='Create' onClick={() => navigate('/app/batch/new')}>
         {showModal ? (
   <ModalBatch
   setModal={setShowModal}
   Refresh={setRefresh}
   onClose={onEditClose}
   id={id}
   />
      ) : null}
<div class="">
        <div class=" bg-white flex items-center justify-center font-sans ">
            <div class="w-full">
                <div class="bg-white  rounded my-6">
                  <div class="flex items-center justify-center mb-2 ">
                    <div className='mr-2'>Search by Category : </div>
                      <input   id="table-search"  type="search" 
                            onChange={handleOnChange('input')}class="mr-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5   " placeholder="batch, technology, trainer"></input>
                        <select  name="batch_status"
                            id="batch_status"
                            onChange={handleOnChange('select')} class="px-5 py-3    rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <option>Status</option>
                            {
                            
                                (batch_status || []).map((value, index) => (
                                    <option className="capitalize" value={value} key={index}>{value}</option>
                                ))
                            }
                        </select>
                      <button type="submit"
                            onClick={onSearch} class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3">
  Search
</button>
                  </div>
                    <table class=" w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Batch</th>
                                <th class="py-3 px-6 text-center">Technology</th>
                                <th class="py-3 px-6 text-center">Members</th>
                                <th class="py-3 px-6 text-center">Periode</th>
                                <th class="py-3 px-6 text-center">Trainer</th>
                                <th class="py-3 px-6 text-center">Status</th>
                                <th class=""></th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                        
                            {Array.isArray(listBatches) && listBatches.sort((a, b) => b.batch_id - a.batch_id).slice((currentPage-1)*10,currentPage*10).map((item) => (
            <tr key={item.batch_id} class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="">
                        <span class="font-medium">{item.batch_name}</span>
                        </div>
                        
                    </div>
                </td>
                <td class="text-center">
                    <span class=" items-center">{item.batch_prog.prog_title}</span>
                </td>
                <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                    
                        {
                            
                            item.bast_entity_id_users.slice(0,4).map((stu,index, arrayRef) => {
                                
                                return (
                            <img alt={stu?.user_name}  class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                            )
                            }
                            )
                        }
                        <div>
                            {item.bast_entity_id_users.length > 4 ?(
                                <span className=''>{item.bast_entity_id_users.length -5} + </span>
                            ): (
                            <span></span>
                            )}
                        </div>
                        
                    </div>
                </td>
                <td class="py-3 px-6 grid text-center">
                    <span class=" text-xs">{item.batch_start_date}</span>
                    <span class=" text-xs">{item.batch_end_date}</span>
                </td>
                <td class="py-3 px-6 text-center">
                    <span class="">
                    {users&&users.filter(user=>user.user_entity_id === item.batch_instructor.emp_entity_id).map((usr) =>usr.user_name)}
                    
                    </span>
                </td>
                <td class="py-3 px-6 text-center">{item.batch_status === "Closed" ?(
                    <span class="bg-red-200 text-black-600 py-1 px-3 rounded-full text-xs" >{item.batch_status}</span>
                ):item.batch_status === "Running" ?(
                    <span class="bg-green-200 text-black-600 py-1 px-3 rounded-full text-xs" >{item.batch_status}</span>
                ):(
                    <span class="bg-yellow-200 text-black-600 py-1 px-3 rounded-full text-xs" >{item.batch_status}</span>
                )
                }
                </td>
                <td class="py-3 px-6 text-center">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full  hover:bg-gray-100  px-4 py-2  text-sm font-medium ">
                        
                        <DotsVerticalIcon className="-mr-1  h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>
                    
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Edit
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                type='submit'
                                href="#"
                                onClick={() => onClick({ batchID: item.batch_id})}
                                
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Closed Batch
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                               
                                onClick={() => onDelete(item.batch_id)}
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Delete Batch 
                                </a>
                            )}
                            </Menu.Item>
                            
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    type="submit"
                                
                                    onClick={() => onEditRun(item.batch_id)}
                                    className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block w-full text-left px-4 py-2 text-sm'
                                    )}
                                >
                                    Set to Running
                                </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                            Evaluation
                                </a>
                            )}
                            </Menu.Item>
                            
                        </div>
                        </Menu.Items>
                    </Transition>
                    </Menu>
                </td>
               
            </tr>
            ))}
                       
                        </tbody>
                    </table>
                    {listBatches.length === 0 && 
                        <div className='px-6 py-3 text-center whitespace-nowrap text-sm font-medium text-gray-900'> Data Not Found...</div>}

                        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">{(currentPage-1)*10+1}</span> to <span className="font-medium">{(currentPage)*10<listBatches.length ? (currentPage)*10 : listBatches.length}</span> of{' '}
                                        <span className="font-medium">{listBatches.length}</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <button
                                            onClick={()=>{
                                                setCurrentPage(1)
                                                setPageNumbers([...pageNumbers].map(val=>(val.number === 1 ? {...val,active:true} : {...val,active:false})))
                                                setPageRange(0)
                                            }}
                                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                            >
                                            <span className="underline">First</span>
                                        </button>
                                        <button
                                        onClick={()=>{
                                            const min = 0
                                            if (pageRange>min) {
                                                setPageRange(pageRange-1)
                                            }
                                        }}
                                        // className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                        >
                                        <span className="sr-only">Previous</span>
                                            {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
                                        </button>
                                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

                                        {pageNumbers.slice(pageRange*4, pageRange*4+4).map(el=>(
                                            <button
                                                onClick={()=>{
                                                    setCurrentPage(el.number)
                                                    setPageNumbers([...pageNumbers].map(val=>(val.number === el.number ? {...val,active:true} : {...val,active:false})))
                                                }}
                                                aria-current="page"
                                                className={classNames(el.active ? "z-10 font-bold  border-indigo-500 bg-orange-600 hover:bg-red-700 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium" : "bg-white font-bold border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                                                "relative inline-flex items-center px-4 py-2 border text-sm font-medium")}
                                                >
                                                {el.number}
                                            </button>
                                        ))}
                                        <button
                                        onClick={()=>{
                                            const max = Math.ceil(pageNumbers.length/4)-1
                                            if (pageRange<max) {
                                                setPageRange(pageRange+1)
                                            }
                                        }}
                                        // className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                        >
                                        <span className="sr-only">Next</span>
                                        {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
                                        </button>
                                        <button
                                            onClick={()=>{
                                                const max = Math.ceil(pageNumbers.length/4)-1
                                                setCurrentPage(pageNumbers.length)
                                                setPageNumbers([...pageNumbers].map(val=>(val.number === pageNumbers.length ? {...val,active:true} : {...val,active:false})))
                                                setPageRange(max)
                                            }}
                                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                            >
                                            <span className="underline">Last</span>
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>
    </div>
    </Page>
    
  )
}
// ReactDOM.render(
//   <Batch itemsPerPage={2} />,
//   document.getElementById('container')
// );