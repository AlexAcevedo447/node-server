import express from "express";
import { addTaskController, completeTaskController, deleteTaskController, modifyTaskController } from "../controllers.mjs";

const router = express.Router();


router.post("/", addTaskController);
router.put("/:id", modifyTaskController);
router.patch("/:id", completeTaskController);
router.delete("/:id", deleteTaskController);


export default router;