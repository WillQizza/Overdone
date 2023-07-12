import { Router } from "express";
import { onTokenAuthorize, onTokenRegister, onTokenRevoke } from "../controllers/authController";

const router = Router();

router.post("/auth/token/register", onTokenRegister);
router.post("/auth/token/authorize", onTokenAuthorize);
router.post("/auth/token/revoke", onTokenRevoke);

export default router;