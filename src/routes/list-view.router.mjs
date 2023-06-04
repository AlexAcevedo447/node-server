import express from "express";
import { filterTasksController } from "../controllers.mjs";

const router = express.Router();

router.get("/", filterTasksController);
router.get("/:filter/:value", filterTasksController);

export default router;