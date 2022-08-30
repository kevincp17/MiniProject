import { Router } from "express";
import indexCtrl from "../controller/indexController";

const router = new Router()

router.get('/',indexCtrl.cateCtrl.findAll)
router.post('/',indexCtrl.cateCtrl.create)
router.put('/:id',indexCtrl.cateCtrl.update)
router.delete('/:id',indexCtrl.cateCtrl.deleted)
router.get('/:id',indexCtrl.cateCtrl.findOne)


export default router
