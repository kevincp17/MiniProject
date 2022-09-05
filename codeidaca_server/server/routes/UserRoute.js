import { Router } from "express";
import authJWT from "../helpers/authJWT";
import IndexController from "../controller/IndexCtrl";

const router = Router();
router.get("/all", IndexController.UserController.allget);
router.post("/signin", authJWT.authenticate, authJWT.login);
router.post(
  "/signup",
  IndexController.UserController.entity,
  IndexController.UserController.signup,
  IndexController.UserController.userRole
);
//router.post("/refreshtoken",authJWT.refreshToken)

export default router;
