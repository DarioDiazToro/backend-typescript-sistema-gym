

import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { login } from "./auth.controller";
import { schemaAuth } from "./auth.schemas";



const router = Router();


router.post("/login", [joiValidateMiddleware(schemaAuth)], login)


export default router;