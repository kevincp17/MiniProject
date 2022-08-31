import React, { useState, useEffect, Fragment, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCandidateRequest } from '../../../redux-saga/actions/CandidateAction'
import { GetCandidateRequestFiltering } from '../../../redux-saga/actions/CandidateFilteringAction'
import { GetCandidateRequestContracted } from '../../../redux-saga/actions/CandidateContractedAction'
import { GetCandidateRequestDisqulified } from '../../../redux-saga/actions/CandidateDisqualifiedAction'
import { GetCandidateRequestNotresponding } from '../../../redux-saga/actions/CandidateNotrespondingAction'
import config from '../../../config/config'
import TabView from './TabView/TabView'
import EditCandidat from './EditCandidat'
import EditCandidatFiltering from './EditCandidatFiltering'
import CandidatModal from './Modal/ModalApply'
import { BiDotsVertical } from 'react-icons/bi'

import Page from "../../../component/commons/Page";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";

//siapin data utk dropdown
function dataTahun(tanggalAwal, tanggalAkhir) {
    const hasil = []
    for (let i = tanggalAwal; i <= tanggalAkhir.getFullYear(); i++) {
        hasil.push(i)
    }
    return hasil
}
const filterYear = dataTahun(2010, new Date())

const filterMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function Candidat() {
    const dispatch = useDispatch()
    const [displayEdit, setDisplayEdit] = useState(false)
    const [displayEditFiltering, setDisplayEditFiltering] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState()
    const { candidates } = useSelector(state => state.candidateStated)
    const { candidatesfiltering } = useSelector(state => state.candidateFilteringStated)
    const { candidatescontracted } = useSelector(state => state.candidateContractedStated)
    const { candidatesdisqualified } = useSelector(state => state.candidateDisqualifiedStated)
    const { candidatesnotresponding } = useSelector(state => state.candidateNotrespondingStated)
    //tpt penampungan data utk search
    const [search, setSearch] = useState("")
    console.log(search);

    // //modals
    // const [open, setOpen] = useState(false);
    // const cancelButtonRef = useRef(null);

    useEffect(() => {
        dispatch(GetCandidateRequest())
        dispatch(GetCandidateRequestFiltering())
        dispatch(GetCandidateRequestContracted())
        dispatch(GetCandidateRequestDisqulified())
        dispatch(GetCandidateRequestNotresponding())

        // if (refresh)
        setRefresh(false)
    }, [refresh])

    //harusnya utk nampilin pop up
    const onClick = (boapID) => {
        console.log(boapID);
        setDisplayEdit(true)
        setId(boapID)
    }
    const onClickFiltering = (filterID) => {
        setDisplayEditFiltering(true)
        setId(filterID)
    }

    return (
        <div>

            {
                displayEdit ?
                    <EditCandidat
                        closeEdit={() => setDisplayEdit(false)}
                        onRefresh={() => setRefresh(true)}
                        id={id}
                        setDisplay={setDisplayEdit} />
                    :
                    displayEditFiltering ?
                        <EditCandidatFiltering
                            closeEdit={() => setDisplayEditFiltering(false)}
                            onRefresh={() => setRefresh(true)}
                            id={id}
                            setDisplay={setDisplayEditFiltering} />
                        :
                        <TabView
                            title={"Candidat"}
                            tabs={[
                                {
                                    name: "Apply", content:
                                        <div>
                                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                {
                                                    <>
                                                        {/* <h1 className='font-bold'>List of Candidates</h1> */}
                                                        <div className='float-right'>
                                                            <select
                                                                className=' focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
                                                                onChange={(event) => {
                                                                    setSearch(event.target.value)
                                                                }}
                                                            >
                                                                <option value="">Filter By Month</option>
                                                                {
                                                                    filterMonth.map(data => (
                                                                        <option value={data}>{data}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                            <select
                                                                className='h-9 ml-5 mr-10 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
                                                                onChange={(event) => {
                                                                    setSearch(event.target.value)
                                                                }}
                                                            >
                                                                <option value="">Year</option>
                                                                {
                                                                    filterYear.map(data => (
                                                                        <option value={data}>{data}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed table-auto">
                                                            <tbody className="overscroll-auto md:overscroll-contain">
                                                                {
                                                                    candidates && candidates.filter((user) => {
                                                                        if (search === "") {
                                                                            return user
                                                                        } else if (user.batch_start_date.includes(search)) {
                                                                            return user
                                                                        }
                                                                    })
                                                                        .map((can, index) => {
                                                                            return (
                                                                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                                    <td><img className="rounded-full w-2/6 py-3 mx-auto" src={config.domain + '/candidate/file/' + can.user_photo} alt={can.user_first_name} /></td>
                                                                                    <td className="py-2">{can.user_first_name} {can.user_last_name} <br /> {can.pmail_address}</td>
                                                                                    <td className="py-2">HP: {can.uspo_number}</td>
                                                                                    <td className="py-2">{can.prog_title}</td>
                                                                                    <td className="px-6 py-2 w-56">Applied on {can.batch_start_date} <br />{can.boap_status}</td>
                                                                                    <td className="py-2 text-center">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="order-0 text-xl items-center border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                                                                                            onClick={() => onClick(can.user_entity_id)}
                                                                                        >
                                                                                            <BiDotsVertical />
                                                                                        </button>
                                                                                    </td>
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
                                                        {/* <h1 className='font-bold'>List of Filtering Test</h1> */}
                                                        <div className='float-right'>
                                                            <select
                                                                className=' focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
                                                                onChange={(event) => {
                                                                    setSearch(event.target.value)
                                                                }}
                                                            >
                                                                <option value="">Filter By Month</option>
                                                                {
                                                                    filterMonth.map(data => (
                                                                        <option value={data}>{data}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                            <select
                                                                className='h-9 ml-5 mr-10 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
                                                                onChange={(event) => {
                                                                    setSearch(event.target.value)
                                                                }}
                                                            >
                                                                <option value="">Year</option>
                                                                {
                                                                    filterYear.map(data => (
                                                                        <option value={data}>{data}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed table-auto">
                                                            <tbody className="overscroll-auto md:overscroll-contain">
                                                                {
                                                                    candidatesfiltering && candidatesfiltering.filter((user) => {
                                                                        if (search === "") {
                                                                            return user
                                                                        } else if (user.batch_start_date.includes(search)) {
                                                                            return user
                                                                        }
                                                                    })
                                                                        .map((can, index) => {
                                                                            return (
                                                                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                                    <td><img className="rounded-full w-2/6 py-3 mx-auto" src={config.domain + '/candidate/file/' + can.user_photo} alt={can.user_first_name} /></td>
                                                                                    <td className="px-6 py-2">{can.user_first_name} {can.user_last_name} <br /> {can.pmail_address}</td>
                                                                                    <td className="px-6 py-2">HP: {can.uspo_number}</td>
                                                                                    <td className="px-6 py-2">{can.prog_title}</td>
                                                                                    <td className="px-6 py-2 w-56">Applied on {can.batch_start_date} <br />{can.boap_status}</td>
                                                                                    <td className="px-6 py-2 text-center">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="order-0 text-xl items-center  border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                                                                                            onClick={() => onClickFiltering(can.user_entity_id)}
                                                                                        >
                                                                                            <BiDotsVertical />
                                                                                        </button>
                                                                                    </td>
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
                                    name: "Contract", content:
                                        <div>
                                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                {
                                                    <>
                                                        {/* <h1 className='font-bold'>List of Contracted</h1> */}
                                                        <div className='float-right'>
                                                            <select
                                                                className=' focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
                                                                onChange={(event) => {
                                                                    setSearch(event.target.value)
                                                                }}
                                                            >
                                                                <option value="">Filter By Month</option>
                                                                {
                                                                    filterMonth.map(data => (
                                                                        <option value={data}>{data}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                            <select
                                                                className='h-9 ml-5 mr-10 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
                                                                onChange={(event) => {
                                                                    setSearch(event.target.value)
                                                                }}
                                                            >
                                                                <option value="">Year</option>
                                                                {
                                                                    filterYear.map(data => (
                                                                        <option value={data}>{data}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed table-auto">
                                                            <tbody className="overscroll-auto md:overscroll-contain">
                                                                {
                                                                    candidatescontracted && candidatescontracted.filter((user) => {
                                                                        if (search === "") {
                                                                            return user
                                                                        } else if (user.batch_start_date.includes(search)) {
                                                                            return user
                                                                        }
                                                                    })
                                                                        .map((can, index) => {
                                                                            return (
                                                                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                                    <td><img className="rounded-full w-2/6 py-3 mx-auto" src={config.domain + '/candidate/file/' + can.user_photo} alt={can.user_first_name} /></td>
                                                                                    <td className="px-6 py-2">{can.user_first_name} {can.user_last_name} <br /> {can.pmail_address}</td>
                                                                                    <td className="px-6 py-2">HP: {can.uspo_number}</td>
                                                                                    <td className="px-6 py-2">{can.prog_title}</td>
                                                                                    <td className="px-6 py-2 w-56">Applied on {can.batch_start_date} <br />Score: {can.boap_total_skor},{can.boap_status}</td>
                                                                                    <td className="px-6 py-2 text-center">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="order-0 text-xl items-center  border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                                                                                            onClick={() => onClick(can.user_entity_id)}
                                                                                        >
                                                                                            <BiDotsVertical />
                                                                                        </button>
                                                                                    </td>
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
                                    name: "Disqualified", content:
                                        <div>
                                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                {
                                                    <>
                                                        {/* <h1 className='font-bold'>List of Disqualified</h1> */}
                                                        <div className='float-right'>
                                                            <select
                                                                className=' focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
                                                                onChange={(event) => {
                                                                    setSearch(event.target.value)
                                                                }}
                                                            >
                                                                <option value="">Filter By Month</option>
                                                                {
                                                                    filterMonth.map(data => (
                                                                        <option value={data}>{data}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                            <select
                                                                className='h-9 ml-5 mr-10 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
                                                                onChange={(event) => {
                                                                    setSearch(event.target.value)
                                                                }}
                                                            >
                                                                <option value="">Year</option>
                                                                {
                                                                    filterYear.map(data => (
                                                                        <option value={data}>{data}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed table-auto">
                                                            <tbody className="overscroll-auto md:overscroll-contain">
                                                                {
                                                                    candidatesdisqualified && candidatesdisqualified.filter((user) => {
                                                                        if (search === "") {
                                                                            return user
                                                                        } else if (user.batch_start_date.includes(search)) {
                                                                            return user
                                                                        }
                                                                    })
                                                                        .map((can, index) => {
                                                                            return (
                                                                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                                    <td><img className="rounded-full w-2/6 py-3 mx-auto" src={config.domain + '/candidate/file/' + can.user_photo} alt={can.user_first_name} /></td>
                                                                                    <td className="px-6 py-2">{can.user_first_name} {can.user_last_name} <br /> {can.pmail_address}</td>
                                                                                    <td className="px-6 py-2">HP: {can.uspo_number}</td>
                                                                                    <td className="px-6 py-2">{can.prog_title}</td>
                                                                                    <td className="px-6 py-2 w-56">Applied on {can.batch_start_date} <br />Score: {can.boap_total_skor},{can.boap_status}</td>
                                                                                    <td className="px-6 py-2 text-center">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="order-0 text-xl items-center  border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                                                                                            onClick={() => onClick(can.user_entity_id)}
                                                                                        >
                                                                                            <BiDotsVertical />
                                                                                        </button>
                                                                                    </td>
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
                                    name: "Not Responding", content:
                                        <div>
                                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                {
                                                    <>
                                                        {/* <h1 className='font-bold'>List of Not Responding</h1> */}
                                                        <div className='float-right'>
                                                            <select
                                                                className=' focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
                                                                onChange={(event) => {
                                                                    setSearch(event.target.value)
                                                                }}
                                                            >
                                                                <option value="">Filter By Month</option>
                                                                {
                                                                    filterMonth.map(data => (
                                                                        <option value={data}>{data}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                            <select
                                                                className='h-9 ml-5 mr-10 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md'
                                                                onChange={(event) => {
                                                                    setSearch(event.target.value)
                                                                }}
                                                            >
                                                                <option value="">Year</option>
                                                                {
                                                                    filterYear.map(data => (
                                                                        <option value={data}>{data}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed table-auto">
                                                            <tbody className="overscroll-auto md:overscroll-contain">
                                                                {
                                                                    candidatesnotresponding && candidatesnotresponding.filter((user) => {
                                                                        if (search === "") {
                                                                            return user
                                                                        } else if (user.batch_start_date.includes(search)) {
                                                                            return user
                                                                        }
                                                                    })
                                                                        .map((can, index) => {
                                                                            return (
                                                                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                                    <td><img className="rounded-full w-2/6 py-3 mx-auto" src={config.domain + '/candidate/file/' + can.user_photo} alt={can.user_first_name} /></td>
                                                                                    <td className="px-6 py-2">{can.user_first_name} {can.user_last_name} <br /> {can.pmail_address}</td>
                                                                                    <td className="px-6 py-2">HP: {can.uspo_number}</td>
                                                                                    <td className="px-6 py-2">{can.prog_title}</td>
                                                                                    <td className="px-6 py-2 w-56">Applied on {can.batch_start_date} <br />{can.boap_status}</td>
                                                                                    <td className="px-6 py-2 text-center">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="order-0 text-xl items-center  border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                                                                                            onClick={() => onClick(can.user_entity_id)}
                                                                                        >
                                                                                            <BiDotsVertical />
                                                                                        </button>
                                                                                    </td>
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
                            ]}
                        />
            }
        </div>
    )
}
