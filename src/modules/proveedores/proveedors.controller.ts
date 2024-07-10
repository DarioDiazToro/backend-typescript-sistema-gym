
import { Request, Response, } from "express";
import { respuesta } from "../../common/response.common";
import { actualizarProveedorServiceById, crearProveedorService, deleteProveedorByIdService, obtenerProveedorByIdService, obtenerProveedoresService } from "./proveedores.services";


export const crearProveedor = async (req: Request, res: Response) => {
    const { ...datos } = req.body;

    const answer = await crearProveedorService(datos);

    return respuesta(res, answer.code, answer.success, answer.message, answer.data);
};



export const actualizarProveedorById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { estado, password, ...data } = req.body


    const answer = await actualizarProveedorServiceById(Number(id), data);
    return respuesta(res, answer.code, answer.success, answer.message, answer.data);
};

export const obtenerProveedores = async (req: Request, res: Response) => {

    const { limit, page } = req.query;

    //TODO: Revisar limit y page
    const answer = await obtenerProveedoresService(Number(limit), Number(page));
    return respuesta(res, answer.code, answer.success, answer.message, answer.data);

};

export const obtenerProveedorById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const answer = await obtenerProveedorByIdService(Number(id));
    return respuesta(res, answer.code, answer.success, answer.message, answer.data);

};

export const eliminarProveedorById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const answer = await deleteProveedorByIdService(Number(id));
    return respuesta(res, answer.code, answer.success, answer.message, answer.data);

};



