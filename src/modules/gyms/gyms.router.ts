
import { Request, Response, Router } from "express";
import { crearGym } from "./gyms.controller";
import { schemaCrearGym } from "./gyms.schemas";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";

const router = Router();


router.post("/", [
    joiValidateMiddleware(schemaCrearGym)
], crearGym);

router.put("/",[],)
export default router;