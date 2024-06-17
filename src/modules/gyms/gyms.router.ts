
import { Request, Response, Router } from "express";
import { actualizarGym, crearGym, deleteGymById, obtenerGymById, obtenerGyms } from "./gyms.controller";
import { schemaActualizarGym, schemaCrearGym } from "./gyms.schemas";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";

const router = Router();


/**POST */
router.post("/", [
    joiValidateMiddleware(schemaCrearGym)
], crearGym);

/**PUT */
router.put("/:id", [
    joiValidateMiddleware(schemaActualizarGym)],
    actualizarGym);

/**GET */
router.get("/:id", obtenerGymById);
router.get("/", [], obtenerGyms);

/**DELETE */
router.delete("/:id", deleteGymById);

export default router;