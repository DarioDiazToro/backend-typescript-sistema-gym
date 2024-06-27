import { Request, Response } from "express";
import { actualizarGymServiceById, crearGymService, deleteGymByIdService, obtenerGymByIdService, obtenerGymsService } from "./gyms.services";
import { respuesta } from "../../common/response.common";

export const crearGym = async (req: Request, res: Response) => {
    const answer = await crearGymService(req.body);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};


export const actualizarGym = async (req: Request, res: Response) => {

    const { id } = req.params;
    const idNumber = Number(id);

    const answer = await actualizarGymServiceById(idNumber, req.body);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};


export const obtenerGyms = async (req: Request, res: Response) => {

    const answer = await obtenerGymsService();
    return respuesta(res, 200, true, "obtener todos ok", answer);
};

export const obtenerGymById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const numberId = Number(id);

    const answer = await obtenerGymByIdService(numberId);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};

export const eliminarGymById = async (req: Request, res: Response) => {

    const { id } = req.params;

    const answer = await deleteGymByIdService(id);

    return respuesta(res, answer.code, true, answer.msg, answer.data);

};
