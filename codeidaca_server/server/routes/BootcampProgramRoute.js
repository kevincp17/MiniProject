import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router()

router.get('/:id', IndexController.BootcampProgramController.findAll)
router.get('/search/:program/:search', IndexController.BootcampProgramController.searchProgram)
router.get('/file/:filename', UploadDownloadHelper.showProductImage)

export default router