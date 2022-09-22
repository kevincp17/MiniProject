import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik'
import { GetOneBatchRequestList, EditBatchListRequest, GetBatchRequestList } from '../../../redux-saga/actions/BatchListAction';

export default function EditBatch(props) {
    const dispatch = useDispatch()
    const { listOne } = useSelector(state => state.batchListState)
    const { list } = useSelector(state => state.batchListState)

    useEffect(() => {
        dispatch(GetOneBatchRequestList(props.id))
    }, [dispatch])

    useEffect(() => {
        dispatch(GetBatchRequestList())
    }, [dispatch])


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            bast_entity_id: listOne.bast_entity_id,
            bast_status: listOne.bast_status,
            bast_review: listOne.bast_review,
        },

        onSubmit: async (values) => {
            const payload = {
                bast_entity_id: parseInt(listOne.bast_entity_id),
                user_first_name: values.user_first_name,
                user_last_name : values.user_last_name,
                bast_status: values.bast_status,
                bast_review: values.bast_review,

            }
            dispatch(EditBatchListRequest(payload))

            props.closeEdit();
            window.alert('Data Berhasil DiUbah')
            props.onRefresh();
        }
    })

    return (
        <div>
        <div id='popup' classname='w-full' >
            {/* <div className='mx-auto overflow-hidden shadow-2xl h-full py-3 bg-slate-100' style={{ width: "290px", height: "200px", marginTop: "200px" }}> */}
            <div className='mx-2 my-2'>
                <div className='font-medium text-lg'>
                     Status
                    <hr className='border-1 border-gray-400	mt-1' />
                </div>
                <br />
                <div className='flex align-items-center font-medium'>
                    <div className='my-auto'>
                        Information
                    </div>
                </div>
                <br />
                <div className='flex align-items-center justify-between mt-3'>
                    <div className='my-auto mr-2'>
                        Status
                    </div>
                    <select
                        className="rounded w-3/4"
                        name="bast_status"
                        id="bast_status"
                        value={formik.values.bast_status}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="bast_status"
                    >
            
                        <option value="Running">Running</option>
                        <option value="Stop">Stop</option>
                
                    </select>
                </div>
                <div className='mt-3'>
                    <span className='block mb-1'>Review</span>
                    <textarea
                        className='w-full rounded'
                        name="bast_review"
                        id="bast_review"
                        value={formik.values.bast_review}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="bast_review"
                    />
                    {formik.touched.bast_review && formik.errors.bast_review ? <span className="mt-2 text-sm text-red-600">{formik.errors.bast_review}</span> : null}
                </div>
            </div>
            <div className='text-center'>
                <button className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplay(false)}> Cancel </button>
                <button type='submit' className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={formik.handleSubmit}> Simpan </button>
            </div>
        </div>
    </div>
)
}