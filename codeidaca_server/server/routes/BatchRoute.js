import { Router } from "express";
import authJWT from "../helpers/authJWT";
import IndexController from "../controller/IndexController";

const router = Router();
router.get('/all',IndexController.BatchController.allget)
router.get('/:id',IndexController.BatchController.findOne)
router.put('/:id',IndexController.BatchController.update)
router.delete('/:id',IndexController.BatchController.deleteNext, IndexController.BatchController.deleted)
//router.post("/refreshtoken",authJWT.refreshToken)

export default router;