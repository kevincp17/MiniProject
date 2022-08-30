import { Router } from "express";
import indexController from "../controller/IndexController";

const router= new Router()

router.get('/',indexController.CityController.findAll)
router.get('/:id',indexController.CityController.findOne)
router.post('/',indexController.CityController.create)
router.put('/:id',indexController.CityController.update)
router.delete('/:id',indexController.CityController.deleted)

export default router