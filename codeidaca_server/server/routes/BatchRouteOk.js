import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router()
router.get('/list', IndexController.BatchEvaluationOk.list)
router.get('/:id', IndexController.BatchEvaluationOk.findOne)
router.put('/:id', IndexController.BatchEvaluationOk.update)
router.get('/', IndexController.BatchEvaluationOk.name)


export default router