import React, { useState, useEffect, Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { GetOneCandidateRequest, EditCandidateRequest } from '../../../redux-saga/actions/CandidateAction';
import './popup.css'

export default function EditCandidatFiltering(props) {
    const dispatch = useDispatch()
    const { candidate } = useSelector(state => state.candidateStated)

    useEffect(() => {
        dispatch(GetOneCandidateRequest(props.id))
    }, [])

    useEffect(() => {
        console.log(candidate)
    }, [candidate])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            user_first_name: candidate.user_first_name,
            user_last_name: candidate.user_last_name,
            boap_total_skor: candidate.boap_total_skor,
            boap_status: candidate.boap_status,
            boap_review: candidate.boap_review,
        },
        // validationSchema: Yup.object({
        //     boap_total_skor: Yup.string("Enter Skor"),
        //     boap_status: Yup.string("Enter Status").required("Firstname is required"),
        //     boap_review: Yup.string("Enter Review")
        // }),
        validationSchema: Yup.object().shape({
            boap_review: Yup.string("Enter review").required("review required"),
        }),
        onSubmit: async (values) => {
            const payload = {
                boap_entity_id: parseInt(candidate.user_entity_id),
                boap_total_skor: values.boap_total_skor,
                boap_status: values.boap_status,
                boap_review: values.boap_review,
            }
            dispatch(EditCandidateRequest(payload))
            // console.log('ini payload')
            // console.log(EditCandidateRequest(payload))
            props.closeEdit();
            window.alert('Data berhasil diubah')
            props.onRefresh();
        }
    })

    return (
        <div>
            <div id='popup' classname='w-full' >
                {/* <div className='mx-auto overflow-hidden shadow-2xl h-full py-3 bg-slate-100' style={{ width: "290px", height: "200px", marginTop: "200px" }}> */}
                <div className='mx-2 my-2'>
                    <div className='font-medium text-lg'>
                        Switch Status
                        <hr className='border-1 border-gray-400	mt-1' />
                    </div>
                    <br />
                    <div className='flex align-items-center font-medium'>
                        <div className='my-auto'>
                            Kandidat {formik.values.user_first_name} {formik.values.user_last_name}
                        </div>
                    </div>
                    <br />
                    <div className='flex justify-between'>
                        <span className='my-auto'>
                            Score Filtering Test
                        </span>
                        <input
                            className="rounded w-[72px]"
                            type="number"
                            name="boap_total_skor"
                            id="boap_total_skor"
                            value={formik.values.boap_total_skor}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="boap_total_skor"
                        />
                    </div>
                    <div className='flex align-items-center justify-between mt-3'>
                        <div className='my-auto mr-2'>
                            Status
                        </div>
                        <select
                            className="rounded w-3/4"
                            name="boap_status"
                            id="boap_status"
                            value={formik.values.boap_status}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="boap_status"
                        >
                            <option value="apply">Apply</option>
                            <option value="ready test">Ready Test</option>
                            <option value="passed">Passed</option>
                            <option value="recommended">Recommended</option>
                            <option value="contracted">Contracted</option>
                            <option value="failed">Failed</option>
                            <option value="not responding">Not responding</option>
                        </select>
                    </div>
                    {/* {formik.touched.boap_status && formik.errors.boap_status ? <span className="mt-2 text-sm text-red-600">{formik.errors.boap_status}</span> : null} */}
                    <div className='mt-3'>
                        <span className='block mb-1'>Review</span>
                        <textarea
                            className='w-full rounded'
                            name="boap_review"
                            id="boap_review"
                            value={formik.values.boap_review}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="boap_review"
                        />
                        {formik.touched.boap_review && formik.errors.boap_review ? <span className="mt-2 text-sm text-red-600">{formik.errors.boap_review}</span> : null}
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