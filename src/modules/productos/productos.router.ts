
import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";

import { schemaCrearProducto, schemaActualizarProducto } from "./productos.schemas";
import { actualizarProductoById, crearProducto, eliminarProductoById, obtenerProductoById, obtenerProductos } from "./productos.controller";



const router = Router();


router.post("/",
    [
        joiValidateMiddleware(schemaCrearProducto)
    ],
    crearProducto
);

router.put("/:id",
    [
        joiValidateMiddleware(schemaActualizarProducto)
    ],
    actualizarProductoById);


router.get("/", [], obtenerProductos);

router.get("/:id", [], obtenerProductoById);

router.delete("/:id", [], eliminarProductoById);


export default router;