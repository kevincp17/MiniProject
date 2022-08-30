import React,{useState,useEffect} from 'react'
import categoryApi from '../../../api/categoryApi'
import CategoryAdd from './CategoryAdd'
import CategoryEdit from './CategoryEdit'
import "./Modal.css";
import { PlusIcon, PencilIcon, HomeIcon, XIcon, ChevronRightIcon } from '@heroicons/react/outline'


export default function CategoryView() {
 const [category,setCategory] = useState([])
 const [display,setDisplay] = useState(false)
 const [displayEdit,setDisplayEdit] = useState(false)
 const [refresh,setRefresh] = useState(false)
 const [id, setId] = useState({})
 const [values,setValues] = useState({
    cate_id: undefined,
    cate_name: undefined,
    cate_cate_id:undefined,
 })
    useEffect(() => {
        categoryApi.list().then(data => {
            setCategory(data)
        })
        setRefresh(false)
    },[refresh])

const handleOnChange = name => event => {
    setValues({...values, [name]: event.target.value})
}
const onSubmit = async () => {
    const payload = {
        cate_name : (values.cate_name),
        cate_cate_id : (values.cate_cate_id)
    }

    await categoryApi.create(payload).then(()=>{
        setDisplay(false)
        setRefresh(true)
        window.alert(`Data Berhasil Di Input`)
    })
}


const onEdit = async () => {
    const data = {
        cate_id: (id.cateID),
        cate_name : (values.cate_name),
        cate_cate_id : (values.cate_cate_id)
    }
    console.log(data)
    await categoryApi.update(data).then(()=>{
        setDisplayEdit(false)
        setRefresh(true)
        window.alert(`Data Berhasil Di Edit`)
    })
    console.log(data)
}

const onClick = (cateID) => {
    setDisplayEdit(true)
    setId(cateID)
}

const onDelete = async (id) => {
    categoryApi.deleted(id).then(()=>{
        setRefresh(true)
        setModal(!modal);
        window.alert(`Data Berhasil Di Hapus`)
    })
}

const [modal, setModal] = useState(false);

const toggleModal = (cateID) => {
  setModal(!modal);
  setId(cateID)
  console.log(cateID)
};

if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
<>


    <div>
        <div>
            <div className='text-sm border-solid border-2 border-spacing-2 border-gray-200 px-6 py-3 '>
                <div className='h-6 w-6 float-left mr-3'>
                    <a href='#'>{HomeIcon()}
                    </a>    
                </div>
                <h1>
                    <a className='text-blue-500 float-left' href="#">Home</a>
                    <span  className='h-5 w-5 float-left'>{ChevronRightIcon()}</span>
                    <a className='text-blue-500 float-left' href="#">Master</a>                    
                    <span  className='h-5 w-5 float-left'>{ChevronRightIcon()}</span>
                    Category
                </h1>
            </div>
            <div>
            <div className='float-left flex h-96 w-1/6 justify-center border border-solid border-gray-200'>
                <div className='center w-2/3 mt-12'>
                    <h1 className='text-blue-500 '>Master Data</h1>
                    <h1 className='mt-2 text-blue-500 '><a href="">-Category</a></h1>
                    <h1 className='mt-2 text-blue-500 '><a href="">-Skill</a></h1>
                    <h1 className='mt-2 text-blue-500 '><a href="">-Modules</a></h1>
                    <h1 className='mt-2 text-blue-500 '><a href="">-Address Type</a></h1>
                    <h1 className='mt-2 text-blue-500 '><a href="">-Locations</a></h1>
                </div>
            </div>
            <div className='float-left w-5/6'>
                <h2 className='text-2xl mt-2 ml-4 mb-2'>Category</h2>
                {
                        display ?
                        <CategoryAdd
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                        />
                        :
                        <>
                        {
                        displayEdit ? 
                       <CategoryEdit
                        onEdit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        setDisplayEdit={setDisplayEdit}
                        />
                        :
                            <table className="w-full text-sm text-left table-fixed ">
                                <thead className='border-solid border-2 text-white border-gray-500 border-spacing-2 border-orange-500 bg-orange-500 '>
                                <th className="px-6 py-2 text-center">Category ID</th>
                                <th className="px-6 py-2 text-center">Category Name</th>
                                <th className="px-6 py-2 text-center">Parent Category</th>
                                <th className="px-6 py-2 text-center "><button onClick={() => setDisplay(true)} className="text-white-400 border-white rounded-md border-solid border-2 w-16 h-8">
                                    <strong className='h-5 w-5 float-left'> {PlusIcon()} </strong>
                                    <strong>Add</strong>
                                    </button></th>
                                </thead>
                                <tbody className='divide-y-2 divide-slate-400/25 '>
                                    {
                                        category&&category.map( cate => (
                                            <tr key={cate.cate_id}>
                                                <td className="px-6 py-2 text-center">{cate.cate_id}</td>
                                                <td className="px-6 py-2 text-center">{cate.cate_name}</td>
                                                <td className="px-6 py-2 text-center">{cate.cate_cate.cate_name}</td>
                                                <td className="px-6 py-2 text-center ">
{//                                                  <button onClick={() => setDisplayEdit(true)} className='mr-3 text-green-500 '>{PencilIcon()} edit </button>
}
                                                    <button onClick={() => onClick({ cateID: cate.cate_id })} className='mr-3 text-blue-500 '>{PencilIcon()} edit </button>
                                                    <button onClick={() => toggleModal({cateID: cate.cate_id})} className='text-red-500 h-7 w-7 '>{XIcon()} Delete </button>
                                                    {modal && (
                                                        <div className="modal">
                                                        <div onClick={toggleModal} className="overlay"></div>
                                                        <div className="modal-content rounded-lg">
                                                            <h2 className='text-lg font-bold bg-slate-300 max-w-full rounded-lg'>DELETE</h2>
                                                            <p className='mt-4 mb-6'>
                                                                Are you sure want to delete this file?
                                                            </p>
                                                            <button 
                                                                onClick={toggleModal} 
                                                                className="mt-3 mb-6 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                                            Cancel
                                                            </button>
                                                            <button 
                                                            onClick={() => onDelete(id.cateID)}
                                                            className="w-full mb-6 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                                            Delete
                                                            </button>
                                                        </div>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        }
                        </>
                }
            </div>
        </div>    
        </div>
    </div>
    </>
  )
}
