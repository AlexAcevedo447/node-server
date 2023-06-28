import express from "express";
import { addTaskController, completeTaskController, deleteTaskController, modifyTaskController } from "../controllers/task.controller.mjs";
import { listEditMiddleware } from "../middlewares/editor.middleware.mjs";
import { verifyTokenMiddleware } from "../middlewares/auth.middleware.mjs";

const router = express.Router();

router.use([listEditMiddleware, verifyTokenMiddleware]);

router.post("/", addTaskController);
router.put("/:id", modifyTaskController);
router.patch("/:id", completeTaskController);
router.delete("/:id", deleteTaskController);


export default router;