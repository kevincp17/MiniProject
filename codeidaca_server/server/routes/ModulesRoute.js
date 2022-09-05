import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = Router();

router.get("/", indexController.ModulesCtrl.findAll);
router.get("/:id", indexController.ModulesCtrl.findOne);
router.post("/", indexController.ModulesCtrl.create);
router.put("/:id", indexController.ModulesCtrl.update);
router.delete("/:id", indexController.ModulesCtrl.deleted);

export default router;
