import Page from '../../../component/commons/Page';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from 'formik'
import { useNavigate, NavLink, Link, useParams, useLocation } from 'react-router-dom';
import BatEvaApi from '../../../api/api-bateva'

import * as Yup from "yup";

import {
  GetBatEvaRequest,
  DelBatEvaRequest,
  AddBatEvaRequest,
  AddBatEvaSuccess
} from "../../../redux-saga/actions/BatEvaAction";

export default function BatchStudentEvaluation(props) {
  const dispatch = useDispatch()
  const [BatEva, setBatEva] = useState()
  let navigate = useNavigate();
  const {id} = useParams()
  
// Get Data

useEffect(() => {
  BatEvaApi.findOne(id).then((data) => {
    setBatEva(data)
  });
}, [])


const validationSchema = Yup.object().shape({
  base_grade: Yup.string("Enter Base Grade").required("Grade Fundamental is required"),
  base_grade1: Yup.string("Enter Base Grade").required("Grade OOP is required"),
  base_grade2: Yup.string("Enter Base Grade").required("Grade Database is required"),
  base_grade3: Yup.string("Enter Base Grade").required("Grade Communication is required"),
  base_grade4: Yup.string("Enter Base Grade").required("Grade Team Work is required"),
  base_grade5: Yup.string("Enter Base Grade").required("Grade Self Learning is required"),

});


//Maping Untuk base_id
const BaseId = BatEva &&
            BatEva.map((count) => {return count.bast_id})

const formik = useFormik({
 
  enableReinitialize: true,
  initialValues: {
    base_type : 'Technical',
    base_type1 : 'Technical',
    base_type2 : 'Technical',
    base_type3 : 'Softskill',
    base_type4 : 'Softskill',
    base_type5 : 'Softskill',

    base_skill : 'Fundamental',
    base_skill1 : 'Database',
    base_skill2 : 'OOP',
    base_skill3 : 'Communication',
    base_skill4 : 'Teamwork',
    base_skill5 : 'Self-Learning',

    base_grade : '',
    base_grade1 : '',
    base_grade2 : '',
    base_grade3 : '',
    base_grade4 : '',
    base_grade5 : '',
    
    base_bast_id : BaseId,
    
 
   
  },
  validationSchema: validationSchema,
      onSubmit: async (values) => {
    let payload = new FormData();
    payload.append("base_type",values.base_type );
    payload.append("base_skill", values.base_skill);
    payload.append("base_grade", parseInt(values.base_grade));
    payload.append("base_bast_id", parseInt(values.base_bast_id));

    payload.append("base_type1",values.base_type1);
    payload.append("base_skill1", values.base_skill1);
    payload.append("base_grade1", parseInt(values.base_grade1));
    payload.append("base_bast_id1", parseInt(values.base_bast_id));

    payload.append("base_type2",values.base_type2);
    payload.append("base_skill2", values.base_skill2);
    payload.append("base_grade2", parseInt(values.base_grade2));
    payload.append("base_bast_id2", parseInt(values.base_bast_id));


    payload.append("base_type3",values.base_type3);
    payload.append("base_skill3", values.base_skill3);
    payload.append("base_grade3", parseInt(values.base_grade3));
    payload.append("base_bast_id3", parseInt(values.base_bast_id));


    payload.append("base_type4",values.base_type4);
    payload.append("base_skill4", values.base_skill4);
    payload.append("base_grade4", parseInt(values.base_grade4));
    payload.append("base_bast_id4", parseInt(values.base_bast_id));

    payload.append("base_type5",values.base_type5);
    payload.append("base_skill5", values.base_skill5);
    payload.append("base_grade5", parseInt(values.base_grade5));
    payload.append("base_bast_id5", parseInt(values.base_bast_id));

    
   window.alert("Data Berhasil Disimpan");
    dispatch(AddBatEvaRequest(payload));
   
    navigate('/app/batch')
    
  },
});
  
  
  return (
    <Page>
   
        {BatEva &&
            BatEva.map((count) => {
              return (   
                  
<div class="flex flex-col" >
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8" >
   
    <div class = "py-2 inline-block min-w-full sm:px-6 lg:px-8  border border-10 p-4">
      <div class = "float-left">
      <h2 class ="text-2xl">
         {count.batch_name} Bootcamp. NET Framework Evaluation
      </h2>
      </div>
      <div class = " absolute right-1 float-left ml-12">
      <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-3" onClick={() => navigate("/app/batch/")}>Back</button>
      <button type="button" class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-3"  onClick={formik.handleSubmit}>Save</button>
      </div>
    </div>
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8  border border-10 p-4" >
      <div class="overflow-hidden " >
       <div class ="relative w-24 float-left">
        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
           class="rounded-full w-32 p-2 "
            alt="Avatar"/>
       </div>
       <div class =" float-left mx-3">
       <p class = "text-2xl">{count.user_first_name}</p>
       <p class = "text-xm">{count.batch_name}, {count.bast_status}</p>
       <p class = " text-xm">{count.batch_start_date} until {count.batch_end_date}</p>
       </div>
       <div class =" float-left mx-14 mt-2">
       <p class = "text-xm">{count.usdu_school}</p>
       <p class = "text-xm">Jurusan {count.usdu_field_study}</p>
       <p class = "text-xm">IPK : {count.usdu_grade}</p>
       
       </div>
       <div class =" float-left mx-14 mt-6 ml-4">
       <p class = " absolute right-20 text-2xl">Score : {count.bast_total_score}</p>
       </div>
       <div>

       </div>
      </div>
    </div>
    <div class ="container mx-auto p-4 py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <details class ="bg-white shadow rounded group " open>
          <summary class =" list-none flex flex-wrap items-center text-2xl border-2 border-gray-600  ">
            <h3 class="flex flex-1 p-4 font-semibold">Technical</h3>
            <div class ="flex w-10 items-center justify-center">
              <div class = "border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left">  
              </div>
            </div>
          </summary>
          <div class ="pr-6 p-4 float-left">
            <p class ="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding">Fundamental</p>
            <p class ="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding">Object Oriented Programming (OOP)</p>
            <p class ="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding">Database</p>
          </div>
          <div class ="p-4 float-left mr-20">
          <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
           rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="base_grade" 
            id="base_grade" 
            value={formik.values.base_grade}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            maxlength="1"  max="4" min="0"/>
             {formik.touched.base_grade && formik.errors.base_grade ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.base_grade}</span>
                                    ) : null}
            <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
           rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="base_grade1"
             id="base_grade1"  
             value={formik.values.base_grade1}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur} maxlength="1"  max="4" min="0"/>
             {formik.touched.base_grade1 && formik.errors.base_grade1 ? (
                                        <span className="mt-2 text-sm text-red-600">{formik.errors.base_grade1}</span>
                                    ) : null}
            <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
           rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
           name="base_grade2"
            id="base_grade2" 
             value={formik.values.base_grade2}
             onChange={formik.handleChange} 
             onBlur={formik.handleBlur} maxlength="1"  max="4" min="0"/> 
             {formik.touched.base_grade2 && formik.errors.base_grade2 ? (
              <span className="mt-2 text-sm text-red-600">{formik.errors.base_grade2}</span>
          ) : null}
            
          </div>
        </details>
    </div>
    <div class ="container mx-auto p-4 py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <details class ="bg-white shadow rounded group " open>
          <summary class =" list-none flex flex-wrap items-center text-2xl border-2 border-gray-600  ">
            <h3 class="flex flex-1 p-4 font-semibold">Softskill</h3>
            <div class ="flex w-10 items-center justify-center">
              <div class = "border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left">  
              </div>
            </div>
          </summary>
          <div class ="p-4 float-left  mr-20">
            <p class ="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding">Communication</p>
            <p class ="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding">Teamwork</p>
            <p class ="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding">Self-Learning</p>
          </div>
          <div class ="p-4 float-left  ml-20">
          <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
           rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="base_grade3"
             id="base_grade3" 
              value={formik.values.base_grade3}
               onChange={formik.handleChange
               } onBlur={formik.handleBlur} 
               maxlength="1"  max="4" min="0"/>
                {formik.touched.base_grade3 && formik.errors.base_grade3 ? (
              <span className="mt-2 text-sm text-red-600">{formik.errors.base_grade3}</span>
          ) : null}
            
            <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
           rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
           name="base_grade4"
            id="base_grade4"
              value={formik.values.base_grade4}
               onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                maxlength="1"  max="4" min="0" />
                 {formik.touched.base_grade4 && formik.errors.base_grade4 ? (
              <span className="mt-2 text-sm text-red-600">{formik.errors.base_grade4}</span>
          ) : null}
            <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
           rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="base_grade5" 
            id="base_grade5"
              value={formik.values.base_grade5} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
               maxlength="1"  max="4" min="0"/>
                {formik.touched.base_grade5 && formik.errors.base_grade5 ? (
              <span className="mt-2 text-sm text-red-600">{formik.errors.base_grade5}</span>
          ) : null}
            
          </div>
        </details>
    </div>
    <div class ="container mx-auto p-4 py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <details class ="bg-white shadow rounded group " open>
          <summary class =" list-none flex flex-wrap items-center text-2xl border-2 border-gray-600  ">
            <h3 class="flex flex-1 p-4 font-semibold">Presentation</h3>
            <div class ="flex w-10 items-center justify-center">
              <div class = "border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left">  
              </div>
            </div>
          </summary>
          <div class ="p-4 mr-20 border boder-green ">
           
          </div>
         
          
        </details>
    </div>
    
    
  </div>
</div>
              );
            })}
        
    </Page>
  )
}
