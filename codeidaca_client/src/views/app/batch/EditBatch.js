import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik'
import { GetOneBatchRequestList, EditBatchListRequest } from '../../../redux-saga/actions/BatchEvalutionListAction';

export default function EditBatch(props) {
    const dispatch = useDispatch()
    const [batch, setBatch] = useState([])
    const [refresh, setRefresh] = useState(false)
    const { listOne } = useSelector(state => state.batchListState)
    const { list } = useSelector(state => state.batchListState)


    useEffect(() => {
        dispatch(GetOneBatchRequestList(props.id))
    }, [])
    useEffect(() => {
        console.log('isi listone')
        console.log(listOne)
    }, [listOne])

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
                bast_status: values.bast_status,
                bast_review: values.bast_review,

            }
            dispatch(EditBatchListRequest(payload))
            console.log('ini payload')
            console.log(EditBatchListRequest(payload))
            props.closeEdit();
            window.alert('Data Succesfully Edited')
            props.onRefresh();
        }
    })
    
    return (
        <div>
            <div className='mx-auto overflow-hidden shadow-2xl h-full py-3 bg-slate-100' style={{ width: "290px", height: "200px", marginTop: "200px" }}>
                <div className='mx-2 my-2'>

                <div className='flex align-items-center'>
                    <div className='my-auto mr-2'>
                            
                        </div>
                        <label
                            className="mt-1 ml-1 focus:ring-indigo-500 focus:border-indigo-500 block w-4/5 shadow-sm sm:text-sm border-gray-300 rounded-md "
                            type="text"
                            name="bast_review"
                            id="bast_review"
                            value={formik.values.bast_review}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="bast_review"
                        />
                    </div>

                    <div className='flex align-items-center'>
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
                            <option value="Stop">Stop</option>
                            <option value="Running">Running</option>
                        </select>
                    </div>
                    <div className='flex align-items-center'>
                        <div className='my-auto mr-2'>
                            Review
                        </div>
                        <input
                            className="mt-1 ml-1 focus:ring-indigo-500 focus:border-indigo-500 block w-4/5 shadow-sm sm:text-sm border-gray-300 rounded-md "
                            type="text"
                            name="bast_review"
                            id="bast_review"
                            value={formik.values.bast_review}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="bast_review"
                        />
                    </div>
                </div>
                <div className='text-center'>
                    <button type='submit' className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={formik.handleSubmit}> Simpan </button>
                    <button className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplay(false)}> Cancel </button>
                </div>
            </div>
        </div>
    )
}

