import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router()

router.get('/apply', IndexController.candidateCtrl.apply)
router.get('/filtering', IndexController.candidateCtrl.filtering)
router.get('/disqualified', IndexController.candidateCtrl.disqualified)
router.get('/contracted', IndexController.candidateCtrl.contracted)
router.get('/not-responding', IndexController.candidateCtrl.notResponding)
router.get('/id/:id', IndexController.candidateCtrl.findOne)
router.put('/update/id/:id', IndexController.candidateCtrl.updateCandidate)
router.get('/file/:filename', UploadDownloadHelper.showProductImage)

export default router