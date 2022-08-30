import React, { useState, useEffect,useCallback } from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import {GetAddressTypeRequest,GetCountryRequest,GetProvinceRequest,GetCityRequest,DelAddressTypeRequest,DelCountryRequest,DelProvinceRequest,DelCityRequest} from '../../../../redux-saga/actions/MasterLocation'
import LocationAdd from './Location/LocationAdd'
import LocationEdit from './Location/LocationEdit'
import CountryAdd from './Country/CountryAdd'
import CountryEdit from './Country/CountryEdit'
import ProvinceAdd from './Province/ProvinceAdd'
import ProvinceEdit from './Province/ProvinceEdit'
import CityAdd from './City/CityAdd'
import CityEdit from './City/CityEdit'
import { IdentificationIcon,UserIcon,MailIcon,PhoneIcon,CalendarIcon,PhotographIcon,ViewListIcon,PencilAltIcon,TrashIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function SettingLocation() {
    const [displayLocation, setDisplayLocation] = useState(false)
    const [displayEditLocation, setDisplayEditLocation] = useState(false)

    const [displayCountry, setDisplayCountry] = useState(false)
    const [displayEditCountry, setDisplayEditCountry] = useState(false)

    const [displayProvince, setDisplayProvince] = useState(false)
    const [displayEditProvince, setDisplayEditProvince] = useState(false)

    const [displayCity, setDisplayCity] = useState(false)
    const [displayEditCity, setDisplayEditCity] = useState(false)

    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState()
    const [countryCode, setCountryCode] = useState()
    const [ProvID, setProvID] = useState()
    const {address_types,countries,provinces,cities} = useSelector(state => state.masterLocationState)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAddressTypeRequest());
        dispatch(GetCountryRequest());
        dispatch(GetProvinceRequest());
        dispatch(GetCityRequest());
        setRefresh(false)
    }, [refresh])

    const onDeleteLocation = async (id) =>{
        dispatch(DelAddressTypeRequest(id))
        setRefresh(true)
    }

    const onClickLocation = (adtyID) => {
        setDisplayEditLocation(true)
        setId(adtyID)
    }

    const onDeleteCountry = async (id) =>{
        dispatch(DelCountryRequest(id))
        setRefresh(true)
    }

    const onClickCountry = (countID) => {
        setDisplayEditCountry(true)
        setId(countID)
    }

    const onDeleteProvince = async (id) =>{
        dispatch(DelProvinceRequest(id))
        setRefresh(true)
    }

    const onClickProvince = (provID,provCountryCode) => {
        setDisplayEditProvince(true)
        setId(provID)
        setCountryCode(provCountryCode)
    }

    const onDeleteCity = async (id) =>{
        dispatch(DelCityRequest(id))
        setRefresh(true)
    }

    const onClickCity = (cityID,ProvID) => {
        setDisplayEditCity(true)
        setId(cityID)
        setProvID(ProvID)
    }

    return (
        <div className='justify-center w-full space-y-12 '>
            <div className="relative rounded-lg">
                {
                    displayEditLocation
                    ?
                    <LocationEdit
                        closeAdd={() => setDisplayEditLocation(false)}
                        onRefresh={() => setRefresh(true)}
                        id={id}
                        setDisplayLocation={setDisplayEditLocation}
                    />
                    :
                    displayLocation ?
                        <LocationAdd
                            setDisplayLocation={setDisplayLocation}
                            closeAdd={() => setDisplayLocation(false)}
                            onRefresh={() => setRefresh(true)}
                        />
                        :
                <>
                <div className='grid justify-items-stretch px-36'>
                        <h1 className='font-bold p-2 border-t-2 border-r-2 border-l-2 border-slate-400 rounded-none'>Address Type</h1>
                        <table className="divide-x border-2 border-slate-400 rounded-md">
                            <thead className='bg-slate-200'>
                                <tr>
                                    <th scope="col" className="px-9 py-3 text-sm">Address Type</th>
                                    
                                    <th scope="col" className="px-9 py-3 text-sm">
                                        <button type="button" className="transition text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 cursor-pointer border px-4 py-1 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplayLocation(true)}><FontAwesomeIcon icon={solid('plus')}/>Add</button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    address_types && address_types.map(adty => {
                                        return (
                                            <tr key={adty.adty_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{adty.adty_name}</td>
                                                <td className='flex space-x-4 text-base py-2 px-2 justify-center'>
                                                    <div>
                                                        <button type="button" className="transition text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClickLocation(adty.adty_id)}><FontAwesomeIcon icon={solid('pen-to-square')}/>Edit</button>
                                                    </div>
                                                    
                                                    <div>
                                                        <button type="button" className="transition text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDeleteLocation(adty.adty_id)}><FontAwesomeIcon icon={solid('x')}/>Delete</button>
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

            <div className="relative py-5">
                {
                    displayEditCountry
                    ?
                    <CountryEdit
                        closeAdd={() => setDisplayEditCountry(false)}
                        onRefresh={() => setRefresh(true)}
                        id={id}
                        setDisplayCountry={setDisplayEditCountry}
                    />
                    :
                    displayCountry ?
                        <CountryAdd
                            setDisplayCountry={setDisplayCountry}
                            closeAdd={() => setDisplayCountry(false)}
                            onRefresh={() => setRefresh(true)}
                        />
                        :
                <>
                
                <div className='grid justify-items-stretch px-36'> 
                    <h1 className='font-bold p-2 border-t-2 border-r-2 border-l-2 border-slate-400 rounded-none'>Country</h1>
                    <table className="border-2 border-slate-400 divide-x">
                        <thead className='bg-slate-200'>
                            <tr>
                            <th scope="col" className="px-9 py-3 text-sm">Country Code</th>
                                <th scope="col" className="px-9 py-3 text-sm">Country Name</th>
                                <th scope="col" className="px-9 py-3 text-sm">
                                    <button type="button" className="transition text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 cursor-pointer border px-4 py-1 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplayCountry(true)}><FontAwesomeIcon icon={solid('plus')}/>Add</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                countries && countries.map(count => {
                                    return (
                                        <tr key={count.country_code} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{count.country_code}</td>
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{count.country_name}</td>
                                            <td className='flex space-x-4 text-base py-2 px-2 justify-center'>
                                                <div>
                                                    <button type="button" className="transition text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClickCountry(count.country_code)}><FontAwesomeIcon icon={solid('pen-to-square')}/>Edit</button>
                                                </div>
                                                
                                                <div>
                                                    <button type="button" className="transition text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDeleteCountry(count.country_code)}><FontAwesomeIcon icon={solid('x')}/>Delete</button>
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

            <div className="relative py-5">
                {
                    displayEditProvince
                    ?
                    <ProvinceEdit
                        closeAdd={() => setDisplayEditProvince(false)}
                        onRefresh={() => setRefresh(true)}
                        id={id}
                        countryCode={countryCode}
                        setDisplayProvince={setDisplayEditProvince}
                    />
                    :
                    displayProvince ?
                        <ProvinceAdd
                            setDisplayProvince={setDisplayProvince}
                            closeAdd={() => setDisplayProvince(false)}
                            onRefresh={() => setRefresh(true)}
                        />
                        :
                <>
                
                <div className='grid justify-items-stretch px-36'> 
                    <h1 className='font-bold p-2 border-t-2 border-r-2 border-l-2 border-slate-400 rounded-none'>Province</h1>
                    <table className="border-2 border-slate-400">
                        <thead className='bg-slate-200'>
                            <tr>
                            <th scope="col" className="px-9 py-3 text-sm">Province Name</th>
                                <th scope="col" className="px-9 py-3 text-sm">Country Code</th>
                                <th scope="col" className="px-9 py-3 text-sm">
                                    <button type="button" className="transition text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 cursor-pointer border px-4 py-1 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplayProvince(true)}><FontAwesomeIcon icon={solid('plus')}/>Add</button>
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
                                                    <button type="button" className="transition text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClickProvince(prov.prov_id,prov.prov_country_code)}><FontAwesomeIcon icon={solid('pen-to-square')}/>Edit</button>
                                                </div>
                                                
                                                <div>
                                                    <button type="button" className="transition text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDeleteProvince(prov.prov_id)}><FontAwesomeIcon icon={solid('x')}/>Delete</button>
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

            <div className="relative py-5">
                {
                    displayEditCity
                    ?
                    <CityEdit
                        closeAdd={() => setDisplayEditCity(false)}
                        onRefresh={() => setRefresh(true)}
                        id={id}
                        setDisplayCity={setDisplayEditCity}
                        ProvID={ProvID}
                    />
                    :
                    displayCity ?
                        <CityAdd
                        setDisplayCity={setDisplayCity}
                            closeAdd={() => setDisplayCity(false)}
                            onRefresh={() => setRefresh(true)}
                        />
                        :
                <>
                
                <div className='grid justify-items-stretch px-36'> 
                    <h1 className='font-bold p-2 border-t-2 border-r-2 border-l-2 border-slate-400 rounded-none'>City</h1>
                    <table className="border-2 border-slate-400">
                        <thead className='bg-slate-200'>
                            <tr>
                                <th scope="col" className="px-9 py-3 text-sm">City Name</th>
                                <th scope="col" className="px-9 py-3 text-sm">Province</th>
                                <th scope="col" className="px-9 py-3 text-sm">
                                    <button type="button" className="transition text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 cursor-pointer border px-4 py-1 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplayCity(true)}><FontAwesomeIcon icon={solid('plus')}/>Add</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cities && cities.map(city => {
                                    return (
                                        <tr key={city.city_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{city.city_name}</td>
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{city.city_prov.prov_name}</td>
                                            <td className='flex space-x-4 text-base py-2 px-2 justify-center'>
                                                <div>
                                                    <button type="button" className="transition text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClickCity(city.city_id,city.city_prov.prov_name)}><FontAwesomeIcon icon={solid('pen-to-square')}/>Edit</button>
                                                </div>
                                                
                                                <div>
                                                    <button type="button" className="transition text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDeleteCity(city.city_id)}><FontAwesomeIcon icon={solid('x')}/>Delete</button>
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