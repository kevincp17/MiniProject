import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = Router();

router.get("/", indexController.BootcampApplyCtrl.findAll);
router.get("/:id", indexController.BootcampApplyCtrl.findOne);
router.post("/", indexController.BootcampApplyCtrl.create);
router.put("/:id", indexController.BootcampApplyCtrl.update);
router.delete("/:id", indexController.BootcampApplyCtrl.deleted);

export default router;
