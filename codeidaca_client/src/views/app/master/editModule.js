import Page from "../../../component/commons/Page";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import {
  React,
  Fragment,
  useRef,
  useState,
  useEffect,
  setDisplay,
  setRefresh,
} from "react";
import { Dialog, Transition, Switch } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  GetModulesRequest,
  AddModulesRequest,
  EditModulesRequest,
  DelModulesRequest,
  GetOneModulesRequest,
} from "../../../redux-saga/actions/Modules";
import {
  GetRouteActionsRequest,
  AddRouteActionsRequest,
  EditRouteActionsRequest,
  DelRouteActionsRequest,
} from "../../../redux-saga/actions/RouteActions";

export default function EditModule(props) {
  //modals
  const cancelButtonRef = useRef(null);
  let navigate = useNavigate();

  //CRUD tabel
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const { Modules } = useSelector((state) => state.ModulesState);
  const { Module } = useSelector((state) => state.ModulesState);
  const { RouteActions } = useSelector((state) => state.RouteActionsState);

  useEffect(() => {
    dispatch(GetOneModulesRequest(props.idModule));
  }, []);

  console.log(props.idModule);
  console.log("isi Module");
  console.log(Modules.module_name);
  console.log(Module.module_name);

  //edit module
  const validationSchema = Yup.object().shape({
    module_name: Yup.string("Masukkan module name").required(
      "\n Data Harus Diisi Kak"
    ),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      module_name: Module.module_name,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const test = {
        id: props.idModule,
        module_name: values.module_name,
      };
      //console.log(test);

      dispatch(EditModulesRequest(test));
      props.closeEditModule();
      window.alert("Data Succesfully Edited");
      props.onRefresh();
    },
  });

  return (
    <div class="grid xl:grid-cols-3 gap-4 -mt-12 sm:grid-cols-1 ">
      <div
        id="modules"
        className="mb-4 my-56 xl:col-start-2 shadow-xl rounded-md sm:col-start-1"
      >
        <h1 className="m-2"></h1>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex font-medium">
          Edit Module
        </div>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left">
              <div className="mt-2">
                <div>
                  <label className="">Module Name : </label>
                  <input
                    className="input p-2 border-2 rounded autoFocus"
                    type="text"
                    name="module_name"
                    id="module_name"
                    value={formik.values.module_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    //onInvalid={formik.validateField}
                    autoComplete="module_name"
                  />
                  {formik.touched.module_name && formik.errors.module_name ? (
                    <span className="mt-2 text-sm text-red-600">
                      {formik.errors.module_name}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="submit"
            className="transition text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer border px-4 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={formik.handleSubmit}
            //onClick={() => setOpenModuleAdd(false)}
          >
            Save
          </button>
          <button
            type="button"
            className="mr-4 transition text-black-500 hover:bg-gray-200 hover:text-black border-2 border-gray-400 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => props.closeEditModule()}
          >
            Cancel
          </button>
        </div>
      </div>
      <div id="blocking" className="mb-4 my-56 col-start-2 rounded-md"></div>
    </div>
  );
}
