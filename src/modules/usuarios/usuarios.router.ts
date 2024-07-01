
import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";

import { actualizarPassword, actualizarUsuarioById, crearUsuario, eliminarUsuarioById, obtenerUsuarioById, obtenerUsuarios } from "./usuarios.controller";
import { schemaActualizarUsuario, schemaCrearUsuario, schemaActualizarPasswordUsuario } from "./usuarios.schemas";
import { validarJWT } from "../../middlewares/validar-jwt";



const router = Router();


router.post("/",
    [
        joiValidateMiddleware(schemaCrearUsuario)
    ],
    crearUsuario);

router.put("/:id", [
    joiValidateMiddleware(schemaActualizarUsuario)
], actualizarUsuarioById);

router.put("/actualizar-password/:documento", [joiValidateMiddleware(schemaActualizarPasswordUsuario)], actualizarPassword);

router.get("/:id", [], obtenerUsuarioById);
router.get("/", [], obtenerUsuarios);


router.delete("/:id", [validarJWT], eliminarUsuarioById);

export default router;