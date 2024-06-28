
import { Router } from "express";
import { hello } from "./servicios.controller";

const router = Router();


router.get("/", [], hello);

export default router;