import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCandidateRequest } from '../../../redux-saga/actions/CandidateAction'
import { GetCandidateRequestFiltering } from '../../../redux-saga/actions/CandidateFilteringAction'
import config from '../../../config/config'
import TabView from './TabView/TabView'
import { BiDotsVertical } from 'react-icons/bi'

export default function Candidat() {
    const dispatch = useDispatch()
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState()
    const { candidates } = useSelector(state => state.candidateStated)
    const { candidatesfiltering } = useSelector(state => state.candidateFilteringStated)

    useEffect(() => {
        dispatch(GetCandidateRequest())
        dispatch(GetCandidateRequestFiltering())
        // setRefresh(false)
    }, [])
    return (
        <div>
            <TabView
                title={"Candidat"}
                tabs={[
                    {
                        name: "Apply", content:
                            <div>
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    {
                                        <>
                                            <h1 className='font-bold'>List of Candidates</h1>
                                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed table-auto">
                                                <tbody className="overscroll-auto md:overscroll-contain">
                                                    {
                                                        candidates && candidates.map((can, index) => {
                                                            return (
                                                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                    <td><img className="w-2/6 py-3 mx-auto" src={config.domain + '/candidate/file/' + can.user_photo} alt={can.user_first_name} /></td>
                                                                    <td className="px-6 py-2">{can.user_first_name} {can.user_last_name} <br /> {can.pmail_address}</td>
                                                                    <td className="px-6 py-2">{can.uspo_number}</td>
                                                                    <td className="px-6 py-2">{can.prog_title}</td>
                                                                    <td className="px-6 py-2">{can.batch_start_date} <br /> {can.boap_status}</td>
                                                                    <td className="px-6 py-2"><BiDotsVertical /></td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </>
                                    }
                                </div>
                            </div>
                    },
                    {
                        name: "Filtering Test", content:
                            <div>
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    {
                                        <>
                                            <h1 className='font-bold'>List of Candidates</h1>
                                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed table-auto">
                                                <tbody className="overscroll-auto md:overscroll-contain">
                                                    {
                                                        candidatesfiltering && candidatesfiltering.map((can, index) => {
                                                            return (
                                                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                    <td><img className="w-2/6 py-3 mx-auto" src={config.domain + '/candidate/file/' + can.user_photo} alt={can.user_first_name} /></td>
                                                                    <td className="px-6 py-2">{can.user_first_name} {can.user_last_name} <br /> {can.pmail_address}</td>
                                                                    <td className="px-6 py-2">{can.uspo_number}</td>
                                                                    <td className="px-6 py-2">{can.prog_title}</td>
                                                                    <td className="px-6 py-2">{can.batch_start_date} <br /> {can.boap_status}</td>
                                                                    <td className="px-6 py-2"><BiDotsVertical /></td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </>
                                    }
                                </div>
                            </div>
                    },
                    { name: "Contract", },
                    { name: "Discualified", },
                    { name: "Not Responding", },
                ]}
            />
        </div>
    )
}
