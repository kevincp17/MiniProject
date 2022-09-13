import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router()

router.get('/', IndexController.StudentReviewController.querySQL)
router.get('/file/:filename', UploadDownloadHelper.showProductImage)

export default router