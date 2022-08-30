import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();

router.get("/:id", IndexController.BatchController.findById);
router.put("/:id", IndexController.BatchController.updateBatch, IndexController.BatchController.addSudent);
router.get("/",IndexController.BatchController.findAll)

export default router;