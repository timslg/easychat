import { Router } from "express";
import { getCounter } from "../controllers/users.controller";

const router = Router();

router.get('/', getCounter);

export default router;