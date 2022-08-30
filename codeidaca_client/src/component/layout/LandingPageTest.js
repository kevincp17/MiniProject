import React, { Fragment,useEffect,useState } from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Popover, Dialog, Menu, Transition,Disclosure } from '@headlessui/react';
import {
    AnnotationIcon,
    ChatAlt2Icon,
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    MenuIcon,
    PencilAltIcon,
    QuestionMarkCircleIcon,
    ReplyIcon,
    SparklesIcon,
    TrashIcon,
    TrendingUpIcon,
    UserGroupIcon,
    UsersIcon,
    SelectorIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon,ChevronRightIcon } from '@heroicons/react/solid';
import { useSelector, useDispatch } from 'react-redux';
import { doSignoutRequest } from '../../redux-saga/actions/User'
import { GetFourProgramRequest,GetThreeCourseRequest,GetAlumniTestimonyRequest } from '../../redux-saga/actions/ProgramEntity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faWhatsapp,faInstagram,faYoutube,faTelegram } from "@fortawesome/free-brands-svg-icons"
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import config from '../../config/config';

const solutions = [
    {
        name: 'Company Training',
        description: 'Upgrade your employees skill with latest technology.',
        href: '#',
        icon: TrendingUpIcon,
    },
    {
        name: 'Partner With Us',
        description: '.',
        href: '#',
        icon: UserGroupIcon,
    },
    { name: 'Live Chat', description: "Need information, contact live chat with us", href: '#', icon: ChatAlt2Icon },
    {
        name: 'Knowledge Base',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
];



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function LandingPage() {
    let navigate = useNavigate()
    let location = useLocation();
    const [refresh, setRefresh] = useState(false)
    let from = location.state?.from?.pathname || "/";
    const {program_entities,program_entities_course,alumni_testimonies} = useSelector(state => state.programEntityState)
    
    useEffect(() => {
        dispatch(GetFourProgramRequest())
        dispatch(GetThreeCourseRequest())
        dispatch(GetAlumniTestimonyRequest())
        setRefresh(false)
    }, [refresh])
    
    const dispatch = useDispatch();
    const { isLoggedIn, userProfile } = useSelector((state) => state.userState);

    const onSignout = () => {
        dispatch(doSignoutRequest());
        navigate(from, { replace: true })
    }
    return(
        <div>
            <header className='z-50'>
                <Popover className="relative bg-white">
                    {({ open }) => (
                        <>
                            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                                <div className="flex justify-start lg:w-0 lg:flex-1">
                                {/* onClick={() => location.pathname.reload()} */}
                                    <Link to="/" onClick={() => location.pathname.reload()}>
                                        <span className="sr-only">codeid</span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src="./assets/images/codeid.png"
                                            alt="codeid"
                                        />
                                    </Link>
                                </div>
                                <div className="-mr-2 -my-2 md:hidden">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                        <Menu.Button className="transition inline-flex w-full justify-center rounded-md text-base font-medium text-slate-600 hover:text-red-500 px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                            Programs
                                            <ChevronDownIcon
                                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                            />
                                        </Menu.Button>
                                        </div>
                                        <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                        >
                                        <Menu.Items className="z-50 absolute left-0 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                            <Menu.Item className='w-full'>
                                                {({ active }) => (
                                                <Menu as='div' className="relative inline-block text-left">
                                                {({ open }) => (
                                                <>
                                                <Menu.Button className={`${
                                                active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                } flex flex-row w-full rounded-md px-2 py-2 text-sm`}>
                                                    <div className='basis-3/4 grid justify-items-start'>Bootcamp Regular</div>
                                                    <div className='basis-1/4'><FontAwesomeIcon
                                                aria-hidden="true" icon={solid('angle-right')} /></div>
                                                </Menu.Button>
                                                    {open && (
                                                        <div>
                                                            <Menu.Items className="z-50 absolute top-0 left-52 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                                                            <div className="py-1">
                                                                <Menu.Item>
                                                                {({ active }) => (
                                                            <a
                                                                className={`${
                                                                active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                href="#"
                                                            >
                                                                NodeJS Fullstack
                                                            </a>
                                                            )}
                                                            </Menu.Item>

                                                            <Menu.Item>
                                                            {({ active }) => (
                                                            <a
                                                                className={`${
                                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    href="#"
                                                            >
                                                                Java Fullstack
                                                            </a>
                                                            )}
                                                            </Menu.Item>

                                                            <Menu.Item>
                                                            {({ active }) => (
                                                            <a
                                                                className={`${
                                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    href="#"
                                                            >
                                                                .Net Fullstack
                                                            </a>
                                                            )}
                                                            </Menu.Item>

                                                            <Menu.Item>
                                                            {({ active }) => (
                                                            <a
                                                                className={`${
                                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    href="#"
                                                            >
                                                                Golang Fullstack
                                                            </a>
                                                            )}
                                                            </Menu.Item>
                                                        </div>
                                                        
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                            {({ active }) => (
                                                            <a
                                                                className={`${
                                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    href="#"
                                                            >
                                                                Android Mobile
                                                            </a>
                                                            )}
                                                            </Menu.Item>

                                                            <Menu.Item>
                                                            {({ active }) => (
                                                            <a
                                                                className={`${
                                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    href="#"
                                                            >
                                                                Flutter
                                                            </a>
                                                            )}
                                                            </Menu.Item>
                                                        </div>
                                                        
                                                        </Menu.Items>
                                                    </div>
                                                    )}
                                                </>
                                                )}
                                                </Menu>
                                            )}
                                            </Menu.Item>

                                            <Menu.Item className='w-full'>
                                                {({ active }) => (
                                                <Menu as='div' className="relative inline-block text-left">
                                                {({ open }) => (
                                                <>
                                                <Menu.Button className={`${
                                                active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                } flex flex-row w-full rounded-md px-2 py-2 text-sm`}>
                                                <div className='basis-3/4 grid justify-items-start'>Bootcamp Online</div>
                                                <div className='basis-1/4'><FontAwesomeIcon
                                            aria-hidden="true" icon={solid('angle-right')} /></div></Menu.Button>
                                                    {open && (
                                                        <div>
                                                            <Menu.Items className="z-50 absolute top-10 left-52 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                                                            <div className="py-1">
                                                                <Menu.Item>
                                                                {({ active }) => (
                                                            <a
                                                                className={`${
                                                                active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                href="#"
                                                            >
                                                                NodeJS Fullstack
                                                            </a>
                                                            )}
                                                            </Menu.Item>

                                                            <Menu.Item>
                                                            {({ active }) => (
                                                            <a
                                                                className={`${
                                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    href="#"
                                                            >
                                                                Golang Fullstack
                                                            </a>
                                                            )}
                                                            </Menu.Item>
                                                        </div>
                                                        
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                            {({ active }) => (
                                                            <a
                                                                className={`${
                                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    href="#"
                                                            >
                                                                Android Mobile
                                                            </a>
                                                            )}
                                                            </Menu.Item>

                                                            <Menu.Item>
                                                            {({ active }) => (
                                                            <a
                                                                className={`${
                                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    href="#"
                                                            >
                                                                Flutter
                                                            </a>
                                                            )}
                                                            </Menu.Item>
                                                        </div>
                                                        
                                                        </Menu.Items>
                                                    </div>
                                                    )}
                                                </>
                                                )}
                                                </Menu>
                                            )}
                                            </Menu.Item>
                                            <Menu.Item className='w-full'>
                                                {({ active }) => (
                                                <Menu as='div' className="relative inline-block text-left">
                                                {({ open }) => (
                                                <>
                                                <Menu.Button className={`${
                                                active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                } flex flex-row w-full rounded-md px-2 py-2 text-sm`}>
                                                <div className='basis-3/4 grid justify-items-start'>Bootcamp Corporate</div>
                                                <div className='basis-1/4'><FontAwesomeIcon
                                            aria-hidden="true" icon={solid('angle-right')} /></div></Menu.Button>
                                                    {open && (
                                                            <Menu.Items className="z-50 absolute top-20 left-52 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                                                                <Menu.Item>
                                                                {({ active }) => (
                                                            <a
                                                                className={`${
                                                                active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                href="#"
                                                            >
                                                                .Net Technology
                                                            </a>
                                                            )}
                                                            </Menu.Item>                                                                                                                                         
                                                        </Menu.Items>
                                                    )}
                                                </>
                                                )}
                                                </Menu>
                                            )}
                                            </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                        </Transition>
                                    </Menu>

                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                        <Menu.Button className="transition inline-flex w-full justify-center rounded-md text-base font-medium text-gray-500 hover:text-red-500 px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                            Online Course
                                            <ChevronDownIcon
                                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                            />
                                        </Menu.Button>
                                        </div>
                                        <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                        >
                                        <Menu.Items className="z-50 absolute left-0  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                    to="Location"
                                                    >
                                                <button
                                                    className={`${
                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                
                                                    Programming
                                                </button>
                                                </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                    to="Setting"
                                                    >
                                                <button
                                                    className={`${
                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    
                                                    Development
                                                </button>
                                                </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    className={`${
                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    
                                                    Mobile
                                                </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    className={`${
                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    
                                                    UI/UX Design
                                                </button>
                                                )}
                                            </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    className={`${
                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                
                                                    Machine Learning
                                                </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    className={`${
                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    
                                                    Data Scientist
                                                </button>
                                                )}
                                            </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    className={`${
                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    
                                                    Database
                                                </button>
                                                )}
                                            </Menu.Item>
                                            </div>

                                            <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    className={`${
                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    
                                                    Digital Marketing
                                                </button>
                                                )}
                                            </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                        </Transition>
                                    </Menu>

                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                        <Menu.Button className="transition inline-flex w-full justify-center rounded-md text-base font-medium text-gray-500 hover:text-red-500 px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                            Job Hiring
                                            <ChevronDownIcon
                                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                            />
                                        </Menu.Button>
                                        </div>
                                        <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                        >
                                        <Menu.Items className="z-50 absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    className={`${
                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                
                                                    Our Graduates
                                                </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    className={`${
                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    
                                                    Profesional Hiring
                                                </button>
                                                )}
                                            </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                        </Transition>
                                    </Menu>

                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                        <Menu.Button className="transition inline-flex w-full justify-center rounded-md text-base font-medium text-gray-500 hover:text-red-500 px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                            About
                                            <ChevronDownIcon
                                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                            />
                                        </Menu.Button>
                                        </div>
                                        <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                        >
                                        <Menu.Items className="z-50 absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    className={`${
                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                
                                                    Alumni Testimony
                                                </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    className={`${
                                                    active ? 'transition bg-red-500 text-white' : 'text-slate-600'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    
                                                    About Us
                                                </button>
                                                )}
                                            </Menu.Item>
                                            </div>                               
                                        </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </Popover.Group>
                                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                    {
                                        isLoggedIn ?
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img
                                                            className="h-8 w-8 rounded-full"
                                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        to="#"
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 divide-y')}
                                                                    >
                                                                        <dd className="mt-1 text-sm text-slate-600 sm:mt-0 sm:col-span-2">Hi,{userProfile.username}</dd>
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        </div>


                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        to="#"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100 text-slate-600' : 'text-gray-700',
                                                                            'block px-4 py-2 text-sm'
                                                                        )}
                                                                    >
                                                                        Notifications
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        to="/app"
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                    >
                                                                        My App
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        </div>

                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="#"
                                                                    onClick={onSignout}
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    Sign out
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu> :
                                            <>
                                                <Link to="signin" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-slate-600">
                                                    Sign in
                                                </Link>
                                                <Link
                                                    to="signup"
                                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                                                >
                                                    Sign up
                                                </Link>
                                            </>

                                    }

                                </div>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-200 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    static
                                    className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                        <div className="pt-5 pb-6 px-5">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <img
                                                        className="h-8 w-auto"
                                                        src="./assets/images/codeid.png"
                                                        alt="Workflow"
                                                    />
                                                </div>
                                                <div className="-mr-2">
                                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                        <span className="sr-only">Close menu</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    </Popover.Button>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <nav className="grid grid-cols-1 gap-7">
                                                    {solutions.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                        >
                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                                                                <item.icon className="h-6 w-6" aria-hidden="true" />
                                                            </div>
                                                            <div className="ml-4 text-base font-medium text-slate-600">{item.name}</div>
                                                        </Link>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="py-6 px-5">
                                            <div className="grid grid-cols-2 gap-4">
                                                <a href="#" className="text-base font-medium text-slate-600 hover:text-gray-700">
                                                    Pricing
                                                </a>
                                                <a href="#" className="text-base font-medium text-slate-600 hover:text-gray-700">
                                                    Partners
                                                </a>
                                                <a href="#" className="text-base font-medium text-slate-600 hover:text-gray-700">
                                                    Company
                                                </a>
                                            </div>
                                            <div className="mt-6">
                                                <Link
                                                    to="#"
                                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                                                >
                                                    Sign up
                                                </Link>
                                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                    Existing customer?
                                                    <Link to="signin" className="text-slate-600">
                                                        Sign in
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </header>
            <main className='z-0'>  
                {location.pathname==="/"
                ?
                <div>
                    <div className='flex flex-row py-5 px-10 space-x-4'>
                        <div className='basis-1/2'>
                            <div className='py-2 text-2xl font-semibold'>Upgrade your skill, it's free, gaps your dream to become software engineer</div>

                            <div className='py-2'>
                                Code Academy sampai saat ini telah menyelenggarakan 
                                lebih dari #20 batch coding bootcamp dan menyalurkan
                                250 lebih alumni bootcamp ke-33 perusahaan besar.
                            </div>

                            <div className='py-2'>
                                <Link
                                    to="bootcamp"
                                    >
                                    <button className='transition hover:bg-red-500 hover:text-white text-red-500 text-base py-2 px-4 border-2 border-red-500 rounded'>
                                        Join Bootcamp    
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='basis-1/2'>
                            <div className='py-5 px-10 grid grid-cols-3 gap-x-7 justify-items-stretch'>
                                <div className='flex flex-col items-center border-2 rounded-md p-2 bg-gray-400 bg-opacity-25'>
                                    <img className='h-36 w-60 border-solid border-4 border-red-500 rounded-full my-2' crossOrigin="anonymous" src={config.domain+'/program_entity/images/alex.jpg'}/> 
                                    <div>Abdul Razak</div> 
                                    <div>Batch#15 Java</div> 
                                    <div className='-mx-1'>Software Engineer at</div>
                                    <img className='h-20 w-40 mt-3' crossOrigin="anonymous" src={config.domain+'/program_entity/images/astra.jpg'}/>
                                </div>

                                <div className='flex flex-col items-center border-2 rounded-md p-2 bg-gray-400 bg-opacity-25'>
                                    <img className='h-36 w-60 border-solid border-4 border-red-500 rounded-full my-2' crossOrigin="anonymous" src={config.domain+'/program_entity/images/chris.jpg'}/> 
                                    <div>Ryan Hidayat</div> 
                                    <div>Batch#17 Golang</div> 
                                    <div className='-mx-1'>Software Engineer at</div>
                                    <img className='h-20 w-40 mt-3' crossOrigin="anonymous" src={config.domain+'/program_entity/images/mandiri.png'}/>
                                </div>

                                <div className='flex flex-col items-center border-2 rounded-md p-2 bg-gray-400 bg-opacity-25'>
                                    <img className='h-36 w-60 border-solid border-4 border-red-500 rounded-full my-2' crossOrigin="anonymous" src={config.domain+'/program_entity/images/jakes.jpg'}/> 
                                    <div>Titania</div> 
                                    <div>Batch#19 .Net</div> 
                                    <div className='-mx-1'>Software Engineer at</div>
                                    <img className='h-20 w-40 mt-3' crossOrigin="anonymous" src={config.domain+'/program_entity/images/prudential.png'}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex py-5 px-3 justify-center bg-gray-400 bg-opacity-25'>
                        <div className='flex flex-col items-center'>
                            <div>Our alumni have worked at</div>
                            <div className='py-5 px-10 grid grid-cols-5 gap-y-7  gap-x-16'>
                                <div><img className='h-20 w-40' crossOrigin="anonymous" src={config.domain+'/program_entity/images/astra.jpg'}/></div>
                                <div><img className='h-20 w-40' crossOrigin="anonymous" src={config.domain+'/program_entity/images/axa.png'}/></div>
                                <div><img className='h-20 w-40' crossOrigin="anonymous" src={config.domain+'/program_entity/images/axiata.png'}/></div>
                                <div><img className='h-20 w-40' crossOrigin="anonymous" src={config.domain+'/program_entity/images/bri.png'}/></div>
                                <div><img className='h-20 w-40' crossOrigin="anonymous" src={config.domain+'/program_entity/images/btpn.png'}/></div>
                                <div><img className='h-20 w-40' crossOrigin="anonymous" src={config.domain+'/program_entity/images/gadai.png'}/></div>
                                <div><img className='h-20 w-40' crossOrigin="anonymous" src={config.domain+'/program_entity/images/link.png'}/></div>
                                <div><img className='h-20 w-40' crossOrigin="anonymous" src={config.domain+'/program_entity/images/mandiri.png'}/></div>
                                <div><img className='h-20 w-40' crossOrigin="anonymous" src={config.domain+'/program_entity/images/mega.png'}/></div>
                                <div><img className='h-20 w-40' crossOrigin="anonymous" src={config.domain+'/program_entity/images/prudential.png'}/></div>
                            </div>
                        </div>    
                    </div>

                    <div className='flex py-5 px-3 justify-center bg-opacity-25'>
                        <div className='flex flex-col items-center'>
                            <div className='text-2xl font-semibold'>Alumni Success Story</div>
                            <div className='py-5 px-3 flex flex-row space-x-10'>
                                <div className='flex flex-col items-center'>
                                    <iframe
                                        src="https://www.youtube.com/embed/91s3aJwXPmw"
                                        width="350" height="250"
                                        frameborder="0"
                                        allow="autoplay; encrypted-media"
                                        allowfullscreen
                                        title="video"
                                    />{" "}

                                    <div className='flex flex-col items-center pt-3 w-80'>
                                        <div className='grid justify-items-start'>
                                            <div className='text-lg'>Abdul Rozak</div>
                                            <div className='py-2 font-semibold'>Software Engineer | Astra</div>
                                            <div>
                                                Di CodeID, saya belajar dari nol dan sekarang
                                                saya bekerja di Astra Internasional sebagai 
                                                Software Developer
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                                
                                <div className='flex flex-col items-center'>
                                    <iframe 
                                        src="https://www.youtube.com/embed/NxsJWYOaOgw"
                                        width="350" height="250"
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen
                                        title="Hemisphere"
                                    />{" "}
                                    
                                    <div className='flex flex-col items-center pt-3 w-80'>
                                        <div className='grid justify-items-start'>
                                            <div className='text-lg'>Ryan Hidayat</div>
                                            <div className='py-2 font-semibold'>Software Developer | Mandiri</div>
                                            <div>
                                                Di CodeID, saya belajar dari nol dan sekarang
                                                saya bekerja di bank Mandiri sebagai 
                                                Software Developer
                                            </div>
                                        </div>
                                    </div>
                                </div>   

                                <div className='flex flex-col items-center'>
                                    <iframe 
                                    src="https://www.youtube.com/embed/f4h1RkSm7uo" 
                                    width="350" height="250"
                                    title="Mini Project Batch#9 - Movie Seller By Ravi" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen></iframe>

                                    <div className='flex flex-col items-center pt-3 w-80'>
                                        <div className='grid justify-items-start'>
                                            <div className='text-lg'>Titania</div>
                                            <div className='py-2 font-semibold'>Software Developer | Prudential</div>
                                            <div>
                                                Di CodeID, saya belajar dari nol dan sekarang
                                                saya bekerja di Prudential sebagai 
                                                Software Developer
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                            <div className='py-5'>
                            
                                <button className='transition hover:bg-red-500 hover:text-white text-red-500 text-base py-2 px-4 border-2 border-red-500 rounded'>
                                    Watch More Success Story   
                                </button>
                                
                            </div>
                        </div>    
                    </div>

                    <div className='flex py-5 justify-center bg-opacity-25 w-full'>
                        <div className='flex flex-col items-center'>
                            <div className='text-2xl font-semibold'>Our Bootcamp</div>
                            <div className='py-5'>Kurikulum bootcamp kami disesuaikan dengan kebutuhan industri agar kamu selepas bootcamp,siap untuk bekerja</div>
                            <div className='py-5 px-10 grid grid-cols-2 gap-y-16  gap-x-36'>
                            {
                                program_entities && program_entities.map(pre => {
                                    return (
                                        <div className='flex flex-row rounded-md border-2 p-3 w-96 h-60 bg-gray-400 bg-opacity-25' key={pre.prog_id}>
                                            <div className='basis-1/2 py-4'>
                                            {
                                                pre.prog_image
                                                ?
                                                <img className='h-40 w-40 rounded-full border-2' crossOrigin="anonymous" src={config.domain+'/program_entity/images/'+pre.prog_image}/>
                                                :
                                                <>
                                                    No Image
                                                </>
                                            }
                                            </div> 
                                            <div className='flex flex-col basis-1/2 h-full space-x-1 pt-3'>
                                                <div className='text-xl font-semibold basis-1/4'>{pre.prog_title}</div>
                                                <div className='mt-2 basis-1/2'>{pre.prog_headline}</div>
                     
                                                <div class="left-0 bottom-0 basis-1/4 mt-2">
                                                        <button className='transition hover:bg-red-500 hover:text-white text-red-500 text-base py-2 px-4 border-2 border-red-500 rounded'>Curriculum</button>
                                                </div> 
                                            </div>                           
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <div className='py-5'>
                                <Link
                                    to="bootcamp"
                                    >
                                    <button className='transition hover:bg-red-500 hover:text-white text-red-500 text-base py-2 px-4 border-2 border-red-500 rounded'>
                                        More Bootcamps
                                    </button>
                                </Link>
                                
                            </div>
                        </div>    
                    </div>

                    <div className='flex py-5 justify-center bg-opacity-25'>
                        <div className='flex flex-col items-center'>
                            <div className='text-2xl font-semibold'>Alumni Testimony</div>
                            <div className='py-5 px-10 grid grid-cols-3 gap-y-10  gap-x-20'>
                            {
                                alumni_testimonies && alumni_testimonies.map(alt => {
                                    return (
                                        <div className='flex flex-row rounded-md border-2 p-3 w-96 h-60 bg-gray-400 bg-opacity-25' key={alt.pore_entity_id}>
                                            <div className='flex flex-col items-center basis-1/2 py-2'>
                                                <div>
                                                {
                                                    alt.pore_entity.user_photo
                                                    ?
                                                    <img className='h-40 w-40 border-solid border-4 border-red-500 rounded-full' crossOrigin="anonymous" src={config.domain+'/program_entity/images/'+alt.pore_entity.user_photo}/>
                                                    :
                                                    <>
                                                        No Image
                                                    </>
                                                }
                                                </div>

                                                <div className='font-semibold'>
                                                    {alt.pore_entity.user_first_name} {alt.pore_entity.user_last_name}  
                                                </div>

                                                <div>
                                                    Batch {alt.pore_prog.prog_title}
                                                </div>
                                            </div> 

                                            <div className='flex flex-col basis-1/2 h-full space-x-1 pt-3'>
                                                {alt.bore_review}
                                            </div>                           
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>    
                    </div>

                    <div className='relative flex py-5 px-10 mb-28'>
                        <div className='flex flex-col items-center border-solid border-2 rounded bg-gray-400 bg-opacity-25  px-4'>
                            <div className='flex flex-row h-80 space-x-8'>              
                                <div className='basis-1/3 p-3'>
                                    <img className='h-44 w-96' src='https://i1.wp.com/codeacademy.co.id/wp-content/uploads/2020/02/LAPTOP1.png?resize=1536%2C1451&ssl=1' alt="Logo" />
                                </div>
                                <div className='flex flex-col basis-2/3'>
                                    <div className='py-2 text-2xl font-semibold'>Kenapa pilih CodeID Academy?</div>
                                    <div>
                                        CodeID Academy berdiri tahun 2017 dan sekarang telah mencapai lebih
                                        dari 20 batch dan telah menyalurkan lebih dari 250 lulusan bootcamp
                                        ke 33 perusahaan ternama. Kamu tidak usah bayar, semua gratis.
                                    </div>
                                </div>
                            </div>

                            <div className='absolute w-10/12 top-52 bottom-0 left-20 grid grid-cols-3 gap-10 py-4 space-x-10 pl-8'>
                                <div className='flex flex-col items-center border-solid border-2 border-black rounded-lg bg-white'>
                                    <div className='text-2xl font-semibold'>Trainer</div>
                                    <div className='text-center py-2 px-2'>
                                        Trainer kami merupakan tenaga profesional
                                        yang berpengalaman lebih dari 5 tahun
                                        dan tahu kebutuhan industri naik legacy
                                        atau latest technology. Jadi kamu akan di guide
                                        bagaimana menguasai coding mulai dari
                                        fundamental sampai advance
                                    </div>
                                </div>
                                <div className='flex flex-col items-center border-solid border-2 border-black rounded-lg bg-white'>
                                    <div className='text-2xl font-semibold'>Materi</div>
                                    <div className='text-center py-2 px-2'>
                                        Materi di CodeID Academy telah settle
                                        dengan roadmap terstruktur dan dinamis
                                        mengikuti kebutuhan industri, kamu bisa belajar
                                        langsung dari trainer, kami sediakan juga materi 
                                        berupa video 
                                    </div>
                                </div>
                                <div className='flex flex-col items-center border-solid border-2 border-black rounded-lg bg-white'>
                                    <div className='text-2xl font-semibold'>Placement</div>
                                    <div className='text-center py-2 px-2'>
                                        Kami akan salurkan ke client kami
                                        ketika kamu selesai bootcamp
                                    </div>
                                </div>
                            </div>   
                        </div>    
                    </div>

                    <div className='flex py-5 justify-center bg-opacity-25'>
                        <div className='flex flex-col items-center'>
                            <div className='text-2xl font-semibold'>Online Course</div>
                            <div className='py-5'>
                                Bagi kamu yang tidak punya waktu untuk mengikuti full bootcamp,
                                kami sediakan online course, dimana kamu bisa belajar kapan saja
                                dan full time access
                            </div>
                            <div className='py-5 px-10 grid grid-cols-3 gap-x-16'>
                            {
                                program_entities_course && program_entities_course.map(pre => {
                                    return (
                                        <div className='flex flex-row rounded-md border-2 p-3 w-96 h-68 bg-gray-400 bg-opacity-25' key={pre.prog_id}>
                                            <div className='basis-1/2 py-4'>
                                            {
                                                pre.prog_image
                                                ?
                                                <img className='h-40 w-40 rounded-full border-2' crossOrigin="anonymous" src={config.domain+'/program_entity/images/'+pre.prog_image}/>
                                                :
                                                <>
                                                    No Image
                                                </>
                                            }
                                            </div> 
                                            <div className='flex flex-col basis-1/2 h-full space-x-1 pt-3'>
                                                <div className='text-xl font-semibold basis-1/4'>{pre.prog_title}</div>
                                                <div className='mt-3 basis-1/2 mx-2'>{pre.prog_headline}</div>
                     
                                                <div class="left-0 bottom-0 basis-1/4 pt-3">
                                                        <button className='transition hover:bg-red-500 hover:text-white text-red-500 text-base py-2 px-4 border-2 border-red-500 rounded'>Curriculum</button>
                                                </div> 
                                            </div>                            
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>    
                    </div>

                    <div className='py-5 justify-center bg-opacity-25'>
                        <div className='flex flex-col items-center'>
                            <div className='text-2xl font-semibold'>Frequently Asked Question</div>
                            <div className='py-5 w-full'>
                                <Disclosure as='div' className='grid justify-items-stretch px-32'>
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="flex justify-between rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            Syarat untuk mengikuti bootcamp?
                                            <ChevronRightIcon
                                            className={`${open ? "transform rotate-90 w-5 h-5" : "w-5 h-5"}`}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            show={open}
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        ></Transition>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-md">
                                            Syarat mengikuti bootcamp adalah kamu sudah lulus kuliah D3/S1, jurusan infromatika/matematika/fisika/komputer/SI,
                                            sedang tidak bekerja, siap mengikuti ikatan dinas
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>

                            <div className='py-5 w-full'>
                                <Disclosure as='div' className='grid justify-items-stretch px-32'>
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="flex justify-between rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            Tahapan sampai mengikuti bootcamp?
                                            <ChevronRightIcon
                                            className={`${open ? "transform rotate-90 w-5 h-5" : "w-5 h-5"}`}
                                            />
                                        </Disclosure.Button>

                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-md">
                                            Pertama kamu daftar dulu di situs kami dan pilih bootcamp yang kamu inginkan,
                                            lalu kamu ikuti filtering test, lalu interview, legal contract dan kamu siap join bootcamp
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>

                            <div className='py-5 w-full'>
                                <Disclosure as='div' className='grid justify-items-stretch px-32'>
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="flex justify-between rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            Kak, fasilitasnya apa aja ya selama mengikuti bootcamp?
                                            <ChevronRightIcon
                                            className={`${open ? "transform rotate-90 w-5 h-5" : "w-5 h-5"}`}
                                            />
                                        </Disclosure.Button>

                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-md">
                                            Untuk yang offline, kamu akan belajar di Sentul, Bogor, suasana seperti villa, kamu nginap disana
                                            selama 3 bulan, makan gratis 3 kali sehari, peralatan mandi, mesin cuci, tempat nongkrong, enak deh
                                            pokoknya, kamu bisa lebih konsen belajar
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>

                            <div className='py-5 w-full'>
                                <Disclosure as='div' className='grid justify-items-stretch px-32'>
                                    {({ open }) => (
                                        <>
                                        <Disclosure.Button className="flex justify-between rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            Kak, ijazahnya ditahan ga?
                                            <ChevronRightIcon
                                            className={`${open ? "transform rotate-90 w-5 h-5" : "w-5 h-5"}`}
                                            />
                                        </Disclosure.Button>

                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-md">
                                            Ijazah kami simpan dan pasti aman, kami kembalikan jika sudah
                                            mengikuti ikatan dinas selama 2 tahun
                                        </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        </div>    
                    </div>


                    <div className='flex flex-col py-5 justify-center  bg-zinc-800 text-slate-300 items-center'>
                        <div className='flex flex-row space-x-28'>
                            <div className='flex flex-col'>
                                    <div className='text-2xl font-semibold py-2'>Site Map</div>
                                    <div className='flex flex-col'>
                                        <div>Programs</div>
                                        <div>Course Online</div>
                                        <div>Job Hiring</div>
                                        <div>About</div>
                                    </div>
                            </div>
                            

                            <div className='flex flex-col w-52'>
                                    <div className='text-2xl font-semibold py-2'>Our Campus</div>
                                    <div>
                                        Jl. Sambiloto No.20, Northridge, Sumur Batu,
                                        Babakan Madang, Sentul, Kab. Bogor
                                    </div>
                            </div>

                            <div className='flex flex-col'>
                                    <div className='text-2xl font-semibold py-2'>Contact Us</div>
                                    <div className='flex flex-col'>
                                        <div>WA:081313394655</div>
                                        <div>Email:novelina@code.id</div>
                                    </div>
                            </div>

                            <div className='flex flex-col'>
                                    <div className='text-2xl font-semibold py-2'>Operational Hours</div>
                                    <div className='flex flex-col'>
                                        <div>Senin-Jumat</div>
                                        <div>09:00-18-00</div>
                                    </div>
                            </div> 

                            <div className='flex flex-col'>
                                    <div className='flex flex-col py-2 items-center'>
                                        <div>
                                            <FontAwesomeIcon className='h-10 w-10' icon={faWhatsapp}/>
                                        </div>
                                        <div>Whatsapp</div>
                                    </div>
                                    <div className='flex flex-row space-x-5'>
                                        <div><FontAwesomeIcon className='h-5 w-5' icon={faFacebook}/></div>
                                        <div><FontAwesomeIcon className='h-5 w-5' icon={faInstagram}/></div>
                                        <div><FontAwesomeIcon className='h-5 w-5' icon={faYoutube}/></div>
                                        <div><FontAwesomeIcon className='h-5 w-5' icon={faTelegram}/></div>
                                    </div>
                            </div>    
                        </div>
                        
                        <div>
                            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©CodeAcademy 2022</span>
                        </div>
                    </div>
                </div>
                :
                <Outlet />}
            </main>
        </div>
    )
}