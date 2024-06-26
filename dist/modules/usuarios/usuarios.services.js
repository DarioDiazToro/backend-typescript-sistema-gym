"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarioByIdService = exports.obtenerUsuariosService = exports.obtenerUsuarioByIdService = exports.actualizarUsuarioServiceById = exports.crearUsuarioService = void 0;
const usuario_1 = require("../../models/usuario");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const crearUsuarioService = async (datos) => {
    const datosUsuario = await usuario_1.UsuariosEntity.create(datos);
    const { documento_identificacion: documentoIT, correo, password } = datosUsuario;
    const usuariosDB = await usuario_1.UsuariosEntity.find();
    for (let i = 0; i < usuariosDB.length; i++) {
        const documento = usuariosDB[i].documento_identificacion;
        const correoDB = usuariosDB[i].correo;
        if (documento === documentoIT) {
            return {
                code: 422,
                msg: `el documento ${documentoIT} ya existe en la Base de datos`,
                data: null
            };
        }
        ;
        if (correoDB === correo) {
            return {
                code: 422,
                msg: `el correo ${correo} ya existe en la Base de datos`,
                data: null
            };
        }
        ;
    }
    ;
    const salt = bcryptjs_1.default.genSaltSync();
    datosUsuario.password = bcryptjs_1.default.hashSync(password, salt);
    const usuario = await usuario_1.UsuariosEntity.save(datosUsuario);
    return {
        msg: "crear ok",
        code: 200,
        data: usuario
    };
};
exports.crearUsuarioService = crearUsuarioService;
const actualizarUsuarioServiceById = async (id, datos) => {
    const usuario = await usuario_1.UsuariosEntity.findBy({ id });
    if (usuario.length === 0) {
        return {
            msg: `no existe en la BD id- ${id} `,
            code: 422,
            data: null
        };
    }
    ;
    await usuario_1.UsuariosEntity.update(id, datos);
    const usuarioActualizado = await usuario_1.UsuariosEntity.findOne({ where: { id } });
    return {
        msg: "actualizar ok",
        code: 200,
        data: { usuario: usuario, usuarioActualizado }
    };
};
exports.actualizarUsuarioServiceById = actualizarUsuarioServiceById;
const obtenerUsuarioByIdService = async (id) => {
    const usuario = await usuario_1.UsuariosEntity.findBy({ id });
    if (usuario.length === 0) {
        return {
            msg: `no existe en la BD id - ${id} `,
            code: 422,
            data: null
        };
    }
    return {
        code: 200,
        msg: "bien",
        data: usuario
    };
};
exports.obtenerUsuarioByIdService = obtenerUsuarioByIdService;
const obtenerUsuariosService = async () => {
    const usuarios = await usuario_1.UsuariosEntity.findBy({ activo: true });
    const totalUsuarios = await usuario_1.UsuariosEntity.countBy({ activo: true });
    return {
        totalUsuarios,
        data: usuarios,
        msg: "obtener todos ok"
    };
};
exports.obtenerUsuariosService = obtenerUsuariosService;
const deleteUsuarioByIdService = async (id) => {
    const item = await usuario_1.UsuariosEntity.findBy({ id });
    const usuario = item[0];
    if (!usuario) {
        return {
            msg: `no existe en la BD id - ${id} `,
            code: 422,
            data: null
        };
    }
    ;
    await usuario_1.UsuariosEntity.update({ id }, { activo: false });
    const usuarioEliminado = await usuario_1.UsuariosEntity.findOne({ where: { id } });
    return {
        msg: `Delete ok`,
        code: 200,
        data: usuarioEliminado
    };
};
exports.deleteUsuarioByIdService = deleteUsuarioByIdService;
//TODO: REVISAR
// export const actualizarContraseñaUsuarioService = async (id: any) => {
//     const usuario = await UsuariosEntity.findOneBy(id);
//     return usuario;
// };
