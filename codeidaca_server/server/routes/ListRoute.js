import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router()
router.get('/', IndexController.ListController.list)
router.get('/:id', IndexController.ListController.findOne)
router.put('/:id', IndexController.ListController.update)


export default router
