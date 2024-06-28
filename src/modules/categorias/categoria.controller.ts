import { Request, Response } from "express";
import { respuesta } from "../../common/response.common";
import { actualizarCategoriaServiceById, crearCategoriaService, deleteCategoriaByIdService, obtenerCategoriaByIdService, obtenerCategoriasService, } from "./categoria.services";

export const crearCategoria = async (req: Request, res: Response) => {
    const answer = await crearCategoriaService(req.body);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};


export const actualizarCategoriaById = async (req: Request, res: Response) => {

    const { id } = req.params;


    const answer = await actualizarCategoriaServiceById(id, req.body);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};


export const obtenerCategorias = async (req: Request, res: Response) => {

    const answer = await obtenerCategoriasService();
    return respuesta(res, 200, true, "obtener todos ok", answer);
};

export const obtenerCategoriaById = async (req: Request, res: Response) => {

    const { id } = req.params;

    const answer = await obtenerCategoriaByIdService(id);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};

export const eliminarCategoriaById = async (req: Request, res: Response) => {

    const { id } = req.params;

    const answer = await deleteCategoriaByIdService(id);

    return respuesta(res, answer.code, true, answer.msg, answer.data);

};
