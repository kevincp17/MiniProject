import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = Router();

router.get("/modules/", indexController.ModulesMasterCtrl.modulesView);
router.get(
  "/routeActions/",
  indexController.ModulesMasterCtrl.routeActionsView
);
router.get("/:name", indexController.ModulesMasterCtrl.findOne);
router.post("/", indexController.ModulesMasterCtrl.create);
router.put("/:name", indexController.ModulesMasterCtrl.update);
router.delete("/:name", indexController.ModulesMasterCtrl.deleted);

export default router;
