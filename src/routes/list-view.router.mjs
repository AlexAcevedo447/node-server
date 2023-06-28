import express from "express";
import { filterTasksController } from "../controllers/task.controller.mjs";
import { validParams } from "../middlewares/viewer.middleware.mjs";
import { verifyTokenMiddleware } from "../middlewares/auth.middleware.mjs";

const router = express.Router();

router.use([validParams, verifyTokenMiddleware])

router.get("/", filterTasksController);
router.get("/:filter/:value", filterTasksController);

export default router;