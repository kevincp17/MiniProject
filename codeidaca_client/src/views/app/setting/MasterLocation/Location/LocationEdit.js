import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch,useSelector } from 'react-redux';
import { GetOneAddressTypeRequest,EditAddressTypeRequest } from '../../../../../redux-saga/actions/MasterLocation'
import {CheckIcon,XIcon} from '@heroicons/react/outline'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function SettingLocationEdit(props) {
    const dispatch = useDispatch()
    const { address_type } = useSelector(state => state.addressTypeState)
    
    useEffect(() => {
        dispatch(GetOneAddressTypeRequest(props.id))
    }, [])

    const validationSchema = Yup.object().shape({
        adty_name: Yup.string("Enter Address Type").required("Address Type is required").max(15,"The input must not be greater than 15 characters")
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            adty_id:address_type.adty_id,
            adty_name: address_type.adty_name
        },
        validationSchema:validationSchema,
        onSubmit: async (values) => {
                const payload = {
                    adty_name: values.adty_name,
                    adty_id: parseInt(address_type.adty_id)
                };
                dispatch(EditAddressTypeRequest(payload))
            
            props.closeAdd();
            window.alert('Data Succesfully Edited')
            props.onRefresh();
        }
    })

    return (
        <div className="w-full px-24">
            <div className='grid justify-items-stretch mx-12 border-2 border-slate-400 rounded-none'>
                <div className='p-2 border-b-2 border-slate-400 rounded-none'>
                    <h1 className='font-bold'>Edit Address Type</h1>
                </div>

                <div className='flex p-2'>
                    <div className='flex items-center '>
                        <label class="block text-sm font-medium text-gray-700">Address Type</label>
                    </div>

                    <div className='flex items-stretch p-2'>
                        <input
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        name="adty_name"
                        id="adty_name"
                        value={formik.values.adty_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="adty_name"
                        />
                        
                    </div>
                    {formik.touched.adty_name && formik.errors.adty_name ? <div className='flex items-stretch text-red-600 mt-4'>{formik.errors.adty_name}</div> : null}
                </div> 

                <div className='grid grid-cols-7 bg-slate-200 text-base'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                    <div className='p-2'>
                        <button type='submit' className="flex justify-center cursor-pointer py-2 px-2 transition text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={formik.handleSubmit}><FontAwesomeIcon className='py-1' icon={solid('check')}/>Simpan </button>
                    </div>

                    <div className='p-2'>
                        <button className="flex justify-center cursor-pointer py-2 px-2 transition text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplayLocation(false)}><FontAwesomeIcon className='py-1' icon={solid('x')}/>Cancel </button>
                    </div>
                </div>
            </div>
        </div>
    )
}