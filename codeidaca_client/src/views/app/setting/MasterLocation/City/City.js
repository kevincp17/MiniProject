import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetCityRequest,DelCityRequest } from '../../../../../redux-saga/actions/City'
import CityAdd from './CityAdd'
import CityEdit from './CityEdit'
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
    const {cities} = useSelector(state => state.cityState)
    
    useEffect(() => {
        dispatch(GetCityRequest())
        setRefresh(false)
    }, [refresh])

    const onDelete = async (id) =>{
        dispatch(DelCityRequest(id))
        setRefresh(true)
    }

    const onClick = (cityID) => {
        setDisplayEdit(true)
        setId(cityID)
    }

    return (
        <div className='justify-center'>
            <div className="relative shadow-md sm:rounded-lg">
                {
                    displayEdit
                    ?
                    <CityEdit
                        closeAdd={() => setDisplayEdit(false)}
                        onRefresh={() => setRefresh(true)}
                        id={id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display ?
                        <CityAdd
                            setDisplay={setDisplay}
                            closeAdd={() => setDisplay(false)}
                            onRefresh={() => setRefresh(true)}
                        />
                        :
                <>
                
                <div className='grid justify-items-stretch px-36'> 
                    <h1 className='font-bold'>City</h1>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th scope="col" className="px-9 py-3 text-sm">City Name</th>
                                <th scope="col" className="px-9 py-3 text-sm">Province</th>
                                <th scope="col" className="px-9 py-3 text-sm">
                                    <button type="button" className="cursor-pointer border px-4 py-1 text-base border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}><FontAwesomeIcon icon={solid('plus')}/>Add</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cities && cities.map(city => {
                                    return (
                                        <tr key={city.city_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{city.city_name}</td>
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{city.city_prov_id}</td>
                                            <td className='flex space-x-4 text-base py-2 px-2 justify-center'>
                                                <div>
                                                    <button type="button" className="cursor-pointer py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClick(city.city_id)}><FontAwesomeIcon icon={solid('pen-to-square')}/>Edit</button>
                                                </div>
                                                
                                                <div>
                                                    <button type="button" className="cursor-pointer py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDelete(city.city_id)}><FontAwesomeIcon icon={solid('x')}/>Delete</button>
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