import express from "express";
import { filterTasksController } from "../controllers.mjs";
import { validParams } from "../middlewares/viewer.middleware.mjs";

const router = express.Router();

router.use(validParams)

router.get("/", filterTasksController);
router.get("/:filter/:value", filterTasksController);

export default router;