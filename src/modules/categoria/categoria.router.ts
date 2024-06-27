
import { Request, Response, Router } from "express";
import { schemaCrearCategoria } from "./categoria.schemas";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { actualizarCategoria, crearCategoria, obtenerCategoriaById, obtenerCategorias } from "./categoria.controller";
import { deleteCategoriaByIdService } from "./categoria.services";

const router = Router();


/**POST */
router.post("/", [
    joiValidateMiddleware(schemaCrearCategoria)
], crearCategoria);

/**PUT */
router.put("/:id", [joiValidateMiddleware(actualizarCategoria)],
);

/**GET */
router.get("/:id", obtenerCategoriaById);
router.get("/", [], obtenerCategorias);

/**DELETE */
router.delete("/:id", deleteCategoriaByIdService)
export default router;