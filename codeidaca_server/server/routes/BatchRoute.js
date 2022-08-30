import { Router } from "express";
import indexController from "../controller/IndexController";

const router=new Router()

router.get('/',indexController.BatchController.findAll)
router.get('/:id',indexController.BatchController.findOne)
router.post('/',indexController.BatchController.create)
router.put('/:id',indexController.BatchController.update)

export default router