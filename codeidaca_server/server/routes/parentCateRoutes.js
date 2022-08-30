import { Router } from "express";
import indexCtrl from "../controller/indexController";

const router = new Router()

router.get('/',indexCtrl.parentCateCtrl.findAll)

export default router
