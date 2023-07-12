import { Router } from "express";

import authRouter from "./auth";
import recipesRouter from "./recipes";

const router = Router();
router.use(authRouter);
router.use(recipesRouter);

export default router;