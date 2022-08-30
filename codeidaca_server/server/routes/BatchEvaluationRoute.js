import { Router } from "express";
import IndexController from "../controller/IndexController";
import FormData from "../helpers/UploadDownloadHelper";
const router = Router()

router.get('/:id',IndexController.BatEvaController.querySQL)
router.get('/a/:id',IndexController.BatEvaController.findOne)
router.get('/b',IndexController.BatEvaController.findAll)
// router.get('/:id',IndexController.BatEvaController.findOne)
// router.get('/sql/:id',IndexController.BatEvaController.querySQL)
router.post('/',FormData.uploadSingleFile,IndexController.BatEvaController.create)
// router.get('/cari/aua',IndexController.BatEvaController.findAll)



export default router