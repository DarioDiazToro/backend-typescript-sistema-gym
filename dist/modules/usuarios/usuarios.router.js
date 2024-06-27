"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Joi_middlewares_1 = require("../../middlewares/Joi.middlewares");
const usuarios_controller_1 = require("./usuarios.controller");
const usuarios_schemas_1 = require("./usuarios.schemas");
const validar_jwt_1 = require("../../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.post("/", [
    (0, Joi_middlewares_1.joiValidateMiddleware)(usuarios_schemas_1.schemaCrearUsuario)
], usuarios_controller_1.crearUsuario);
router.put("/:id", [
    (0, Joi_middlewares_1.joiValidateMiddleware)(usuarios_schemas_1.schemaActualizarUsuario)
], usuarios_controller_1.actualizarUsuarioById);
router.get("/:id", [], usuarios_controller_1.obtenerUsuarioById);
router.get("/", [], usuarios_controller_1.obtenerUsuarios);
router.delete("/:id", [validar_jwt_1.validarJWT], usuarios_controller_1.eliminarUsuarioById);
exports.default = router;
