import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch,useSelector } from 'react-redux';
import { GetOneProvinceRequest,EditProvinceRequest,GetCountryRequest } from '../../../../../redux-saga/actions/MasterLocation'
// import { GetCountryRequest } from '../../../../../redux-saga/actions/Country'
import {CheckIcon,XIcon} from '@heroicons/react/outline'
import * as Yup from 'yup'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function SettingLocationEdit(props) {
    const dispatch = useDispatch()
    const { province,countries } = useSelector(state => state.masterLocationState)
    const [selectedValue, setSelectedValue] = useState();
    console.log(selectedValue);
    
    useEffect(() => {
        dispatch(GetOneProvinceRequest(props.id))
        dispatch(GetCountryRequest())
        setSelectedValue(props.countryCode)
        return(selectedValue)
    }, [])
    
    const validationSchema = Yup.object().shape({
        prov_name: Yup.string("Enter Province Name").required("Province Name is required").matches(/^[aA-zZ\s]+$/, 'The input must be in alphabet'),
        prov_country_code: Yup.string("Enter Country Name").required("Country Name is required")
    });
    
    
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            prov_id:province.prov_id,
            prov_country_code:province.prov_country_code,
            prov_name: province.prov_name
        },
        validationSchema : validationSchema,
        onSubmit: async (values) => {
                const payload = {
                    prov_name: values.prov_name,
                    prov_country_code: values.prov_country_code,
                    prov_id: parseInt(province.prov_id)
                };
                dispatch(EditProvinceRequest(payload))
            
            props.closeAdd();
            window.alert('Data Succesfully Edited')
            props.onRefresh();
        }
    })

    return (
        <div className="w-full px-24">
            <div className='grid justify-items-stretch mx-12 border-2 border-slate-400 rounded-none'>
                <h1 className='font-bold p-2 border-b-2 border-slate-400 rounded-none'>Edit Province</h1>
                <div className='flex p-2'>
                    <label class="flex items-center basis-28 block text-sm font-medium text-gray-700">Province Name</label>
                    <input
                        class="flex items-stretch basis-44 -ml-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        name="prov_name"
                        id="prov_name"
                        value={formik.values.prov_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="prov_name"
                    />
                    {formik.touched.prov_name && formik.errors.prov_name ? <div className='flex items-stretch text-red-600 mt-2.5 px-6'>{formik.errors.prov_name}</div> : null}
                </div>
                

                <div className='flex p-2'>
                <label class="flex items-center basis-28 block text-sm font-medium text-gray-700">Country Name</label>
                <Autocomplete
                    id="prov_country_code"
                    name="prov_country_code"
                    options={countries}
                    getOptionLabel={option => option.country_name }
                    value={ countries.find(code=>code.country_code===selectedValue)  || {}}
                    className="flex items-stretch basis-48 -ml-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    style={{ width: 200 }}
                    onChange={(e, value) => {
                      console.log(value.country_code);
                      formik.setFieldValue(
                        "prov_country_code",
                        value !== null ? value.country_code : null
                      );
                    }}
                    
                    renderInput={params => (
                      <TextField
                        margin="normal"
                        label="Country Name"
                        fullWidth
                        name="prov_country_code"
                        onChange={formik.handleChange}
                        value={formik.values.prov_country_code}
                        {...params}
                      />
                    )}
                    />
                    {formik.touched.prov_country_code && formik.errors.prov_country_code ? <div className='flex items-stretch text-red-600 mt-7 px-2'>{formik.errors.prov_country_code}</div> : null}
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
                                <button className="m-2 flex justify-center cursor-pointer py-2 px-2 transition text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplayProvince(false)}><FontAwesomeIcon className='py-1' icon={solid('x')}/>Cancel </button>
                            </div>
                </div>
            </div>
        </div>
    )
}