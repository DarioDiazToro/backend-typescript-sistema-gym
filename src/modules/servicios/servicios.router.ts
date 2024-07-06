
import { Router } from "express";
import { schemaActualizarServicio, schemaCrearServicio } from "./servicios.schemas";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { actualizarServicio, crearServicio, eliminarServicioById, obtenerServicioById, obtenerServicios } from "./servicios.controller";
import { actualizarServicioServiceById } from "./servicios.services";


const router = Router();


router.post("/", [
    joiValidateMiddleware(schemaCrearServicio)
], crearServicio);

router.put("/:id", [joiValidateMiddleware(schemaActualizarServicio)], actualizarServicio);

router.get("/:id", [], obtenerServicioById);
router.get("/", [], obtenerServicios);


router.delete("/:id", [], eliminarServicioById);
export default router;
