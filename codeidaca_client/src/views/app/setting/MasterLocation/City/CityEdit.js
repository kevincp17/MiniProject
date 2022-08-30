import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch,useSelector } from 'react-redux';
import { GetOneCityRequest,EditCityRequest,GetProvinceRequest } from '../../../../../redux-saga/actions/MasterLocation'
import {CheckIcon,XIcon} from '@heroicons/react/outline'
import * as Yup from 'yup'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function SettingLocationEdit(props) {
    const dispatch = useDispatch()
    const { city,provinces } = useSelector(state => state.masterLocationState)
    const [selectedValue, setSelectedValue] = useState();
    console.log(selectedValue);
    
    useEffect(() => {
        dispatch(GetOneCityRequest(props.id))
        dispatch(GetProvinceRequest())
        setSelectedValue(props.ProvID)
        return(selectedValue)
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            city_id:city.city_id,
            city_name:city.city_name,
            city_prov_id: city.city_prov_id
        },

        onSubmit: async (values) => {
                const payload = {
                    city_name: values.city_name,
                    city_prov_id: values.city_prov_id,
                    city_id: parseInt(city.city_id)
                };
                dispatch(EditCityRequest(payload))
            
            props.closeAdd();
            window.alert('Data Succesfully Edited')
            props.onRefresh();
        }
    })

    return (
        <div className="w-full px-24">
            <div className='grid justify-items-stretch mx-12 border-2 border-slate-400 rounded-none'>
                <h1 className='font-bold p-2 border-b-2 border-gray-300 rounded-none'>Edit City</h1>
            <div className='flex p-2'>
                <label class="flex items-center basis-28 block text-sm font-medium text-gray-700">City Name</label>
                <input
                    class="flex items-stretch basis-44 -ml-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="city_name"
                    id="city_name"
                    value={formik.values.city_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="city_name"
                />
            </div>
                

            <div className='flex p-2'>
                <label class="flex items-center basis-28 block text-sm font-medium text-gray-700">Province Name</label>
                <Autocomplete
                    id="city_prov_id"
                    name="city_prov_id"
                    options={provinces}
                    getOptionLabel={option => option.prov_name}
                    value={ provinces.find(prov=>prov.prov_name===selectedValue)  || {}}
                    className="flex items-stretch basis-48 -ml-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    style={{ width: 200 }}
                    onChange={(e, value) => {
                      console.log(value.prov_id);
                      formik.setFieldValue(
                        "city_prov_id",
                        value !== null ? value.prov_id : null
                      );
                    }}
                    
                    renderInput={params => (
                      <TextField
                        margin="normal"
                        label="Province Name"
                        fullWidth
                        name="city_prov_id"
                        onChange={formik.handleChange}
                        value={formik.values.city_prov_id}
                        {...params}
                      />
                    )}
                    />
            </div>
            
            <div className='grid grid-cols-7 bg-slate-200 text-base'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className='p-2'>
                                <button type='submit' className="m-2 flex justify-center cursor-pointer py-2 px-2 transition text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={formik.handleSubmit}><FontAwesomeIcon className='py-1' icon={solid('check')}/>Simpan </button>
                            </div>

                            <div className='p-2'>
                                <button className="m-2 flex justify-center cursor-pointer py-2 px-2 transition text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplayCity(false)}><FontAwesomeIcon className='py-1' icon={solid('x')}/>Cancel </button>
                            </div>
                    
                    
            </div> 

            </div>
        </div>
    )
}