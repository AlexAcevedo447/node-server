import express from "express";
import { addTaskController, completeTaskController, deleteTaskController, modifyTaskController } from "../controllers.mjs";
import { listEditMiddleware } from "../middlewares/editor.middleware.mjs";

const router = express.Router();

router.use(listEditMiddleware);

router.post("/", addTaskController);
router.put("/:id", modifyTaskController);
router.patch("/:id", completeTaskController);
router.delete("/:id", deleteTaskController);


export default router;