import { Router } from "express";
import indexController from "../controller/IndexController";

const router= new Router()

router.get('/',indexController.CountryController.findAll)
router.get('/:id',indexController.CountryController.findOne)
router.post('/',indexController.CountryController.create)
router.put('/:id',indexController.CountryController.update)
router.delete('/:id',indexController.CountryController.deleted)

export default router