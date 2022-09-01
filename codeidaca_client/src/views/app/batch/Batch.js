import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetBatchRequest } from '../../../redux-saga/actions/Test'
import { GetBatchRequestList } from '../../../redux-saga/actions/BatchListAction'
import EditBatch from './EditBatch'

export default function Batch() {
    const { list } = useSelector(state => state.batchListState)
    const { batchs } = useSelector(state => state.batchState)
    const dispatch = useDispatch()
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState()


    useEffect(() => {
        dispatch(GetBatchRequest())
        setRefresh(false)
    }, [refresh])

    useEffect(() => {
        dispatch(GetBatchRequestList())
        setRefresh(false)
    }, [refresh])

    const onClick = (empID) => {
        setDisplayEdit(true)
        setId(empID)
    }


    return (
        <div>
            {
                displayEdit ?
                    <EditBatch
                        closeEdit={() => setDisplayEdit(false)}
                        onRefresh={() => setRefresh(true)}
                        id={id}
                        setDisplay={setDisplayEdit} />
                    :
                    <>
                        <div>
                            <div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                                <div class="container flex flex-wrap justify-between items-center mx-auto">
                                    <a href="http://localhost:3000/" class="flex items-center">
                                        <img src="/assets/images/codeid.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />

                                        {
                                            batchs && batchs.map(batchs => {
                                                return (
                                                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> {batchs.batch_name} {batchs.prog_type} {batchs.prog_title}</span>

                                                )
                                            })
                                        }
                                    </a>
                                </div>
                            </div>
                        </div>


                        {
                            list && list.map(isi => {
                                return (
                                    <div class='m-10 inline-flex'>
                                        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white">
                                            <a href="#">
                                                <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                                            </a>
                                            <div class="p-5">

                                                <div>
                                                    <label class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{isi.user_first_name} {isi.user_last_name}</label>
                                                </div>
                                                
                                                <div>
                                                    <label className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>Status : {isi.bast_status} </label>
                                                </div>

                                                <div>
                                                    <label className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>Total Score : {isi.bast_total_score} </label>
                                                </div>
                                                
                                                    <label className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'> {isi.bast_review} </label>
            
                                                <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClick(isi.user_entity_id)}>Edit</button>

                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </>
            }
        </div>
    )
}
