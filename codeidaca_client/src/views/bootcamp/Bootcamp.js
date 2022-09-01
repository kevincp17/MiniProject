import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { GetBootcampProgramRequest } from "../../redux-saga/actions/BootcampProgram";
import { GetSearchProgramRequest } from "../../redux-saga/actions/BootcampProgram"
import { GetStudentReviewRequest } from "../../redux-saga/actions/StudentReview";
import config from "../../config/config";
import Slider from 'react-slick';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube, AiOutlineWhatsApp } from "react-icons/ai";
import { Rating } from 'react-simple-star-rating';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'

export default function Bootcamp() {
  const dataSlider = [
    {
      id: 1,
      title: "Bootcamp Reguler",
      main: "Bootcamp reguler dilakukan secara offline di Sentul Bogor, kamu akan diisolasi selama 3 bulan, makan gratis 3x, menginap gratis dan kamu bisa belajar bareng bersama mentor dan teman-teman kamu",
      image: '../assets/images/b-reguler.png',

    },
    {
      id: 2,
      title: "Bootcamp Online",
      main: "Bootcamp Online dilakukan secara online dan diguide by mentor, kamu akan belajar dari Senin-Jumat dari jam 8.00-17.00. Materi selain diajarkan mentor, akan diprovide juga materi video",
      image: '../assets/images/b-online.png',

    },
    {
      id: 3,
      title: "Bootcamp Corporate",
      main: "Bootcamp Corporate adalah bootcamp special, artinya kamu akan langsung di placement ketika baru masuk bootcamp, tapi filtering testnya sangatlah strict, karena yang melakukan filtering test adalah client corporate",
      image: '../assets/images/b-corporate.png',

    }
  ]

  const sliderTop = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3600
  };

  const sliderBottom = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const dispatch = useDispatch()
  // const [searchValue, setSearchValue] = useState('')
  const { bootcampProgram } = useSelector(state => state.bootcampProgramState)
  const { studentReview } = useSelector(state => state.studentReviewState)

  useEffect(() => {
    dispatch(GetBootcampProgramRequest('Bootcamp'))
    // console.log('state bp')
    // console.log(bootcampProgram)

    dispatch(GetStudentReviewRequest())
    // console.log('state')
    // console.log(studentReview)
  }, [dispatch]);

  // useEffect(() => {
  //   console.log('state hasil')
  //   console.log(bootcampProgram)
  // }, [bootcampProgram])

  const onSubmitSearch = (e) => {
    e.preventDefault()
    // if (e.target.search.value) {
    const payload = {
      progType: 'Bootcamp',
      progTitle: e.target.search.value
    }
    dispatch(GetSearchProgramRequest(payload))
    console.log('search', e)
    console.log(e.target.search.value)
    // } else {
    //   dispatch(GetBootcampProgramRequest('Bootcamp'))
    // }
  }

  const onChangeSearch = (e) => {
    if (!e.target.value) {
      dispatch(GetBootcampProgramRequest('Bootcamp'))
    }
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 ">
        <div className="bg-gradient-to-r from-orange-300 to-yellow-200 w-full rounded-2xl" style={{ height: "450px" }}>
          <Slider {...sliderTop}>
            {
              dataSlider.map((item, index) => {
                return (
                  <div key={index} className="w-full" >
                    <div className="flex my-10" style={{ marginLeft: "90px", marginRight: "20px" }}>
                      <div className="flex-auto w-72 font-sans ml-3 text-slate-600 ">
                        <div className="text-5xl mt-4 font-semibold">
                          {item.title}
                        </div>
                        <div className="text-2xl mt-4 ml-1">
                          {item.main}
                        </div>
                      </div>
                      <div className="flex-auto w-20" style={{ marginLeft: "10px" }}>
                        <img className="mx-auto w-4/6 ml-7" src={item.image} alt={item.title} />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div >

        <form onSubmit={onSubmitSearch} className="flex mt-10 justify-center items-center">
          <div className="relative w-5/6 md:w-4/6 lg:w-3/6">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input onChange={onChangeSearch} name="search" type="search" id="default-search" className="block p-4 pl-10 w-full text-xs sm:text-sm md:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-200 focus:border-orange-200 placeholder-gray-500 placeholder-opacity-50" placeholder="Java, NodeJS, Net" required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-700 font-medium rounded-lg text-xs sm:text-sm md:text-base px-4 py-2 ">Search</button>
          </div>
        </form>

        {
          bootcampProgram.length === 0 ? (
            <div className="mt-12 text-center">
              Program tidak tersedia
            </div>
          ) :
            (
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                  bootcampProgram && bootcampProgram.map(value => {
                    return (
                      <div className="my-5" key={value.prog_id}>
                        <div className=" mx-auto rounded-2xl overflow-hidden shadow-2xl h-full py-3 bg-slate-100 w-9/12">
                          <div className="mx-auto my-3 w-4/5">
                            <img className="w-1/2 mt-5 mb-8 mx-auto bg-slate-200" crossOrigin='anonymous' src={config.domain + '/bootcamp-program/file/' + value.prog_image} alt="" />
                            <div className="text-lg font-medium">
                              {value.prog_title}
                            </div>
                            <div className=" text-base">
                              {value.prog_headline}<br />
                              Durasi: 3 Bulan<br />
                              {value.prog_learning_type}
                            </div>
                            <button className="float-right mt-4 mb-3 px-3 py-1 rounded-lg bg-orange-400 text-white">Curriculum</button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )
        }

        <div className="text-2xl font-medium mt-12 mb-3 ">
          Testimonial
        </div>
        <Slider className="px-5 py-5 rounded-xl" {...sliderBottom} >
          {
            studentReview && studentReview.map(value => (
              <div key={value.user_entity_id} className="max-w-sm rounded-2xl overflow-hidden p-4 h-80 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-300 border-orange-100 text-center" style={{ height: "100px" }}>
                <div className="mx-auto w-4/5">
                  <div className="h-28 mt-8 text-base" >
                    {/* <div className="flex flex-col	items-center justify-center h-28 min-h-fit mt-10 text-base mx-5" > */}
                    "{value.bore_review}"
                  </div>
                  <div className="flex justify-center text-left mt-1">
                    <img className="w-1/4" src={config.domain + '/student-review/file/' + value.user_photo} alt={value.user_first_name} style={{ borderRadius: "50%" }} />
                    <div className="w-2/6 text-lg my-auto mx-2 text-white">
                      {value.user_first_name}
                      {/* <div className="text-yellow-400 text-xl">
                      <StarsRating config={conf} style={{ height: "50px" }} />
                    </div> */}
                      <Rating
                        initialValue={value.bore_rating}
                        readonly={true}
                        allowHover={false}
                        fullIcon='★'
                        emptyIcon='☆'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider >
      </div>

      <div className='flex flex-col text-center py-5 mt-10 justify-center min-w-full bg-slate-100 text-slate-800 items-center'>
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
            <div className='text-2xl font-semibold py-2'>Reach Us</div>
            <div className='flex flex-col justify-center items-center'>
              <Link to="#" className="flex pb-2 ">
                <AiOutlineFacebook size={25} />Facebook
              </Link>
              <Link to="#" className="flex pb-2">
                <AiOutlineInstagram size={25} />Instagram
              </Link>
              <Link to="#" className="flex pb-2">
                <AiOutlineYoutube size={25} />Youtube
              </Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='text-2xl font-semibold py-2'>Operational Hours</div>
            <div className='flex flex-col'>
              <div>Senin-Jumat</div>
              <div>09:00-18-00</div>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©CodeAcademy 2022</span>
        </div>
      </div>
    </div >
  );
}