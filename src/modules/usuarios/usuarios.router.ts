
import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";

import { actualizarUsuarioById, crearUsuario, eliminarUsuarioById, obtenerUsuarioById, obtenerUsuarios } from "./usuarios.controller";
import { schemaActualizarUsuario, schemaCrearUsuario } from "./usuarios.schemas";
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



router.get("/:id", [], obtenerUsuarioById);
router.get("/", [], obtenerUsuarios);


router.delete("/:id", [validarJWT], eliminarUsuarioById);

export default router;