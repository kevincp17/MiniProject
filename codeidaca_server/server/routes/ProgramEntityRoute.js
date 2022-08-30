import { Router } from "express";
import indexController from "../controller/IndexController";
import uploadDownload from "../helpers/UploadDownloadHelper";

const router=new Router()

router.get('/showFour',indexController.ProgramEntityController.findFourBootcamps)
router.get('/showThree',indexController.ProgramEntityController.findThreeOnlineCourses)
router.get('/alumniTestimony',indexController.ProgramEntityController.showAlumniProgramReview)
router.get('/images/:filename',uploadDownload.showProductImage)

export default router