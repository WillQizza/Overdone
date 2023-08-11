import { Router } from "express";
import { onLogin, onLogout } from "../controllers/authController";

const router = Router();

router.post("/auth/login", onLogin);
router.post("/auth/logout", onLogout);

export default router;