import { Router } from "express";
import indexController from "../controller/indexCtrl";

const router = Router();

router.get("/", indexController.RouteActionsCtrl.findAll);
router.get("/:id", indexController.RouteActionsCtrl.findOne);
router.post("/", indexController.RouteActionsCtrl.create);
router.put("/:id", indexController.RouteActionsCtrl.update);
router.delete("/:id", indexController.RouteActionsCtrl.deleted);

export default router;
