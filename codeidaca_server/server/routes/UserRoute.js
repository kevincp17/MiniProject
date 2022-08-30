import { Router } from "express";
import authJWT from "../helpers/authJWT";
import IndexController from "../controller/IndexController";
import UploadDownload from "../helpers/UploadDownloadHelper";

const router = Router();
router.get('/user/all',IndexController.UserController.allget)
router.post("/signin",authJWT.authenticate,authJWT.login);
router.post("/signup",IndexController.UserController.entity,IndexController.UserController.signup,IndexController.UserController.userRole);
//router.post("/refreshtoken",authJWT.refreshToken)
router.get('images/:filename',UploadDownload.showProductImage);

export default router;