import { IRespuestaFuncion, getRespuestaCommon } from "../../common/response.common";
import { UsuariosEntity } from "../../models/usuario";
import bcryptjs from "bcryptjs";

export const crearUsuarioService = async (datos: any) => {

    const datosUsuario = await UsuariosEntity.create(datos);
    const { documento_identificacion: documentoIT, correo, password } = datosUsuario;
    const usuariosDB = await UsuariosEntity.find();

    for (let i = 0; i < usuariosDB.length; i++) {
        const documento = usuariosDB[i].documento_identificacion;
        const correoDB = usuariosDB[i].correo;

        if (documento === documentoIT) {
            return {
                code: 422,
                msg: `el documento ${documentoIT} ya existe en la Base de datos`,
                data: null
            };

        };

        if (correoDB === correo) {
            return {
                code: 422,
                msg: `el correo ${correo} ya existe en la Base de datos`,
                data: null
            };

        };

    };

    const salt = bcryptjs.genSaltSync();

    datosUsuario.password = bcryptjs.hashSync(password, salt);

    const usuario = await UsuariosEntity.save(datosUsuario);


    return {
        msg: "crear ok",
        code: 200,
        data: usuario
    };
};

export const actualizarUsuarioServiceById = async (id: any, datos: any) => {

    const usuario = await UsuariosEntity.findBy({ id });


    if (usuario.length === 0) {
        return {
            msg: `no existe en la BD id- ${id} `,
            code: 422,
            data: null
        };
    };

    await UsuariosEntity.update(id, datos);

    const usuarioActualizado = await UsuariosEntity.findOne({ where: { id } });

    return {
        msg: "actualizar ok",
        code: 200,
        data: { usuario: usuario, usuarioActualizado }
    };

};

export const obtenerUsuarioByIdService = async (id: any) => {
    const usuario = await UsuariosEntity.findBy({ id });

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
    }
};


export const obtenerUsuariosService = async () => {
    const usuarios = await UsuariosEntity.findBy({ activo: true });
    const totalUsuarios = await UsuariosEntity.countBy({ activo: true });

    return {
        totalUsuarios,
        data: usuarios,
        msg: "obtener todos ok"
    };

};


export const deleteUsuarioByIdService = async (id: any) => {
    const item = await UsuariosEntity.findBy({ id });

    const usuario = item[0];
    if (!usuario) {
        return {
            msg: `no existe usuario en la BD con id - ${id} `,
            code: 422,
            data: null
        };
    };

    await UsuariosEntity.update({ id }, { activo: false });
    const usuarioEliminado = await UsuariosEntity.findOne({ where: { id } });
    return {
        msg: `Delete ok`,
        code: 200,
        data: usuarioEliminado
    };
};


export const actualizarPasswordUsuarioService = async (documento: string, password: string): Promise<IRespuestaFuncion> => {

    const [usuario] = await UsuariosEntity.findBy({ documento_identificacion: documento });
    if (!usuario) {
        return getRespuestaCommon(false, 422, `El usuario con documento ${documento} no existe en la base de datos`);

    };

    const salt = bcryptjs.genSaltSync();

    const nuevaPassword = bcryptjs.hashSync(password, salt);

    const actualizado = await UsuariosEntity.update({ documento_identificacion: documento }, { password: nuevaPassword })

    if (!actualizado) {
        return getRespuestaCommon(false, 422, "No se logro actualizar la contraseña");
    };

    return getRespuestaCommon(true, 200, "Contraseña actualizada");

};