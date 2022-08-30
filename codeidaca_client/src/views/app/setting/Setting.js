import React, { Fragment,useEffect,useState } from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Setting() {
    let navigate = useNavigate()
    let location = useLocation();
    const [refresh, setRefresh] = useState(false)
    let from = location.state?.from?.pathname || "/";

  return (
    <div className='relative flex flex-col p-2 z-0'>
        <div className='mr-5 p-3 border-b border-slate-200 border-width-1 mb-2'>
            {{ 
              '/Setting/Category': 
              <div className='flex flex-row space-x-3'>
                  <div>
                  <Link to="/" onClick={() => location.pathname.reload()}>
                    <button className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <FontAwesomeIcon className='mr-1 py-1' icon={solid('house-chimney')}/>Home
                    </button>
                  </Link>
                  </div>

                  <div>
                    <FontAwesomeIcon icon={solid('angle-right')}/>
                  </div>

                  <div className='mr-1'>
                    <a href='/Setting' className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Master
                    </a>
                  </div>

                  <div>
                    <FontAwesomeIcon icon={solid('angle-right')}/>
                  </div>

                  <div className='text-base font-medium'>
                  Category
                  </div>
                </div>,

              '/Setting/Skill':
              <div className='flex flex-row space-x-3'>
                  <div>
                  <Link to="/" onClick={() => location.pathname.reload()}>
                    <button className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <FontAwesomeIcon className='mr-1 py-1' icon={solid('house-chimney')}/>Home
                    </button>
                  </Link>
                  </div>

                  <div>
                    <FontAwesomeIcon icon={solid('angle-right')}/>
                  </div>

                  <div className='mr-1'>
                    <a href='/Setting' className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Master
                    </a>
                  </div>

                  <div>
                    <FontAwesomeIcon icon={solid('angle-right')}/>
                  </div>

                  <div className='text-base font-medium'>
                  Skill
                  </div>
                </div>,

              '/Setting/Module':
              <div className='flex flex-row space-x-3'>
                  <div>
                  <Link to="/" onClick={() => location.pathname.reload()}>
                    <button className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <FontAwesomeIcon className='mr-1 py-1' icon={solid('house-chimney')}/>Home
                    </button>
                  </Link>
                </div>

                <div>
                  <FontAwesomeIcon icon={solid('angle-right')}/>
                </div>

                <div className='mr-1'>
                    <a href='/Setting' className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Master
                    </a>
                  </div>

                  <div>
                    <FontAwesomeIcon icon={solid('angle-right')}/>
                  </div>

                  <div className='text-base font-medium'>
                Category
                </div>
            </div>,

              '/Setting/Location': 
              <div className='flex flex-row space-x-3'>
                  <div>
                  <Link to="/" onClick={() => location.pathname.reload()}>
                    <button className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <FontAwesomeIcon className='mr-1 py-1' icon={solid('house-chimney')}/>Home
                    </button>
                  </Link>
                    </div>

                    <div>
                      <FontAwesomeIcon icon={solid('angle-right')}/>
                    </div>

                    <div className='mr-1'>
                    <a href='/Setting' className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Master
                    </a>
                  </div>

                  <div>
                    <FontAwesomeIcon icon={solid('angle-right')}/>
                  </div>

                  <div className='text-base font-medium'>
                    Location
                    </div>
                </div>,

              '/Setting': 
              <div className='flex flex-row space-x-3'>
                  <div>
                  <Link to="/" onClick={() => location.pathname.reload()}>
                    <button className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <FontAwesomeIcon className='mr-1 py-1' icon={solid('house-chimney')}/>Home
                    </button>
                  </Link>
                  </div>

                  <div>
                    <FontAwesomeIcon icon={solid('angle-right')}/>
                  </div>

                  <div className='text-base font-medium'>
                    Master
                  </div> 
              </div>
            }[location.pathname] }
        </div>
        
        <div className='flex flex-row item-stretch'>
          <div className='flex flex-col basis-2/12 space-y-5 p-2 border-2 border-2 border-slate-400 h-60 rounded-lg'>
            <div className='text-2xl font-semibold'>Master Data</div>

            <ul className="list-disc pl-5">
            <li>
              <Link to="Category">
              <button className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Category
              </button>
            </Link>
            </li>

            <li>
            <Link to="Skill">
              <button className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Skill
              </button>
            </Link>
            </li>

            <li>
            <Link to="Module">
              <button className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Modules
              </button>
            </Link>
            </li>

            <li>
            <Link to="Location">
              <button className="transition inline-flex w-full rounded-md text-base font-medium text-slate-600 hover:text-red-500 px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Locations
              </button>
            </Link>
            </li>
            </ul>
          </div>

          <main className='ml-1 basis-10/12 w-auto pt-2'>
              <Outlet />
          </main>
        </div>
    </div>
  )
}
