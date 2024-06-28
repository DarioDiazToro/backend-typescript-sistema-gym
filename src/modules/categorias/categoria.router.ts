
import { Request, Response, Router } from "express";
import { schemaCrearCategoria } from "./categoria.schemas";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { actualizarCategoriaById, crearCategoria, eliminarCategoriaById, obtenerCategoriaById, obtenerCategorias } from "./categoria.controller";

const router = Router();


/**POST */
router.post("/", [
    joiValidateMiddleware(schemaCrearCategoria)
], crearCategoria);

/**PUT */
router.put("/:id", [joiValidateMiddleware(schemaCrearCategoria)],
    actualizarCategoriaById);

/**GET */
router.get("/:id", obtenerCategoriaById);
router.get("/", [], obtenerCategorias);

/**DELETE */
router.delete("/:id", eliminarCategoriaById)
export default router;