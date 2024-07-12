
import { Request, Response, } from "express";
import { respuesta } from "../../common/response.common";
import { actualizarProductoServiceById, crearProductoService, deleteProductoByIdService, obtenerProductoByIdService, obtenerProductosService } from "./productos.services";


export const crearProducto = async (req: Request, res: Response) => {
    const { ...datos } = req.body;
    const answer = await crearProductoService(datos);

    return respuesta(res, answer.code, answer.success, answer.message, answer.data);
};



export const actualizarProductoById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { activo, ...data } = req.body


    const answer = await actualizarProductoServiceById(Number(id), data);
    return respuesta(res, answer.code, answer.success, answer.message, answer.data);
};

export const obtenerProductos = async (req: Request, res: Response) => {

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;


    const answer = await obtenerProductosService(page, limit);
    return respuesta(res, answer.code, answer.success, answer.message, answer.data);

};

export const obtenerProductoById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const answer = await obtenerProductoByIdService(Number(id));
    return respuesta(res, answer.code, answer.success, answer.message, answer.data);

};

export const eliminarProductoById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const answer = await deleteProductoByIdService(Number(id));
    return respuesta(res, answer.code, answer.success, answer.message, answer.data);

};



