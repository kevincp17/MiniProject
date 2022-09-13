import { Router } from "express";
import IndexController from "../controller/IndexController";
import uploadDownload from "../helpers/UploadDownloadHelper";

const router = Router();

router.get(
  "/show",
  IndexController.DashboardApplyController.getUser,
  IndexController.DashboardApplyController.getBootcampApply,
  IndexController.DashboardApplyController.getProgram,
  IndexController.DashboardApplyController.getUserMedia,
  IndexController.DashboardApplyController.getUserEducation,
  IndexController.DashboardApplyController.getBootcampApplyProgress
);

router.post(
  "/apply",
  uploadDownload.uploadMultipleFile,
  IndexController.DashboardApplyController.setBootcampApply,
  IndexController.DashboardApplyController.setUsersEducation,
  IndexController.DashboardApplyController.setUserMedia,
  IndexController.DashboardApplyController.setUser
);

router.get(
  "/progress",
  IndexController.DashboardApplyController.getBootcampApplyProgress
);

export default router;
