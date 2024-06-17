
import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";
import { actualizarClienteById, crearCliente, deleteClienteById, obtenerClienteById, obtenerClientes } from "./cliente.controller";
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


router.delete("/:id", [], deleteClienteById);

export default router;
