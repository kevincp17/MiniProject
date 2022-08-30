import { Router } from "express";
import indexController from "../controller/IndexController";

const router= new Router()

router.get('/',indexController.ProvinceController.findAll)
router.get('/:id',indexController.ProvinceController.findOne)
router.post('/',indexController.ProvinceController.create)
router.put('/:id',indexController.ProvinceController.update)
router.delete('/:id',indexController.ProvinceController.deleted)

export default router