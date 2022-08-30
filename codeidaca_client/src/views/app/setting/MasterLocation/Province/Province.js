import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetProvinceRequest,DelProvinceRequest } from '../../../../../redux-saga/actions/Province'
import ProvinceAdd from './ProvinceAdd'
import ProvinceEdit from './ProvinceEdit'
import { IdentificationIcon,UserIcon,MailIcon,PhoneIcon,CalendarIcon,PhotographIcon,ViewListIcon,PencilAltIcon,TrashIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Country() {
    const dispatch = useDispatch()
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState()
    const {provinces} = useSelector(state => state.provinceState)
    
    useEffect(() => {
        dispatch(GetProvinceRequest())
        setRefresh(false)
    }, [refresh])

    const onDelete = async (id) =>{
        dispatch(DelProvinceRequest(id))
        setRefresh(true)
    }

    const onClick = (provID) => {
        setDisplayEdit(true)
        setId(provID)
    }

    return (
        <div className='justify-center'>
            <div className="relative shadow-md sm:rounded-lg">
                {
                    displayEdit
                    ?
                    <ProvinceEdit
                        closeAdd={() => setDisplayEdit(false)}
                        onRefresh={() => setRefresh(true)}
                        id={id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display ?
                        <ProvinceAdd
                            setDisplay={setDisplay}
                            closeAdd={() => setDisplay(false)}
                            onRefresh={() => setRefresh(true)}
                        />
                        :
                <>
                
                <div className='grid justify-items-stretch px-36'> 
                    <h1 className='font-bold'>Province</h1>
                    <table className="table-auto">
                        <thead>
                            <tr>
                            <th scope="col" className="px-9 py-3 text-sm">Province Name</th>
                                <th scope="col" className="px-9 py-3 text-sm">Country Code</th>
                                <th scope="col" className="px-9 py-3 text-sm">
                                    <button type="button" className="cursor-pointer border px-4 py-1 text-base border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}><FontAwesomeIcon icon={solid('plus')}/>Add</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                provinces && provinces.map(prov => {
                                    return (
                                        <tr key={prov.prov_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{prov.prov_name}</td>
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{prov.prov_country_code}</td>
                                            <td className='flex space-x-4 text-base py-2 px-2 justify-center'>
                                                <div>
                                                    <button type="button" className="cursor-pointer py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClick(prov.prov_id)}><FontAwesomeIcon icon={solid('pen-to-square')}/>Edit</button>
                                                </div>
                                                
                                                <div>
                                                    <button type="button" className="cursor-pointer py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDelete(prov.prov_id)}><FontAwesomeIcon icon={solid('x')}/>Delete</button>
                                                </div>
                                            </td>                                     
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                </>
                }
            </div>
        </div>
    )
}