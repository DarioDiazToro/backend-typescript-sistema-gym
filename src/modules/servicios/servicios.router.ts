
import { Router } from "express";
import { schemaCrearServicio } from "./servicios.schemas";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { crearServicio } from "./servicios.controller";
import { actualizarServicioServiceById } from "./servicios.services";


const router = Router();


router.post("/", [
    joiValidateMiddleware(schemaCrearServicio)
], crearServicio);

router.put("/documento", [], actualizarServicioServiceById);

export default router;
