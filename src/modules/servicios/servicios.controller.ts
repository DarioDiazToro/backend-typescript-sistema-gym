import { Request, Response } from "express";
import { respuesta } from "../../common/response.common";
import { actualizarServicioServiceById, crearServicioService, deleteGymByIdService, obtenerServicioByIdService, obtenerServicosService } from "./servicios.services";
import { obtenerGymByIdService } from "../gyms/gyms.services";

export const crearServicio = async (req: Request, res: Response) => {
    const answer = await crearServicioService(req.body);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};


export const actualizarServicio = async (req: Request, res: Response) => {

    const { id } = req.params;
    const data = req.body;

    const answer = await actualizarServicioServiceById(Number(id), data);
    return respuesta(res, answer.code, answer.success, answer.message, answer.data);
};


export const obtenerServicioById = async (req: Request, res: Response) => {

    const { id } = req.params;

    const answer = await obtenerServicioByIdService(Number(id));
    return respuesta(res, answer.code, answer.success, answer.message, answer.data);
};

export const obtenerServicios = async (req: Request, res: Response) => {


    const answer = await obtenerServicosService();
    return respuesta(res, answer.code, answer.success, answer.message, answer.data);
};

export const eliminarServicioById = async (req: Request, res: Response) => {

    const { id } = req.params;

    const answer = await deleteGymByIdService(id);

    return respuesta(res, answer.code, answer.success, answer.message, answer.data);

};
