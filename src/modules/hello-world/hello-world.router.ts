
import { Router } from "express";
import { hello } from "./hello-world.controller";

const router = Router();


router.get("/", [], hello);

export default router;