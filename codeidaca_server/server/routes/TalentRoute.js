import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();

router.get("/:id", IndexController.TalentController.findById);

export default router;