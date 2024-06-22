
import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { actualizarClienteById, crearCliente, eliminarClienteById, obtenerClienteById, obtenerClientes } from "./cliente.controller";
import { schemaCrearCliente } from "./cliente.schemas";



const router = Router();


router.post("/",
    [
        joiValidateMiddleware(schemaCrearCliente)
    ],
    crearCliente);


router.put("/:id", [
    joiValidateMiddleware(schemaCrearCliente)
], actualizarClienteById);

router.get("/:id", [], obtenerClienteById);
router.get("/", [], obtenerClientes);


router.delete("/:id", [], eliminarClienteById);

export default router;
