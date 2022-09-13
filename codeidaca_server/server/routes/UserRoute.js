import { Router } from "express";
import authJWT from "../helpers/authJWT";
import IndexController from "../controller/IndexController";

const router = Router();
router.get("/all", IndexController.UserController.allget);
router.post("/signin", authJWT.authenticate, authJWT.login);
router.post("/signup", IndexController.UserController.signup);
router.post("/signupemp", IndexController.UserController.SignupEmp);
router.post("/refreshToken", authJWT.refreshToken);
router.delete("/logout", authJWT.logout);

//protect data
router.get("/pro", authJWT.verify, IndexController.UserController.allget);

router.get("/findOne/:id", IndexController.UserController.findOne);
router.post("/signinAction", IndexController.UserController.signin);
router.post("/loginTest", IndexController.UserController.signin);
//router.post("/refreshtoken",authJWT.refreshToken)

export default router;
