import Page from "../../../component/commons/Page";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import React, {
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

import EditModule from "./editModule";
import EditRoute from "./editRouteActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Module() {
  //modals
  const [openModuleAdd, setOpenModuleAdd] = useState(false);
  const [openModuleEdit, setOpenModuleEdit] = useState(false);
  const [openModuleDelete, setOpenModuleDelete] = useState(false);

  const [openRouteAdd, setOpenRouteAdd] = useState(false);
  const [openRouteEdit, setOpenRouteEdit] = useState(false);
  const [openRouteDelete, setOpenRouteDelete] = useState(false);

  const cancelButtonRef = useRef(null);
  let navigate = useNavigate();

  //switch toggle
  const [enabled, setEnabled] = useState(false);
  const [displaytoggle, setDisplayToggle] = useState(false);
  const [switchDisplay, setSwitchDisplay] = useState(false);

  const onClickSwitchDisplay = "";
  let routeDisplay = 0;

  //CRUD tabel
  const dispatch = useDispatch();

  const [display, setDisplay] = useState(false);
  const [displayEditModule, setDisplayEditModule] = useState(false);
  const [displayEditRoute, setDisplayEditRoute] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [id, setId] = useState();
  const [idModule, setIdModule] = useState();
  const [idRoute, setIdRoute] = useState();
  const [idEditModule, setIdEditModule] = useState();
  const [idEditRoute, setIdEditRoute] = useState();
  const { Modules } = useSelector((state) => state.ModulesState);
  const { RouteActions } = useSelector((state) => state.RouteActionsState);

  useEffect(() => {
    dispatch(GetModulesRequest());
    dispatch(GetRouteActionsRequest());
    //dispatch(GetOneModulesRequest(idModule));
    setRefresh(false);
  }, [refresh]);

  //add module
  const validationSchema = Yup.object().shape({
    module_name: Yup.string("Masukkan module name").required(
      "\n Data Harus Diisi Kak"
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
      setOpenModuleAdd(false);
      window.alert("Data Succesfully Added");
    },
  });

  //edit module
  console.log(idEditModule);
  const onClickEditModule = (idEditModule) => {
    setDisplayEditModule(true);
    setIdEditModule(idEditModule);
  };

  const formikEditModule = useFormik({
    initialValues: {
      module_name: Modules.module_name,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const test = {
        ...values,
        //module_name: values.module_name,
      };
      console.log(test);

      dispatch(EditModulesRequest(test));
      setOpenModuleEdit(false);
    },
  });

  //del module
  console.log();
  const onClickModuleDelete = (modName) => {
    setIdModule(modName);
    setOpenModuleDelete(true);
  };

  const onDeleteModules = (idModule) => {
    dispatch(DelModulesRequest(idModule));
    setOpenModuleDelete(false);

    window.alert("Data Succesfully Deleted");
    setRefresh();
  };

  //add route

  const validationSchemaRoute = Yup.object().shape({
    roac_name: Yup.string("Enter route name").required(
      "route name is required"
    ),
    roac_module_name: Yup.string("Enter route module_name").required(
      "route module_name is required"
    ),
  });

  const formikRoute = useFormik({
    initialValues: {
      roac_name: "",
      roac_module_name: "",
    },
    validationSchemaRoute: validationSchemaRoute,
    onSubmit: async (values) => {
      const route = {
        ...values,
      };
      console.log(route);

      dispatch(AddRouteActionsRequest(route));
      setOpenRouteAdd(false);
      window.alert("Data Succesfully Added");
    },
  });

  //edit route
  //console.log(idRoute);
  const onClickEditRoute = (idRoute) => {
    setDisplayEditRoute(true);
    setIdRoute(idRoute);
  };

  //del route
  const onClickRouteDelete = (roacId) => {
    setIdRoute(roacId);
    setOpenRouteDelete(true);
  };

  const onDeleteRoute = (roacId) => {
    dispatch(DelRouteActionsRequest(roacId));
    setOpenRouteDelete(false);
    setRefresh(true);
    window.alert("Data Succesfully Deleted");

    //console.log(roacId);
  };

  return (
    <Page
      title="Master Module"
      titleButton="Administrator"
      onClick={() => navigate("/app/module")}
    >
      {/* modules */}
      <div className="">
        {displayEditModule ? (
          <EditModule
            closeEditModule={() => setDisplayEditModule(false)}
            onRefresh={() => setRefresh(true)}
            idModule={idEditModule}
            setDisplayEditModule={setDisplayEditModule}
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
            <div id="modules" className="mb-4">
              <h1 className="m-2">Modules</h1>
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
                  <thead className="text-medium text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Module Name
                      </th>

                      <th className="py-4 px-6 text-right">
                        <button
                          id="buttonModuleAdd"
                          type="button"
                          className="transition text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 cursor-pointer border px-4 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => setOpenModuleAdd(true)}
                        >
                          <FontAwesomeIcon icon={solid("plus")} />
                          &nbsp;Add
                        </button>
                        <Transition.Root show={openModuleAdd} as={Fragment}>
                          <Dialog
                            as="div"
                            className="relative z-10"
                            initialFocus={cancelButtonRef}
                            onClose={setOpenModuleAdd}
                          >
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed z-10 inset-0 overflow-y-auto">
                              <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                                <Transition.Child
                                  as={Fragment}
                                  enter="ease-out duration-300"
                                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                                  leave="ease-in duration-200"
                                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                  <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex font-medium">
                                      Add Module
                                    </div>
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                      <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                          <div className="mt-2">
                                            <div>
                                              <label className="">
                                                Module Name :{" "}
                                              </label>
                                              <input
                                                className="input p-2 border-2 rounded autoFocus"
                                                type="text"
                                                name="module_name"
                                                id="module_name"
                                                value={
                                                  formik.values.module_name
                                                }
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                onInvalid={formik.validateField}
                                                autoComplete="module_name"
                                              />
                                              {formik.touched.module_name &&
                                              formik.errors.module_name ? (
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
                                        className="transition text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 cursor-pointer border px-4 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={formik.handleSubmit}
                                        //onClick={() => setOpenModuleAdd(false)}
                                      >
                                        Save
                                      </button>
                                      <button
                                        type="button"
                                        className="mr-4 transition text-black-500 hover:bg-gray-200 hover:text-black border-2 border-gray-400 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => setOpenModuleAdd(false)}
                                        ref={cancelButtonRef}
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </Dialog.Panel>
                                </Transition.Child>
                              </div>
                            </div>
                          </Dialog>
                        </Transition.Root>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Modules &&
                      Modules.map((mod) => {
                        return (
                          <tr
                            key={mod.module_name}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td
                              scope="row"
                              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {mod.module_name}
                            </td>

                            <td className="py-4 px-6 text-right">
                              <button
                                type="button"
                                className="mr-2 transition text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() =>
                                  onClickEditModule(mod.module_name)
                                }
                              >
                                <FontAwesomeIcon
                                  icon={solid("pen-to-square")}
                                />
                                &nbsp; Edit
                              </button>
                              <Transition.Root
                                show={openModuleEdit}
                                as={Fragment}
                              >
                                <Dialog
                                  as="div"
                                  className="relative z-10"
                                  initialFocus={cancelButtonRef}
                                  onClose={setOpenModuleEdit}
                                >
                                  <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                  </Transition.Child>

                                  <div className="fixed z-10 inset-0 overflow-y-auto">
                                    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                                      <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                      >
                                        <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex font-medium">
                                            Edit Module
                                          </div>
                                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                                <div className="mt-2">
                                                  <form>
                                                    <label className="pr-4">
                                                      Module Name
                                                    </label>
                                                    <input
                                                      className="input p-module_name2 border-2 rounded autoFocus "
                                                      type="text"
                                                      name=""
                                                      id="module_name"
                                                      value={
                                                        formikEditModule.values
                                                          .module_name
                                                      }
                                                      onChange={
                                                        formikEditModule.handleChange
                                                      }
                                                      onBlur={
                                                        formikEditModule.handleBlur
                                                      }
                                                      autoComplete="module_name"
                                                    ></input>
                                                    {formikEditModule.touched
                                                      .module_name &&
                                                    formikEditModule.errors
                                                      .module_name ? (
                                                      <span className="mt-2 text-sm text-red-600">
                                                        {
                                                          formikEditModule
                                                            .errors.module_name
                                                        }
                                                      </span>
                                                    ) : null}
                                                  </form>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button
                                              type="button"
                                              className="transition text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                              onClick={
                                                formikEditModule.handleSubmit
                                              }
                                            >
                                              Save
                                            </button>
                                            <button
                                              type="button"
                                              className="mr-4 transition text-black-500 hover:bg-gray-200 hover:text-black border-2 border-gray-400 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                              onClick={() =>
                                                setOpenModuleEdit(false)
                                              }
                                              ref={cancelButtonRef}
                                            >
                                              Cancel
                                            </button>
                                          </div>
                                        </Dialog.Panel>
                                      </Transition.Child>
                                    </div>
                                  </div>
                                </Dialog>
                              </Transition.Root>
                              <button
                                type="button"
                                className="transition text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() =>
                                  onClickModuleDelete(mod.module_name)
                                }
                              >
                                <FontAwesomeIcon icon={solid("x")} />
                                &nbsp; Delete
                              </button>
                              <Transition.Root
                                show={openModuleDelete}
                                as={Fragment}
                              >
                                <Dialog
                                  as="div"
                                  className="relative z-10"
                                  initialFocus={cancelButtonRef}
                                  onClose={setOpenModuleDelete}
                                >
                                  <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                  </Transition.Child>

                                  <div className="fixed z-10 inset-0 overflow-y-auto">
                                    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                                      <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                      >
                                        <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex font-medium">
                                            Are you sure ?
                                          </div>
                                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                                <div className="mt-2">
                                                  <form>
                                                    <label className="pr-4">
                                                      Module Name Will
                                                      Permanently Deleted
                                                    </label>
                                                  </form>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button
                                              type="button"
                                              className="transition text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                              onClick={() =>
                                                onDeleteModules(idModule)
                                              }
                                            >
                                              Delete
                                            </button>
                                            <button
                                              type="button"
                                              className="mr-4 transition text-black-500 hover:bg-gray-200 hover:text-black border-2 border-gray-400 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                              onClick={() =>
                                                setOpenModuleDelete(false)
                                              }
                                              ref={cancelButtonRef}
                                            >
                                              Cancel
                                            </button>
                                          </div>
                                        </Dialog.Panel>
                                      </Transition.Child>
                                    </div>
                                  </div>
                                </Dialog>
                              </Transition.Root>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
            <div id="routeAction" className="">
              <h1 className="m-2">Route Actions</h1>
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
                  <thead className="text-medium text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Route Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Module Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Display
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Order By
                      </th>
                      <th className="py-4 px-6 text-right">
                        <button
                          id="buttonRouteAdd"
                          type="button"
                          className="transition text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 cursor-pointer border px-4 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => setOpenRouteAdd(true)}
                        >
                          <FontAwesomeIcon icon={solid("plus")} />
                          &nbsp; Add
                        </button>
                        <Transition.Root show={openRouteAdd} as={Fragment}>
                          <Dialog
                            as="div"
                            className="relative z-10"
                            initialFocus={cancelButtonRef}
                            onClose={setOpenRouteAdd}
                          >
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed z-10 inset-0 overflow-y-auto">
                              <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                                <Transition.Child
                                  as={Fragment}
                                  enter="ease-out duration-300"
                                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                                  leave="ease-in duration-200"
                                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                  <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex ">
                                      <h1 className="font-medium">
                                        Add Route Action
                                      </h1>
                                    </div>
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                      <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                          <div className="mt-2">
                                            <form>
                                              <table border="1" width="480">
                                                <tr>
                                                  <td>
                                                    {" "}
                                                    <label className="">
                                                      Route Name
                                                    </label>
                                                  </td>
                                                  <td colspan="3">
                                                    <input
                                                      className="input p-2 border-2 rounded w-full "
                                                      placeholder="Apply Application"
                                                      type="text"
                                                      name="roac_name"
                                                      id="roac_name"
                                                      value={
                                                        formikRoute.values
                                                          .roac_name
                                                      }
                                                      onChange={
                                                        formikRoute.handleChange
                                                      }
                                                      onBlur={
                                                        formikRoute.handleBlur
                                                      }
                                                      onInvalid={
                                                        formikRoute.validateField
                                                      }
                                                      autoComplete="roac_name"
                                                    />
                                                    {formikRoute.touched
                                                      .roac_name &&
                                                    formikRoute.errors
                                                      .roac_name ? (
                                                      <span className="mt-2 text-sm text-red-600">
                                                        {
                                                          formikRoute.errors
                                                            .roac_name
                                                        }
                                                      </span>
                                                    ) : null}
                                                  </td>
                                                </tr>
                                                <tr className="mb-6">
                                                  <td width="20%">
                                                    {" "}
                                                    <label className="">
                                                      Module
                                                    </label>
                                                  </td>
                                                  <td width="50%">
                                                    <input
                                                      className="input p-2 border-2 rounded "
                                                      placeholder="Skill Type"
                                                      type="text"
                                                      name="roac_module_name"
                                                      id="roac_module_name"
                                                      value={
                                                        formikRoute.values
                                                          .roac_module_name
                                                      }
                                                      onChange={
                                                        formikRoute.handleChange
                                                      }
                                                      onBlur={
                                                        formikRoute.handleBlur
                                                      }
                                                      onInvalid={
                                                        formikRoute.validateField
                                                      }
                                                      autoComplete="roac_module_name"
                                                    />
                                                    {formikRoute.touched
                                                      .roac_module_name &&
                                                    formikRoute.errors
                                                      .roac_module_name ? (
                                                      <span className="mt-2 text-sm text-red-600">
                                                        {
                                                          formikRoute.errors
                                                            .roac_module_name
                                                        }
                                                      </span>
                                                    ) : null}
                                                  </td>
                                                  <td width="15%">
                                                    <label className="">
                                                      Order By
                                                    </label>
                                                  </td>
                                                  <td width="15%">
                                                    <input
                                                      className="input w-14 p-2 border-2 rounded "
                                                      type="number"
                                                      name="roac_orderby"
                                                      id="roac_orderby"
                                                      value={
                                                        formikRoute.values
                                                          .roac_orderby
                                                      }
                                                      onChange={
                                                        formikRoute.handleChange
                                                      }
                                                      onBlur={
                                                        formikRoute.handleBlur
                                                      }
                                                      onInvalid={
                                                        formikRoute.validateField
                                                      }
                                                      autoComplete="roac_orderby"
                                                    />
                                                    {formikRoute.touched
                                                      .roac_orderby &&
                                                    formikRoute.errors
                                                      .roac_orderby ? (
                                                      <span className="mt-2 text-sm text-red-600">
                                                        {
                                                          formikRoute.errors
                                                            .roac_orderby
                                                        }
                                                      </span>
                                                    ) : null}
                                                  </td>
                                                </tr>
                                                <tr className="">
                                                  <td>
                                                    <label className="">
                                                      Display
                                                    </label>
                                                  </td>
                                                  <td>
                                                    <Switch
                                                      checked={enabled}
                                                      onChange={setEnabled}
                                                      className={`${
                                                        enabled
                                                          ? "bg-green-600"
                                                          : "bg-gray-200"
                                                      } mt-2 relative inline-flex h-6 w-11 items-center rounded-full`}
                                                    >
                                                      <span className="sr-only">
                                                        Display
                                                      </span>
                                                      <span
                                                        className={`${
                                                          enabled
                                                            ? "translate-x-6"
                                                            : "translate-x-1"
                                                        } inline-block h-4 w-4 transform rounded-full bg-white`}
                                                      />
                                                    </Switch>
                                                    {/* <label
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
                                                </label> */}
                                                  </td>
                                                  <td className=""></td>
                                                </tr>
                                              </table>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                      <button
                                        type="button"
                                        className="transition text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 cursor-pointer border px-4 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        //onClick={() => setOpenRouteAdd(false)}
                                        onClick={formikRoute.handleSubmit}
                                      >
                                        Save
                                      </button>
                                      <button
                                        type="button"
                                        className="mr-2 transition text-black-500 hover:bg-gray-200 hover:text-black border-2 border-gray-400 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => setOpenRouteAdd(false)}
                                        ref={cancelButtonRef}
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </Dialog.Panel>
                                </Transition.Child>
                              </div>
                            </div>
                          </Dialog>
                        </Transition.Root>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {RouteActions &&
                      RouteActions.map((roac) => {
                        return (
                          <tr
                            key={roac.roac_id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td
                              scope="row"
                              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {roac.roac_name}
                              {/* {roac.roac_id} */}
                            </td>
                            <td className="py-4 px-6">
                              {" "}
                              {roac.roac_module_name}
                            </td>
                            <td className="py-4 px-6">
                              {/* {roac.roac_id} &nbsp; */}
                              {/* {roac.roac_display} */}
                              {
                                (routeDisplay = (item) => (event) => {
                                  let cekDisplay = { roac };

                                  if (roac.roac_display == 1) {
                                  } else {
                                  }
                                })
                              }
                              <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${
                                  enabled ? "bg-green-600" : "bg-gray-200"
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                                //onClick={onClickSwitchDisplay(roac)}
                                //onClick={() => onClickEditRoute(roac.roac_id)}
                              >
                                <span className="sr-only"></span>
                                <span
                                  className={`${
                                    enabled ? "translate-x-6" : "translate-x-1"
                                  } inline-block h-4 w-4 transform rounded-full bg-white`}
                                />
                              </Switch>
                            </td>
                            <td className="py-4 px-6">{roac.roac_orderby}</td>
                            <td className="py-4 px-6 text-right">
                              <button
                                type="button"
                                className="mr-2 transition text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() => onClickEditRoute(roac.roac_id)}
                              >
                                <FontAwesomeIcon
                                  icon={solid("pen-to-square")}
                                />
                                &nbsp; Edit
                              </button>
                              <Transition.Root
                                show={openRouteEdit}
                                as={Fragment}
                              >
                                <Dialog
                                  as="div"
                                  className="relative z-10"
                                  initialFocus={cancelButtonRef}
                                  onClose={setOpenRouteEdit}
                                >
                                  <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                  </Transition.Child>

                                  <div className="fixed z-10 inset-0 overflow-y-auto">
                                    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                                      <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                      >
                                        <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex ">
                                            <h1 className="font-medium">
                                              Edit Route Action
                                            </h1>
                                          </div>
                                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                                <div className="mt-2">
                                                  <form>
                                                    <table
                                                      border="1"
                                                      width="480"
                                                    >
                                                      <tr>
                                                        <td>
                                                          {" "}
                                                          <label className="">
                                                            Route Name
                                                          </label>
                                                        </td>
                                                        <td colspan="3">
                                                          <input
                                                            className="input p-2 border-2 rounded w-full  "
                                                            placeholder="Apply Application"
                                                          ></input>
                                                        </td>
                                                      </tr>
                                                      <tr className="mb-6">
                                                        <td width="20%">
                                                          {" "}
                                                          <label className="">
                                                            Module
                                                          </label>
                                                        </td>
                                                        <td width="50%">
                                                          <input
                                                            className="input p-2 border-2 rounded "
                                                            placeholder="Skill Type"
                                                          ></input>
                                                        </td>
                                                        <td width="15%">
                                                          <label className="">
                                                            Order By
                                                          </label>
                                                        </td>
                                                        <td width="15%">
                                                          <input className="input w-10 p-2 border-2 rounded "></input>
                                                        </td>
                                                      </tr>
                                                      <tr className="">
                                                        <td>
                                                          <label className="">
                                                            Display
                                                          </label>
                                                        </td>
                                                        <td>
                                                          <Switch
                                                            checked={enabled}
                                                            onChange={
                                                              setEnabled
                                                            }
                                                            className={`${
                                                              enabled
                                                                ? "bg-green-600"
                                                                : "bg-gray-200"
                                                            } mt-2 relative inline-flex h-6 w-11 items-center rounded-full`}
                                                          >
                                                            <span className="sr-only">
                                                              Enable
                                                              notifications
                                                            </span>
                                                            <span
                                                              className={`${
                                                                enabled
                                                                  ? "translate-x-6"
                                                                  : "translate-x-1"
                                                              } inline-block h-4 w-4 transform rounded-full bg-white`}
                                                            />
                                                          </Switch>
                                                        </td>
                                                        <td className=""></td>
                                                      </tr>
                                                    </table>
                                                  </form>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button
                                              type="button"
                                              className="transition text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                              onClick={() =>
                                                setOpenRouteEdit(false)
                                              }
                                            >
                                              Save
                                            </button>
                                            <button
                                              type="button"
                                              className="transition text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                              onClick={() =>
                                                setOpenRouteEdit(false)
                                              }
                                              ref={cancelButtonRef}
                                            >
                                              Cancel
                                            </button>
                                          </div>
                                        </Dialog.Panel>
                                      </Transition.Child>
                                    </div>
                                  </div>
                                </Dialog>
                              </Transition.Root>
                              <button
                                type="button"
                                className="transition text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() => onClickRouteDelete(roac.roac_id)}
                              >
                                <FontAwesomeIcon icon={solid("x")} />
                                &nbsp; Delete
                              </button>
                              <Transition.Root
                                show={openRouteDelete}
                                as={Fragment}
                              >
                                <Dialog
                                  as="div"
                                  className="relative z-10"
                                  initialFocus={cancelButtonRef}
                                  onClose={setOpenRouteDelete}
                                >
                                  <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                  </Transition.Child>

                                  <div className="fixed z-10 inset-0 overflow-y-auto">
                                    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                                      <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                      >
                                        <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex font-medium">
                                            Are you sure ?
                                          </div>
                                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                                <div className="mt-2">
                                                  <form>
                                                    <label className="pr-4">
                                                      Your Data Will Permanently
                                                      Deleted
                                                    </label>
                                                  </form>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button
                                              type="button"
                                              className="transition text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                              onClick={() =>
                                                onDeleteRoute(idRoute)
                                              }
                                            >
                                              Delete
                                            </button>
                                            <button
                                              type="button"
                                              className="mr-4 transition text-black-500 hover:bg-gray-200 hover:text-black border-2 border-gray-400 cursor-pointer border px-2 py-2 text-base shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                              onClick={() =>
                                                setOpenRouteDelete(false)
                                              }
                                              ref={cancelButtonRef}
                                            >
                                              Cancel
                                            </button>
                                          </div>
                                        </Dialog.Panel>
                                      </Transition.Child>
                                    </div>
                                  </div>
                                </Dialog>
                              </Transition.Root>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </Page>
  );
}
