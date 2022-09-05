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
  GetOneRouteActionsRequest,
} from "../../../redux-saga/actions/RouteActions";

export default function EditRoute(props) {
  //modals
  let navigate = useNavigate();

  //CRUD tabel
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const { Modules } = useSelector((state) => state.ModulesState);
  const { RouteActions } = useSelector((state) => state.RouteActionsState);
  const { RouteAction } = useSelector((state) => state.RouteActionsState);

  useEffect(() => {
    dispatch(GetOneRouteActionsRequest(props.idRoute));
    setRefresh(false);
  }, [refresh]);

  console.log(props.idRoute);
  console.log("isi Route");
  console.log(RouteAction.roac_id);
  console.log(RouteAction.roac_name);

  //edit route
  const validationSchema = Yup.object().shape({
    roac_name: Yup.string("Masukkan route name").required(
      "\n Data Harus Diisi Kak"
    ),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      roac_name: RouteAction.roac_name,
      roac_module_name: RouteAction.roac_module_name,
      roac_orderby: RouteAction.roac_orderby,
      roac_display: RouteAction.roac_display,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const test = {
        id: props.idRoute,
        roac_name: values.roac_name,
        roac_module_name: values.roac_module_name,
        roac_orderby: values.roac_orderby,
        roac_display: values.roac_display,
      };
      console.log(test);

      dispatch(EditRouteActionsRequest(test));
      props.closeEditRoute();
      window.alert("Data Succesfully Edited");
      props.onRefreshRoute();
    },
  });

  return (
    <div class="grid xl:grid-cols-3 gap-4 -mt-12 sm:grid-cols-1 ">
      <div
        id="route"
        className="mb-4 my-56 xl:col-start-2 shadow-xl rounded-md sm:col-start-1"
      >
        <h1 className="m-2"></h1>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex font-medium">
          Edit Route
        </div>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-center">
            <div className="mt-3 text-center sm:mt-0 sm:text-left">
              <div className="mt-2">
                <form>
                  <table border="1" width="auto">
                    <tr>
                      <td>
                        {" "}
                        <label className="">Route Name</label>
                      </td>
                      <td colspan="3">
                        <input
                          className="input p-2 border-2 rounded w-full "
                          placeholder="Apply Application"
                          type="text"
                          name="roac_name"
                          id="roac_name"
                          value={formik.values.roac_name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          onInvalid={formik.validateField}
                          autoComplete="roac_name"
                        />
                        {formik.touched.roac_name && formik.errors.roac_name ? (
                          <span className="mt-2 text-sm text-red-600">
                            {formik.errors.roac_name}
                          </span>
                        ) : null}
                      </td>
                    </tr>
                    <tr className="mb-6">
                      <td width="20%">
                        {" "}
                        <label className="">Module</label>
                      </td>
                      <td width="50%">
                        <input
                          className="input p-2 border-2 rounded "
                          placeholder="Skill Type"
                          type="text"
                          name="roac_module_name"
                          id="roac_module_name"
                          value={formik.values.roac_module_name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          onInvalid={formik.validateField}
                          autoComplete="roac_module_name"
                        />
                        {formik.touched.roac_module_name &&
                        formik.errors.roac_module_name ? (
                          <span className="mt-2 text-sm text-red-600">
                            {formik.errors.roac_module_name}
                          </span>
                        ) : null}
                      </td>
                      <td width="15%">
                        <label className="">Order By</label>
                      </td>
                      <td width="15%">
                        <input
                          className="input w-14 p-2 border-2 rounded "
                          type="number"
                          name="roac_orderby"
                          id="roac_orderby"
                          value={formik.values.roac_orderby}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          onInvalid={formik.validateField}
                          autoComplete="roac_orderby"
                        />
                        {formik.touched.roac_orderby &&
                        formik.errors.roac_orderby ? (
                          <span className="mt-2 text-sm text-red-600">
                            {formik.errors.roac_orderby}
                          </span>
                        ) : null}
                      </td>
                    </tr>
                    <tr className="">
                      <td>
                        <label className="">Display</label>
                      </td>
                      <td>
                        <label
                          htmlFor="checked-toggle-modal"
                          className="mt-2.5 inline-flex relative items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            value=""
                            id="checked-toggle-modal"
                            className="sr-only peer "
                          ></input>
                          <div className=" w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                      </td>
                      <td className=""></td>
                    </tr>
                  </table>
                </form>
                {/* <div>
                  <label className="">Route Name : </label>
                  <input
                    className="input p-2 border-2 rounded autoFocus"
                    type="text"
                    name="roac_name"
                    id="roac_name"
                    value={formik.values.roac_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    //onInvalid={formik.validateField}
                    autoComplete="roac_name"
                  />
                  {formik.touched.roac_name && formik.errors.roac_name ? (
                    <span className="mt-2 text-sm text-red-600">
                      {formik.errors.roac_name}
                    </span>
                  ) : null}
                </div> */}
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
            onClick={() => props.closeEditRoute()}
          >
            Cancel
          </button>
        </div>
      </div>
      <div id="blocking" className="mb-4 my-56 col-start-2 rounded-md"></div>
    </div>
  );
}
