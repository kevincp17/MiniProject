import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { doSignupRequest } from "../../redux-saga/actions/User";
import { Link } from "react-router-dom";

// export default function Signup() {
//   let navigate = useNavigate();
//   let location = useLocation();
//   let from = location.state?.from?.pathname || "/";

//   const dispatch = useDispatch();
//   const { message, isLoggedIn } = useSelector((state) => state.userState);

//   useEffect(() => {
//     if (isLoggedIn) {
//       navigate(from, { replace: true });
//     }
//   }, [isLoggedIn]);

//   const validationSchema = Yup.object().shape({
//     email: Yup.string()
//       .email("Must be a valid email")
//       .max(255)
//       .required("Email is required"),
//     password: Yup.string().min(5).max(5).required(),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       // let payload = {
//       //   email: values.email,
//       //   password: values.password,
//       // };
//       // dispatch(doSigninRequest(payload));
//     },
//   });
export default function Signup() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [roleId, setRoleId] = useState({
    role_id: 1,
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      pmail_add: "",
      password: "",
      confpassword: "",
      user_phone: "",
      role_id: 1,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "Max char 20!")
        .required("Username is required"),
      pmail_add: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      // password: Yup.string().min(5).max(15).required(),
      // confpassword: Yup.string().oneOf(
      //   [Yup.ref("password"), null],
      //   "Passwords must match"
      // ),
      password: Yup.string().min(5).max(20).required("Password is required"),
      // confpassword: Yup.string().oneOf(
      //   [Yup.ref("password"), null],
      //   "Passwords must match"
      // ),
      confpassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      user_phone: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Number phone is required"),
    }),

    onSubmit: async (values) => {
      let payload = {
        username: values.username,
        pmail_add: values.pmail_add,
        password: values.password,
        user_phone: values.user_phone,
        ponty_code: "Cell",
        role_id: roleId.role_id,
      };
      console.log(payload);
      dispatch(doSignupRequest(payload));

      setTimeout(() => {
        navigate("/auth/signup/success");
      }, 7000);
    },
  });

  const changeHandler = (e) => {
    setRoleId({ ...roleId, role_id: +e.target.value });
  };

  console.log(roleId);

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="../assets/images/codeid.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl text-gray-900">Sign up</h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex items-center">
              <label
                htmlFor="username"
                className="w-20 inline-block text-right mr-3 text-black-500 text-black-500"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="username"
                required
                placeholder="username"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              {formik.touched.username && formik.errors.username ? (
                <span className="mt-2 text-sm text-red-600">
                  {formik.errors.username}
                </span>
              ) : null}
            </div>
            <div className="flex items-center">
              <label
                htmlFor="pmail_add"
                className="w-20 inline-block text-right mr-4 text-black-500 text-black-500"
              >
                Email
              </label>
              <input
                id="pmail_add"
                name="pmail_add"
                type="email"
                value={formik.values.pmail_add}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
              {formik.touched.pmail_add && formik.errors.pmail_add ? (
                <span className="mt-2 text-sm text-red-600">
                  {formik.errors.pmail_add}
                </span>
              ) : null}
            </div>
            <div className="flex items-center">
              <label
                htmlFor="password"
                className="w-20 inline-block text-right mr-4 text-black-500 text-black-500"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ? (
                <span className="mt-2 text-sm text-red-600">
                  {formik.errors.password}
                </span>
              ) : null}
            </div>
            <div className="flex items-center">
              <label
                htmlFor="confpassword"
                className="w-20 inline-block text-right mr-4 text-black-500 text-black-500"
              >
                Confirm Password
              </label>
              <input
                id="confpassword"
                name="confpassword"
                type="password"
                value={formik.values.confpassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
              {formik.touched.confpassword && formik.errors.confpassword ? (
                <span className="mt-2 text-sm text-red-600">
                  {formik.errors.confpassword}
                </span>
              ) : null}
            </div>
            <div className="flex items-center">
              <label
                htmlFor="user_phone"
                className="w-20 inline-block text-right mr-4 text-black-500 text-black-500"
              >
                Phone Number
              </label>
              <input
                id="user_phone"
                name="user_phone"
                type="text"
                value={formik.values.user_phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="user_phone"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
              />
              {formik.touched.user_phone && formik.errors.user_phone ? (
                <span className="mt-2 text-sm text-red-600">
                  {formik.errors.user_phone}
                </span>
              ) : null}
            </div>
            <div className="flex items-center">
              <label
                htmlFor="role_id"
                className="w-20 inline-block text-right mr-4 text-black-500 text-black-500"
              >
                Cadidate / Talent
              </label>
              <div className="flex items-center">
                <select
                  onChange={(e) => changeHandler(e)}
                  className="inline-flex justify-center w-30 rounded-md border border-gray-300 shadow-sm px-8 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >
                  <option value="1">Candidate</option>
                  <option value="2">Talent</option>
                  {/* values ini role id tapi msh gatau nempelinnya */}
                </select>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="group relative w-full flex-initial w-32 h-10 ml-10 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Cancel
              </button>
              <button
                type="button"
                onClick={formik.handleSubmit}
                className="group relative w-full flex-initial w-32 h-10 ml-24 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign up
              </button>
            </div>
            <div className=" flex justify-center">
              <button className=" mx-auto mt-2 text-center text-sm text-gray-600">
                <u
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => navigate("/SignupEmp")}
                >
                  if you are employee code.id, click this for sign up
                </u>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
