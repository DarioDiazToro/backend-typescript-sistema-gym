
import { Request, Response, } from "express";
import { actualizarUsuarioServiceById, crearUsuarioService, deleteUsuarioByIdService, obtenerUsuarioByIdService, obtenerUsuariosService } from "./usuarios.services";
import { respuesta } from "../../common/response.common";


export const crearUsuario = async (req: Request, res: Response) => {
    const { ...datos } = req.body;
    const usuarioService = await crearUsuarioService(datos);

    return respuesta(res, usuarioService.code, true, usuarioService.msg, usuarioService.data);

};



export const actualizarUsuarioById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { estado, password, ...data } = req.body


    const answer = await actualizarUsuarioServiceById(id, data);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};

export const obtenerUsuarioById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const answer = await obtenerUsuarioByIdService(id);
    return respuesta(res, answer.code, true, answer.msg, answer.data);

};

export const obtenerUsuarios = async (req: Request, res: Response) => {
    const answer = await obtenerUsuariosService();
    return respuesta(res, 200, true, "obtener todos ok", answer);

};

export const eliminarUsuarioById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const answer = await deleteUsuarioByIdService(id);
    console.log(id);
    return respuesta(res, answer.code, true, answer.msg, answer.data);

};

// TODO: REVISAR
// export const actualizarContraseñaUsuario = async (req: Request, res: Response) => {
//     const { documento } = req.params;

//     const answer = await actualizarContraseñaUsuarioService(documento);
//     res.status(200).json({
//         rta: answer,
//     });
// };

