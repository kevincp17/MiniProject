import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();

router.get("/:id", IndexController.BatchController.findById);
router.put("/:id", IndexController.BatchController.updateBatch, IndexController.BatchController.addSudent);
router.get("/",IndexController.BatchController.findAll)
router.put('/edit/:id',IndexController.BatchController.updateStatusBatch)
router.delete('/:id',IndexController.BatchController.deleteNext,IndexController.BatchController.deleted)
export default router;