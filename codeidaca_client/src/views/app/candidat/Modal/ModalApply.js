import React, { useState, useEffect, Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Dialog, Transition } from "@headlessui/react";
import { BiDotsVertical } from 'react-icons/bi';
import { GetOneCandidateRequest, EditCandidateRequest } from '../../../../redux-saga/actions/CandidateAction';

export default function CandidatModal(props) {
    const dispatch = useDispatch()
    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [id, setId] = useState()

    const { candidate } = useSelector(state => state.candidateStated)

    useEffect(() => {
        dispatch(GetOneCandidateRequest(props.id))
    }, [])

    // const formik = useFormik({
    //     enableReinitialize: true,
    //     initialValues: {
    //         user_first_name: candidate.user_first_name,
    //         user_last_name: candidate.user_last_name,
    //         boap_status: candidate.boap_status
    //     },
    //     validationSchema: Yup.object({
    //         user_first_name: Yup.string("Enter Firstname"),
    //         user_last_name: Yup.string("Enter Lastname"),
    //         boap_status: Yup.string("Enter Status")
    //     }),
    //     onSubmit: async (values) => {
    //         const payload = {
    //             user_first_name: values.user_first_name,
    //             user_last_name: values.user_last_name,
    //             boap_status: values.boap_status
    //         }
    //         dispatch(EditCandidateRequest(payload))
    //         props.closeEdit();
    //         window.alert('Data Succesfully Edited')
    //         props.onRefresh();
    //     }
    // })
    const onClick = (boapID) => {
        setOpen(true)
        setId(boapID)
    }


    return (
        <div>
            <button
                type="button"
                className="order-0  items-center  border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                onClick={() => onClick()}
            >
                <BiDotsVertical />
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex font-medium">
                                        Switch Status
                                    </div>
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                                <div className="mt-2">
                                                    <form>
                                                        <label class="pr-4">
                                                            Set Status
                                                        </label>
                                                        <input
                                                            className="input p-2 border-2 rounded autoFocus "
                                                            placeholder="Ready Test"
                                                        />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen(false)}
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}