import { Router } from "express";
import indexController from "../controller/IndexController";

const router= new Router()

router.get('/',indexController.AddressTypeController.findAll)
router.get('/:id',indexController.AddressTypeController.findOne)
router.post('/',indexController.AddressTypeController.create)
router.put('/:id',indexController.AddressTypeController.update)
router.delete('/:id',indexController.AddressTypeController.deleted)

export default router