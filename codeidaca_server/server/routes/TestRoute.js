import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router()
router.get('/', IndexController.Test.test)
// router.get('/',IndexController.Test.findAll)


export default router
