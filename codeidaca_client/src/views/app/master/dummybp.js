import Page from "../../../component/commons/Page";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import { React, Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetModulesRequest,
  AddModulesRequest,
  EditModulesRequest,
  DelModulesRequest,
  GetOneModulesRequest,
} from "../../../redux-saga/actions/Modules";
import moduleApi from "../../../api/api-modules";
//edit
import EditModule from "./editModule";
import EditRoute from "./editRouteActions";

import {
  GetRouteActionsRequest,
  AddRouteActionsRequest,
  EditRouteActionsRequest,
  DelRouteActionsRequest,
  GetOneRouteActionsRequest,
} from "../../../redux-saga/actions/RouteActions";

//add
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Dummybp() {
  const [open, setOpen] = useState(false);
  const [openRoute, setOpenRoute] = useState(false);

  const cancelButtonRef = useRef(null);
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [displayEditModule, setDisplayEditModule] = useState(false);
  const [displayEditRoute, setDisplayEditRoute] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [idModule, setIdModule] = useState();
  const [idRoute, setIdRoute] = useState();
  const [id, setId] = useState();
  const { Modules } = useSelector((state) => state.ModulesState);
  const { RouteActions } = useSelector((state) => state.RouteActionsState);

  useEffect(() => {
    dispatch(GetModulesRequest());
    dispatch(GetRouteActionsRequest());
    //setRefresh(false)
  }, []);

  //add module
  const validationSchema = Yup.object().shape({
    module_name: Yup.string("Enter module name").required(
      "module name is required"
    ),
  });

  const formik = useFormik({
    initialValues: {
      module_name: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const test = {
        ...values,
      };
      console.log(test);

      dispatch(AddModulesRequest(test));

      // const route = {
      //   ...values,
      // };
      // console.log(route);
      // dispatch(AddRouteActionsRequest(route));
    },
  });

  //edit module
  console.log(idModule);
  const onClick = (idModule) => {
    setDisplayEditModule(true);
    setIdModule(idModule);
  };
  //edit route
  console.log(idRoute);
  const onClickRoute = (idRoute) => {
    setDisplayEditRoute(true);
    setIdRoute(idRoute);
  };

  //del module

  const onDelete = (modName) => {
    dispatch(DelModulesRequest(modName));
  };
  //del route

  const onDeleteRoute = (roacId) => {
    dispatch(DelRouteActionsRequest(roacId));
  };

  //add route

  const validationSchemaRoute = Yup.object().shape({
    roac_name: Yup.string("Enter route name").required(
      "route name is required"
    ),
  });

  const formikRoute = useFormik({
    initialValues: {
      roac_name: "",
    },
    validationSchemaRoute: validationSchemaRoute,
    onSubmit: async (values) => {
      const route = {
        ...values,
      };
      console.log(route);

      dispatch(AddRouteActionsRequest(route));
    },
  });

  return (
    <Page
      title="Master Module"
      titleButton="Administrator"
      onClick={() => navigate("/app/dummybp")}
    >
      <div>
        {displayEditModule ? (
          <EditModule
            closeAdd={() => setDisplayEditModule(false)}
            onRefresh={() => setRefresh(true)}
            id={id}
            setDisplay={setDisplayEditModule}
          />
        ) : displayEditRoute ? (
          <EditRoute
            closeEditRoute={() => setDisplayEditRoute(false)}
            onRefreshRoute={() => setRefresh(true)}
            idRoute={idRoute}
            setDisplayRoute={setDisplayEditRoute}
          />
        ) : (
          <>
            <div id="moduleadd">
              <div>
                <label className="">Module Name : </label>
                <input
                  className=""
                  type="text"
                  name="module_name"
                  id="module_name"
                  value={formik.values.module_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onInvalid={formik.validateField}
                  autoComplete="module_name"
                />
                {formik.touched.module_name && formik.errors.module_name ? (
                  <span className="mt-2 text-sm text-red-600">
                    {formik.errors.module_name}
                  </span>
                ) : null}

                <div>
                  <button
                    type="submit"
                    className="border-2 px-4"
                    onClick={formik.handleSubmit}
                  >
                    {" "}
                    Simpan{" "}
                  </button>
                  <button
                    className="border-2"
                    onClick={() => navigate("/app/dummybp")}
                  >
                    {" "}
                    Cancel{" "}
                  </button>
                </div>
              </div>
            </div>
            <br></br>
            <div id="routeadd">
              <div>
                <label className="">Route Name : </label>
                <input
                  className=""
                  type="text"
                  name="roac_name"
                  id="roac_name"
                  value={formikRoute.values.roac_name}
                  onChange={formikRoute.handleChange}
                  onBlur={formikRoute.handleBlur}
                  onInvalid={formikRoute.validateField}
                  autoComplete="roac_name"
                />
                {formikRoute.touched.roac_name &&
                formikRoute.errors.roac_name ? (
                  <span className="mt-2 text-sm text-red-600">
                    {formikRoute.errors.roac_name}
                  </span>
                ) : null}

                <div>
                  <button
                    type="submit"
                    className="border-2 px-4"
                    onClick={formikRoute.handleSubmit}
                  >
                    {" "}
                    Simpan{" "}
                  </button>
                  <button className="border-2"> Cancel </button>
                </div>
              </div>
            </div>
            {/* modules */}
            <div>
              <table className="text-sm text-left text-gray-500 dark:text-gray-400 table-fixed table-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th>Module Name</th>
                  </tr>
                </thead>
                <tbody className="overscroll-auto md:overscroll-contain">
                  {Modules &&
                    Modules.map((mod) => {
                      return (
                        <tr
                          key={mod.module_name}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {mod.module_name}
                          </td>
                          <td>
                            <button
                              type="button"
                              onClick={() => onClick(mod.module_name)}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              onClick={() => onDelete(mod.module_name)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            {/* route */}
            <div>
              <table className="text-sm text-left text-gray-500 dark:text-gray-400 table-fixed table-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th>Route Name</th>
                  </tr>
                </thead>
                <tbody className="overscroll-auto md:overscroll-contain">
                  {RouteActions &&
                    RouteActions.map((route) => {
                      return (
                        <tr
                          key={route.roac_name}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {route.roac_name}
                          </td>
                          <td>
                            <button
                              type="button"
                              onClick={() => onClickRoute(route.roac_id)}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              onClick={() => onDeleteRoute(route.roac_id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>{" "}
          </>
        )}
      </div>
    </Page>
  );
}
