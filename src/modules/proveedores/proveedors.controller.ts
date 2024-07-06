
import { Request, Response, } from "express";
import { respuesta } from "../../common/response.common";
import { crearProveedorService } from "./proveedores.services";


export const crearProveedor = async (req: Request, res: Response) => {
    const { ...datos } = req.body;

    const answer = await crearProveedorService(datos);

    return respuesta(res, answer.code, answer.success, answer.message, answer.data);
};



// export const actualizarUsuarioById = async (req: Request, res: Response) => {

//     const { id } = req.params;
//     const { estado, password, ...data } = req.body


//     const answer = await actualizarUsuarioServiceById(id, data);
//     return respuesta(res, answer.code, true, answer.msg, answer.data);
// };

// export const obtenerUsuarioById = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const answer = await obtenerUsuarioByIdService(id);
//     return respuesta(res, answer.code, true, answer.msg, answer.data);

// };

// export const obtenerUsuarios = async (req: Request, res: Response) => {
//     const answer = await obtenerUsuariosService();
//     return respuesta(res, 200, true, "obtener todos ok", answer);

// };

// export const eliminarUsuarioById = async (req: Request, res: Response) => {
//     const { id } = req.params;

//     const answer = await deleteUsuarioByIdService(id);
//     console.log(id);
//     return respuesta(res, answer.code, true, answer.msg, answer.data);

// };


// export const actualizarPassword = async (req: Request, res: Response) => {
//     const { documento } = req.params;
//     const { password } = req.body;

//     const answer = await actualizarPasswordUsuarioService(documento, password);
//     return respuesta(res, answer.code, answer.success, answer.message, answer.data);
// };

