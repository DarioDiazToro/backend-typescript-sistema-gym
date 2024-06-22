
import { UsuariosEntity } from "../../models/usuario";
import bcryptjs from "bcryptjs";


export const loginService = async (datos: any) => {
    const { password, correo } = datos;

    try {
        const usuario = await UsuariosEntity.findOne({ where: { correo: correo } });
        if (!usuario) {
            return {
                code: 400,
                msg: "contraseña / correo no son correctos - correo",
                data: null
            };
        }

        if (!usuario.activo) {
            return {
                code: 400,
                msg: "Usuario / contraseña no son correctos - estado: false",
                data: null
            };
        };

        const validarPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validarPassword) {
            return {
                code: 400,
                msg: "Usuario / contraseña no son correctos - contraseña",
                data: null
            };
        };
        return {
            code: 200,
            msg: "Login ok",
            data: null
        };

    } catch (error) {
        console.log(error);
        return {
            code: 500,
            msg: "Hable con el administrador",
            data: null
        };
    }
};