import { Router } from "express";
import IndexController from "../controller/IndexController";

const router=new Router()
router.get('/', IndexController.BatchController.findAll)
router.post('/', IndexController.BatchController.createNext, IndexController.BatchController.createData, IndexController.BatchController.updateRoles)

export default router