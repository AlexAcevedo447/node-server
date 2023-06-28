import { Router } from "express";
import { loginController } from "../controllers/index.mjs";
const router = Router();

router.post("/", loginController);

export default router;