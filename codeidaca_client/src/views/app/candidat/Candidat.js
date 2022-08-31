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
//pagination
import ReactPaginate from 'react-paginate'


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
    //pagination
    const [dataAwal, setDataAwal] = useState([])
    const [jumlahHalaman, setJumlahHalaman] = useState(0)
    const [halamanTerkini, sethalamanTerkini] = useState(0)
    const dataPerPage = 5

    const [dataAwalFilter, setDataAwalFilter] = useState([])
    const [jumlahHalamanFiltering, setJumlahHalamanFiltering] = useState(0)
    const [halamanTerkiniFiltering, sethalamanTerkiniFiltering] = useState(0)
    const dataPerPageFiltering = 5

    const [dataAwalContract, setDataAwalContract] = useState([])
    const [jumlahHalamanContract, setJumlahHalamanContract] = useState(0)
    const [halamanTerkiniContract, sethalamanTerkiniContract] = useState(0)
    const dataPerPageContract = 5

    const [dataAwalDisqualified, setDataAwalDisqualified] = useState([])
    const [jumlahHalamanDisqualified, setJumlahHalamanDisqualified] = useState(0)
    const [halamanTerkiniDisqualified, sethalamanTerkiniDisqualified] = useState(0)
    const dataPerPageDisqualified = 5

    const [dataAwalNotResponding, setDataAwalNotResponding] = useState([])
    const [jumlahHalamanNotResponding, setJumlahHalamanNotResponding] = useState(0)
    const [halamanTerkiniNotResponding, sethalamanTerkiniNotResponding] = useState(0)
    const dataPerPageNotResponding = 5

    //modals
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);

    useEffect(() => {
        const halamanAkhir = halamanTerkini + dataPerPage;
        setDataAwal(candidates && candidates.filter((user) => {
            if (search === "") {
                return user
            } else if (user.batch_start_date.includes(search)) {
                return user
            }
        }).slice(halamanTerkini, halamanAkhir));
        setJumlahHalaman(Math.ceil(candidates && candidates.length / dataPerPage));
    }, [halamanTerkini, dataPerPage, candidates, search])

    useEffect(() => {
        const halamanAkhir = halamanTerkiniFiltering + dataPerPageFiltering;
        setDataAwalFilter(candidatesfiltering && candidatesfiltering.filter((user) => {
            if (search === "") {
                return user
            } else if (user.batch_start_date.includes(search)) {
                return user
            }
        }).slice(halamanTerkiniFiltering, halamanAkhir));
        setJumlahHalamanFiltering(Math.ceil(candidatesfiltering && candidatesfiltering.length / dataPerPageFiltering));
    }, [halamanTerkiniFiltering, dataPerPageFiltering, candidatesfiltering, search])

    useEffect(() => {
        const halamanAkhir = halamanTerkiniContract + dataPerPageContract;
        setDataAwalContract(candidatescontracted && candidatescontracted.filter((user) => {
            if (search === "") {
                return user
            } else if (user.batch_start_date.includes(search)) {
                return user
            }
        }).slice(halamanTerkiniContract, halamanAkhir));
        setJumlahHalamanContract(Math.ceil(candidatescontracted && candidatescontracted.length / dataPerPageContract));
    }, [halamanTerkiniContract, dataPerPageContract, candidatescontracted, search])

    useEffect(() => {
        const halamanAkhir = halamanTerkiniDisqualified + dataPerPageDisqualified;
        setDataAwalDisqualified(candidatesdisqualified && candidatesdisqualified.filter((user) => {
            if (search === "") {
                return user
            } else if (user.batch_start_date.includes(search)) {
                return user
            }
        }).slice(halamanTerkiniDisqualified, halamanAkhir));
        setJumlahHalamanDisqualified(Math.ceil(candidatesdisqualified && candidatesdisqualified.length / dataPerPageDisqualified));
    }, [halamanTerkiniDisqualified, dataPerPageDisqualified, candidatesdisqualified, search])

    useEffect(() => {
        const halamanAkhir = halamanTerkiniNotResponding + dataPerPageNotResponding;
        setDataAwalNotResponding(candidatesnotresponding && candidatesnotresponding.filter((user) => {
            if (search === "") {
                return user
            } else if (user.batch_start_date.includes(search)) {
                return user
            }
        }).slice(halamanTerkiniNotResponding, halamanAkhir));
        setJumlahHalamanNotResponding(Math.ceil(candidatesnotresponding && candidatesnotresponding.length / dataPerPageNotResponding));
    }, [halamanTerkiniNotResponding, dataPerPageNotResponding, candidatesnotresponding, search])

    const handlePageClick = (event) => {
        const pilihHalaman = (event.selected * dataPerPage) % candidates.length;
        sethalamanTerkini(pilihHalaman)
    }

    const handlePageClickFiltering = (event) => {
        const pilihHalaman = (event.selected * dataPerPageFiltering) % candidatesfiltering.length;
        sethalamanTerkiniFiltering(pilihHalaman)
    }

    const handlePageClickContract = (event) => {
        const pilihHalaman = (event.selected * dataPerPageContract) % candidatescontracted.length;
        sethalamanTerkiniContract(pilihHalaman)
    }

    const handlePageClickDisqualified = (event) => {
        const pilihHalaman = (event.selected * dataPerPageDisqualified) % candidatesdisqualified.length;
        sethalamanTerkiniDisqualified(pilihHalaman)
    }

    const handlePageClickNotResponding = (event) => {
        const pilihHalaman = (event.selected * dataPerPageNotResponding) % candidatescontracted.length;
        sethalamanTerkiniNotResponding(pilihHalaman)
    }

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
                                                                    dataAwal && dataAwal.filter((user) => {
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
                                                                                    <td className="py-2 w-44">HP: {can.uspo_number}</td>
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
                                                <ReactPaginate
                                                    containerClassName='flex justify-center items-center gap-1 mt-4 text-sm'
                                                    pageLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    previousLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    nextLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    activeLinkClassName='bg-green-400'
                                                    breakLabel="..."
                                                    nextLabel="next >"
                                                    onPageChange={handlePageClick}
                                                    pageRangeDisplayed={5}
                                                    pageCount={jumlahHalaman}
                                                    previousLabel="< previous"
                                                    renderOnZeroPageCount={null}
                                                />
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
                                                                    dataAwalFilter && dataAwalFilter.filter((user) => {
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
                                                                                    <td className="px-6 py-2 w-44">HP: {can.uspo_number}</td>
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
                                                <ReactPaginate
                                                    containerClassName='flex justify-center items-center gap-1 mt-4 text-sm'
                                                    pageLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    previousLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    nextLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    activeLinkClassName='bg-green-400'
                                                    breakLabel="..."
                                                    nextLabel="next >"
                                                    onPageChange={handlePageClickFiltering}
                                                    pageRangeDisplayed={5}
                                                    pageCount={jumlahHalamanFiltering}
                                                    previousLabel="< previous"
                                                    renderOnZeroPageCount={null}
                                                />
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
                                                                    dataAwalContract && dataAwalContract.filter((user) => {
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
                                                                                    <td className="px-6 py-2 w-44">HP: {can.uspo_number}</td>
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
                                                <ReactPaginate
                                                    containerClassName='flex justify-center items-center gap-1 mt-4 text-sm'
                                                    pageLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    previousLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    nextLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    activeLinkClassName='bg-green-400'
                                                    breakLabel="..."
                                                    nextLabel="next >"
                                                    onPageChange={handlePageClickContract}
                                                    pageRangeDisplayed={5}
                                                    pageCount={jumlahHalamanContract}
                                                    previousLabel="< previous"
                                                    renderOnZeroPageCount={null}
                                                />
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
                                                                    dataAwalDisqualified && dataAwalDisqualified.filter((user) => {
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
                                                                                    <td className="px-6 py-2 w-44">HP: {can.uspo_number}</td>
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
                                                <ReactPaginate
                                                    containerClassName='flex justify-center items-center gap-1 mt-4 text-sm'
                                                    pageLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    previousLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    nextLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    activeLinkClassName='bg-green-400'
                                                    breakLabel="..."
                                                    nextLabel="next >"
                                                    onPageChange={handlePageClickDisqualified}
                                                    pageRangeDisplayed={5}
                                                    pageCount={jumlahHalamanDisqualified}
                                                    previousLabel="< previous"
                                                    renderOnZeroPageCount={null}
                                                />
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
                                                                    dataAwalNotResponding && dataAwalNotResponding.filter((user) => {
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
                                                                                    <td className="px-6 py-2 w-44">HP: {can.uspo_number}</td>
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
                                                <ReactPaginate
                                                    containerClassName='flex justify-center items-center gap-1 mt-4 text-sm'
                                                    pageLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    previousLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    nextLinkClassName='rounded py-1 px-3 hover:bg-green-500 hover:text-white'
                                                    activeLinkClassName='bg-green-400'
                                                    breakLabel="..."
                                                    nextLabel="next >"
                                                    onPageChange={handlePageClickNotResponding}
                                                    pageRangeDisplayed={5}
                                                    pageCount={jumlahHalamanNotResponding}
                                                    previousLabel="< previous"
                                                    renderOnZeroPageCount={null}
                                                />
                                            </div>
                                        </div>
                                },
                            ]}
                        />

            }
        </div>
    )
}
