"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuarioById = exports.obtenerUsuarios = exports.obtenerUsuarioById = exports.actualizarUsuarioById = exports.crearUsuario = void 0;
const usuarios_services_1 = require("./usuarios.services");
const response_common_1 = require("../../common/response.common");
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioService = yield (0, usuarios_services_1.crearUsuarioService)(req.body);
    return (0, response_common_1.respuesta)(res, usuarioService.code, true, usuarioService.msg, usuarioService.data);
});
exports.crearUsuario = crearUsuario;
const actualizarUsuarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { estado, password } = _a, data = __rest(_a, ["estado", "password"]);
    const answer = yield (0, usuarios_services_1.actualizarUsuarioServiceById)(id, data);
    return (0, response_common_1.respuesta)(res, answer.code, true, answer.msg, answer.data);
});
exports.actualizarUsuarioById = actualizarUsuarioById;
const obtenerUsuarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const answer = yield (0, usuarios_services_1.obtenerUsuarioByIdService)(id);
    return (0, response_common_1.respuesta)(res, answer.code, true, answer.msg, answer.data);
});
exports.obtenerUsuarioById = obtenerUsuarioById;
const obtenerUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield (0, usuarios_services_1.obtenerUsuariosService)();
    return (0, response_common_1.respuesta)(res, 200, true, "obtener todos ok", answer);
});
exports.obtenerUsuarios = obtenerUsuarios;
const eliminarUsuarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const answer = yield (0, usuarios_services_1.deleteUsuarioByIdService)(id);
    return (0, response_common_1.respuesta)(res, answer.code, true, answer.msg, answer.data);
});
exports.eliminarUsuarioById = eliminarUsuarioById;
// TODO: REVISAR
// export const actualizarContraseñaUsuario = async (req: Request, res: Response) => {
//     const { documento } = req.params;
//     const answer = await actualizarContraseñaUsuarioService(documento);
//     res.status(200).json({
//         rta: answer,
//     });
// };
