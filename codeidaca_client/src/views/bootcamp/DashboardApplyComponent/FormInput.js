import React from "react";

export default function FormInput(props) {
  return (
    <div className="row-span-3">
      <div className="block p-6 max-w-md">
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                placeholder="First name"
                id="user_first_name"
                name="user_first_name"
                value={props.Formik.values.user_first_name}
                onChange={props.Formik.handleChange}
                onBlur={props.Formik.handleBlur}
                autoComplete="user_first_name"
              />
              {props.Formik.touched.user_first_name &&
              props.Formik.errors.user_first_name ? (
                <span className="mt-2 text-sm text-red-600 relative bg-white rounded-md font-medium hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                  {props.Formik.errors.user_first_name}
                </span>
              ) : null}
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                placeholder="Last Name"
                id="user_last_name"
                name="user_last_name"
                value={props.Formik.values.user_last_name}
                onChange={props.Formik.handleChange}
                onBlur={props.Formik.handleBlur}
                autoComplete="user_last_name"
              />
              {props.Formik.touched.user_last_name &&
              props.Formik.errors.user_last_name ? (
                <span className="mt-2 text-sm text-red-600 relative bg-white rounded-md font-medium hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                  {props.Formik.errors.user_last_name}
                </span>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                type="date"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                placeholder="Date of birth"
                id="date"
                name="date"
                value={props.Formik.values.date}
                onChange={props.handleDateChange}
                onBlur={props.Formik.handleBlur}
                autoComplete="date"
              />
              {props.Formik.touched.date && props.Formik.errors.date ? (
                <span className="mt-2 text-sm text-red-600 relative bg-white rounded-md font-medium hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                  {props.Formik.errors.date}
                </span>
              ) : null}
            </div>
            <div className="form-group mb-6">
              <input
                type="number"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                placeholder="Age"
                id="age"
                name="age"
                value={props.Formik.values.age}
                onChange={props.Formik.handleChange}
                onBlur={props.Formik.handleBlur}
                autoComplete="age"
                disabled
              />
            </div>
          </div>
          {props.EducationList.length > 0 ? (
            <>
              <div className="form-group mb-4">
                <select
                  defaultValue="default"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                  aria-label="Select Education"
                  onChange={props.handleOnChangeSelect}
                >
                  <option key="default" value="default">
                    Select education
                  </option>
                  {props.EducationList.map((data, i) => (
                    <option
                      key={data.usdu_id}
                      value={i}
                    >{`${data.usdu_field_study}, ${data.usdu_school}`}</option>
                  ))}
                </select>
              </div>
            </>
          ) : null}
          <div className="form-group mb-px">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-none rounded-t-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:z-10"
              placeholder="University / School"
              id="usdu_school"
              name="usdu_school"
              value={props.Formik.values.usdu_school}
              onChange={props.Formik.handleChange}
              onBlur={props.Formik.handleBlur}
              autoComplete="usdu_school"
            />
            {props.Formik.touched.usdu_school &&
            props.Formik.errors.usdu_school ? (
              <span className="mt-2 text-sm text-red-600 relative bg-white rounded-md font-medium hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                {props.Formik.errors.usdu_school}
              </span>
            ) : null}
          </div>
          <div className="form-group mb-px">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:z-10"
              placeholder="Jurusan"
              id="usdu_field_study"
              name="usdu_field_study"
              value={props.Formik.values.usdu_field_study}
              onChange={props.Formik.handleChange}
              onBlur={props.Formik.handleBlur}
              autoComplete="usdu_field_study"
            />
            {props.Formik.touched.usdu_field_study &&
            props.Formik.errors.usdu_field_study ? (
              <span className="mt-2 text-sm text-red-600 relative bg-white rounded-md font-medium hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                {props.Formik.errors.usdu_field_study}
              </span>
            ) : null}
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-none rounded-b-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none focus:z-10"
              placeholder="Pendidikan"
              id="usdu_degree"
              name="usdu_degree"
              value={props.Formik.values.usdu_degree}
              onChange={props.Formik.handleChange}
              onBlur={props.Formik.handleBlur}
              autoComplete="usdu_degree"
            />
            {props.Formik.touched.usdu_degree &&
            props.Formik.errors.usdu_degree ? (
              <span className="mt-2 text-sm text-red-600 relative bg-white rounded-md font-medium hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                {props.Formik.errors.usdu_degree}
              </span>
            ) : null}
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
              value={props.Title}
              disabled
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
              rows="3"
              placeholder="Motivation"
              id="motivation"
              name="motivation"
              value={props.Formik.values.motivation}
              onChange={props.Formik.handleChange}
              onBlur={props.Formik.handleBlur}
              autoComplete="motivation"
            />
            {props.Formik.touched.motivation &&
            props.Formik.errors.motivation ? (
              <span className="mt-2 text-sm text-red-600 relative bg-white rounded-md font-medium hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                {props.Formik.errors.motivation}
              </span>
            ) : null}
          </div>
          {/* cv isEx reCv */}
          <div className="form-group mb-6 ">
            {props.CvUploaded === true && props.IsCvExists === true && props.IsCvReupload === false ? (
              <>
                <label
                  htmlFor="previewCV "
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  CV Uploaded
                </label>
                <br />
                <a href={props.PreviewCv} target="_blank" rel="noopener noreferrer">
                  <span
                    id="previewCV"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    Show My CV
                  </span>
                </a>
                <span className="relative cursor-pointer ml-2 mr-2 bg-white rounded-md font-medium text-gray-700 hover:text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-600">
                  or
                </span>
                <span
                  id="previewCV"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  onClick={() => {
                    props.setIsCvReupload(true);
                    props.setCvUploaded(false);
                  }}
                >
                  Reupload My CV
                </span>
              </>
            ) : (
              <>
                <label
                  htmlFor="cvFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Upload CV
                </label>
                <input
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                  accept=".doc,.docx,.pdf"
                  type="file"
                  id="cvFile"
                  onChange={props.uploadCvOnChange("file")}
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  .doc, .docx or .pdf (Max. 1 mb)
                </p>
              </>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:ring-indigo-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={props.Formik.handleSubmit}
          >
            {props.IsApplied ? "Update" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
