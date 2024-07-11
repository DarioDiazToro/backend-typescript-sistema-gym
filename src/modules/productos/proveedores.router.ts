
import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";

import { schemaActualizarProveedor, schemaCrearProveedor } from "./proveedores.schemas";
import { actualizarProveedorById, crearProveedor, eliminarProveedorById, obtenerProveedorById, obtenerProveedores } from "./proveedors.controller";



const router = Router();


router.post("/",
    [
        joiValidateMiddleware(schemaCrearProveedor)
    ],
    crearProveedor
);

router.put("/:id",
    [
        joiValidateMiddleware(schemaActualizarProveedor)
    ],
    actualizarProveedorById);


router.get("/", [], obtenerProveedores);

router.get("/:id", [], obtenerProveedorById);

router.delete("/:id", [], eliminarProveedorById);
export default router;