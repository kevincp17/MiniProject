import React, { useState } from 'react'
import { useFormik, validateYupSchema } from 'formik'
import { useDispatch } from 'react-redux'
import { AddCountryRequest } from '../../../../../redux-saga/actions/Country'
import {CheckIcon,XIcon} from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import * as Yup from 'yup'

export default function SettingLocationAdd(props) {
    const dispatch = useDispatch()

    const validationSchema = Yup.object().shape({
        country_code: Yup.string("Enter Country Code").required("Country code is required").max(3,"The input must not be greater than 3 characters").matches(/^[A-Z]+$/, 'The input must be in capitalize alphabet'),
        country_name: Yup.string("Enter Country Name").required("Country name is required").matches(/^[aA-zZ\s]+$/, 'The input must be in alphabet'),
    });

    const formik = useFormik({
        initialValues: {
            country_code: '',
            country_name: '',
        },
        validationSchema:validationSchema,
        onSubmit: async (values) => {
            const payload = {
                country_code: values.country_code,
                country_name: values.country_name,
            };
            
            dispatch(AddCountryRequest(payload))
            props.closeAdd();
            window.alert('Data Succesfully Insert')
            props.onRefresh();
        }
    })
    
    return (
        <div className="w-full px-24">
            <div className='grid justify-items-stretch mx-12 border-2 border-slate-400 rounded-none'>
            <h1 className='font-bold p-2 border-b-2 border-slate-400 rounded-none'>Add Country</h1>
            <div className='flex p-2'>
                <div className="flex items-center basis-24">
                    <label className="block text-sm font-medium text-gray-700">Country Code</label>
                </div>

                <div className='flex items-stretch basis-28'>
                    <input
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        name="country_code"
                        id="country_code"
                        value={formik.values.country_code}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="country_code"
                    />
                </div>

                <div className='text-sm mt-3.5 px-1'>(3-alphabet characters)</div>
                {formik.touched.country_code && formik.errors.country_code ? <div className='flex items-stretch text-red-600 mt-3'>{formik.errors.country_code}</div> : null}
            </div>

            <div className='flex p-2'>
                <label class="flex items-center block text-sm font-medium text-gray-700 basis-24">Country Name</label>
                <input
                    class="flex basis-64 items-stretch -pl-24 p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="country_name"
                    id="country_name"
                    value={formik.values.country_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="country_name"
                />
                {formik.touched.country_name && formik.errors.country_name ? <div className='flex items-stretch text-red-600 mt-3 px-2'>{formik.errors.country_name}</div> : null}
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
                                <button className="m-2 flex justify-center cursor-pointer py-2 px-2 transition text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplayCountry(false)}><FontAwesomeIcon className='py-1' icon={solid('x')}/>Cancel </button>
                            </div>     
            </div>
        </div>
        </div>
        
    )
}