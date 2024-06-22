
import { Request, Response, Router } from "express";
import { actualizarGym, crearGym, eliminarGymById, obtenerGymById, obtenerGyms } from "./gyms.controller";
import { schemaActualizarGym, schemaCrearGym } from "./gyms.schemas";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { actualizarGymServiceById } from "./gyms.services";

const router = Router();


/**POST */
router.post("/", [
    joiValidateMiddleware(schemaCrearGym)
], crearGym);

/**PUT */
router.put("/:id", [
    joiValidateMiddleware(schemaActualizarGym)],
    actualizarGymServiceById);

/**GET */
router.get("/:id", obtenerGymById);
router.get("/", [], obtenerGyms);

/**DELETE */
router.delete("/:id", eliminarGymById);

export default router;