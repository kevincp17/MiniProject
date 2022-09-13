import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import {
  GetBootcampRequest,
  ApplyBootcampRequest,
  ResetApplyBootcampRequest,
} from "../../redux-saga/actions/BootcampApply";

import config from "../../config/config";

import AlertApplicationInfo from "./DashboardApplyComponent/AlertApplicationInfo";
import FormInput from "./DashboardApplyComponent/FormInput";
import ImageUploadPreview from "./DashboardApplyComponent/ImageUploadPreview";
import StepJoinInfo from "./DashboardApplyComponent/StepJoinInfo";
import ModalSuccess from "./DashboardApplyComponent/ModalSuccess";
import ModalError from "./DashboardApplyComponent/ModalError";

export default function BootcampApply() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { progId } = useParams();
  const { userProfile } = useSelector((state) => state.userState);
  const { bootcampDetail, applyBootcamp } = useSelector(
    (state) => state.bootcampApply
  );

  const [title, setTitle] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [userEntityId, setUserEntityId] = useState("")
  const [previewImg, setPreviewImg] = useState("");
  const [imgUploaded, setImgUploaded] = useState(false);
  const [previewCv, setPreviewCv] = useState("");
  const [cvUploaded, setCvUploaded] = useState(false);
  const [isCvReupload, setIsCvReupload] = useState(false);
  const [isCvExists, setIsCvExists] = useState(false);
  const [isImgExists, setIsImgExists] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [showApplicationInfo, setShowApplicationInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setErrorModal] = useState(false);
  const [bootcampProgress, setBootcampProgress] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [educationId, setEducationId] = useState("");
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    field_study: "",
  });
  const [userMediaEntityId, setUserMediaEntityId] = useState({
    cv_usme_id: "",
    photo_usme_id: "",
  });
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
  });
  const [applicationInfo, setApplicationInfo] = useState({
    title: "",
    message: "",
    status: "",
  });
  const [modalInfo, setModalInfo] = useState({
    title: "",
    message: "",
    status: "",
  });

  useEffect(() => {
    const entity_id = {
      user_name: userProfile.user_name,
      prog_entity_id: parseInt(progId),
    };
    dispatch(GetBootcampRequest(entity_id));
    setRefresh(false);
  }, [refresh]);

  useEffect(() => {
    console.log("use effect");
    const userMediaEntity = {
      cv_usme_id: "",
      photo_usme_id: "",
    };

    if (bootcampDetail.code === 200 || bootcampDetail.code === "0") {
      const data = bootcampDetail.data;
      if (data.userMedia.photo !== null) {
        const img = `${config.urlImage}/${data.userMedia.photo.usme_filename}`;
        setPreviewImg(img);
        setImgUploaded(true);
        setIsImgExists(true);
        userMediaEntity.photo_usme_id = data.userMedia.photo.usme_id;
      } else {
        setImgUploaded(false);
        setIsImgExists(false);
      }

      if (data.userMedia.cv !== null) {
        const link = `${config.domain}/cv/${data.userMedia.cv.usme_filename}`;
        setIsCvExists(true);
        setPreviewCv(link);
        setCvUploaded(true);
        userMediaEntity.cv_usme_id = data.userMedia.cv.usme_id;
      } else {
        setCvUploaded(false);
        setIsCvExists(false);
      }

      if (data.userEducation.length > 0 && data.bootcampApply === null) {
        setEducationList(data.userEducation);
      }

      if (data.course !== null) {
        setTitle(data.course.prog_title);
      }

      if (data.user !== null) {
        setUserInfo({
          first_name: data.user.user_first_name,
          last_name: data.user.user_last_name,
        });
        setUserEntityId(data.user.user_entity_id)
      }

      if (data.bootcampApply !== null && data.userEducation.length > 0) {
        setApplicationInfo({
          title: "You already applied for this bootcamp",
          message:
            "Click dashboard to see another bootcamp, or cancel to review your application",
          status: "success",
        });
        setIsApplied(true);
        setShowApplicationInfo(true);

        setEducationList([]);

        setEducation({
          school: data.userEducation[0].usdu_school,
          degree: data.userEducation[0].usdu_degree,
          field_study: data.userEducation[0].usdu_field_study,
        });

        setEducationId(data.userEducation[0].usdu_id);
      } else {
        setIsApplied(false);
        setShowApplicationInfo(false);
        setEducation({
          school: "",
          degree: "",
          field_study: "",
        });
        setApplicationInfo({
          title: "",
          message: "",
          status: "",
        });
      }

      if (data.progress.length > 0) {
        setBootcampProgress(data.progress);
      } else {
        setBootcampProgress([]);
      }

      setUserMediaEntityId(userMediaEntity);
    } else {
      setShowApplicationInfo(false);
      setShowModal(false);
      if (bootcampDetail.code === null) {
        setModalInfo({
          title: "Whoops!",
          message:
            "We're having difficulty connecting to the server. Check your connection or try again later.",
          status: "error",
        });
      } else {
        setModalInfo({
          title: "Oops something wrong",
          message: `${bootcampDetail.message} (${bootcampDetail.code}).`,
          status: "error",
        });
      }
      setErrorModal(true);
    }
  }, [bootcampDetail]);

  useEffect(() => {
    console.log("applybootcamp use effect");
    if (applyBootcamp.code === "0") {
      console.log("Init applybootcamp state");
    } else if (applyBootcamp.code === 200) {
      setRefresh(true);
      if (isApplied) {
        setModalInfo({
          title: "Successful",
          message: "Update Bootcamp Data",
          status: "success",
        });
      } else {
        setModalInfo({
          title: "Successful",
          message: "Apply Bootcamp",
          status: "success",
        });
      }
      setShowModal(true);
      setErrorModal(false);
      dispatch(ResetApplyBootcampRequest());
    } else if (applyBootcamp.code === null) {
      setModalInfo({
        title: "Whoops!",
        message:
          "We're having difficulty connecting to the server. Check your connection or try again later.",
        status: "error",
      });
      setErrorModal(true);
      setShowModal(false);
    } else {
      setModalInfo({
        title: "Oops something wrong",
        message: `${applyBootcamp.message} (${applyBootcamp.code}).`,
        status: "error",
      });
      setErrorModal(true);
      setShowModal(false);
      dispatch(ResetApplyBootcampRequest());
    }
  }, [applyBootcamp]);

  const validationSchema = Yup.object().shape({
    usdu_school: Yup.string("Enter University/School").required(
      "University/School is required"
    ),
    usdu_degree: Yup.string("Enter Degree").required("Degree is required"),
    usdu_field_study: Yup.string("Entre Field Study").required(
      "Field Study is required"
    ),
    user_first_name: Yup.string("Enter Firstname").required(
      "Firstname is required"
    ),
    user_last_name: Yup.string("Enter Lastname").required(
      "Enter Lastname is required"
    ),
    date: Yup.string("Enter Date of Birth").required(
      "Date of Birth is required"
    ),
    motivation: Yup.string("Enter Motivation").required(
      "Motivation is required"
    ),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      prog_title: title,
      usdu_school: education.school,
      usdu_degree: education.degree,
      usdu_field_study: education.field_study,
      user_first_name: userInfo.first_name,
      user_last_name: userInfo.last_name,
      date: "",
      age: "",
      motivation: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("user_entity_id", parseInt(userEntityId));
      payload.append("usdu_id", educationId);
      payload.append("cv_usme_id", userMediaEntityId.cv_usme_id);
      payload.append("photo_usme_id", userMediaEntityId.photo_usme_id);
      payload.append("prog_id", parseInt(progId));
      payload.append("user_first_name", values.user_first_name);
      payload.append("user_last_name", values.user_last_name);
      payload.append("date", values.date);
      payload.append("age", values.age);
      payload.append("usdu_school", values.usdu_school);
      payload.append("usdu_field_study", values.usdu_field_study);
      payload.append("usdu_degree", values.usdu_degree);
      payload.append("motivation", values.motivation);

      if (imgUploaded) {
        payload.append("photo", values.photo);
      }

      if (cvUploaded) {
        payload.append("cv", values.cv);
      }

      if (isImgExists && isCvExists) {
        dispatch(ApplyBootcampRequest(payload));
      } else if (imgUploaded && cvUploaded) {
        dispatch(ApplyBootcampRequest(payload));
      } else {
        setModalInfo({
          title: "Application not completed",
          message:
            "CV or Photo not uploaded yet. Please complete your application",
          status: "warning",
        });
        setShowModal(false);
        setErrorModal(true);
      }
    },
  });

  const uploadImgOnChange = (name) => (event) => {
    let reader = new FileReader();
    let len = event.target.files.length;
    let file = event.target.files[0];

    if (len) {
      reader.onload = () => {
        formik.setFieldValue("photo", file);
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
      setImgUploaded(true);
    } else {
      setImgUploaded(false);
    }
  };

  const uploadCvOnChange = (name) => (event) => {
    let reader = new FileReader();
    let len = event.target.files.length;
    let file = event.target.files[0];

    if (len) {
      reader.onload = () => {
        formik.setFieldValue("cv", file);
        setPreviewCv(reader.result);
      };
      reader.readAsDataURL(file);
      setCvUploaded(true);
    } else {
      setCvUploaded(false);
    }
  };

  const onClearImage = (event) => {
    event.preventDefault();
    setImgUploaded(false);
    setPreviewImg(undefined);
  };

  const openImageUpload = (event) => {
    event.preventDefault();
    document.getElementById("photoFile").click();
  };

  const handleOnChangeSelect = (e) => {
    e.preventDefault();

    let id;
    if (e.target.value === "default") {
      formik.setFieldValue("usdu_school", "");
      formik.setFieldValue("usdu_degree", "");
      formik.setFieldValue("usdu_field_study", "");
      id = "";
    } else {
      formik.setFieldValue(
        "usdu_school",
        educationList[e.target.value].usdu_school
      );
      formik.setFieldValue(
        "usdu_degree",
        educationList[e.target.value].usdu_degree
      );
      formik.setFieldValue(
        "usdu_field_study",
        educationList[e.target.value].usdu_field_study
      );
      id = educationList[e.target.value].usdu_id;
    }
    setEducationId(id);
  };

  const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleDateChange = (e) => {
    const age = getAge(e.target.value);
    formik.handleChange(e);
    formik.setFieldValue("age", age);
    formik.setFieldValue("date", e.target.value);
  };

  return (
    <div className="grid place-items-center">
      <nav className="bg-grey-light rounded-md w-full mt-4 px-4">
        <ol className="list-reset flex">
          <li>
            <Link to={`/bootcamp/list`}>
              <HomeIcon className="text-black mx-2 my-2 w-4 h-4" />
            </Link>
          </li>
          <li className="my-1 underline text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out">
            <Link to={`/bootcamp/list`}>Home</Link>
          </li>
          <li>
            <ChevronRightIcon className="text-black mx-2 my-2 w-4 h-4" />
          </li>
          <li className="text-black my-1">Apply</li>
        </ol>
      </nav>
      <div className="mt-6 mb-6">
        <h3 className="font-medium leading-tight text-3xl">
          Apply Process {title} Bootcamp
        </h3>
      </div>
      <AlertApplicationInfo
        ShowApplicationInfo={showApplicationInfo}
        ApplicationInfo={applicationInfo}
        setApplicationInfo={setApplicationInfo}
      />
      <div className="grid grid-rows-3 grid-flow-col gap-x-4">
        <FormInput
          Formik={formik}
          handleDateChange={handleDateChange}
          EducationList={educationList}
          handleOnChangeSelect={handleOnChangeSelect}
          Title={title}
          CvUploaded={cvUploaded}
          IsCvReupload={isCvReupload}
          PreviewCv={previewCv}
          setIsCvReupload={setIsCvReupload}
          setCvUploaded={setCvUploaded}
          uploadCvOnChange={uploadCvOnChange}
          IsApplied={isApplied}
          IsCvExists={isCvExists}
        />
        <ImageUploadPreview
          ImgUploaded={imgUploaded}
          PreviewImg={previewImg}
          onClearImage={onClearImage}
          uploadImgOnChange={uploadImgOnChange}
          openImageUpload={openImageUpload}
        />
        <StepJoinInfo BootcampProgress={bootcampProgress} />
      </div>
      <ModalSuccess
        ShowModal={showModal}
        setShowModal={setShowModal}
        ModalInfo={modalInfo}
        setRefresh={setRefresh}
        setIsCvReupload={setIsCvReupload}
        navigate={navigate}
      />
      <ModalError
        ShowErrorModal={showErrorModal}
        setErrorModal={setErrorModal}
        ModalInfo={modalInfo}
      />
    </div>
  );
}
