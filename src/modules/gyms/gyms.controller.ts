import { Request, Response } from "express";
import { actualizarGymService, crearGymService, deleteGymByIdSerivice, obetenerGymByIdService, obtenerGymsService } from "./gyms.services";
import { respuesta } from "../../common/response.common";

export const crearGym = async (req: Request, res: Response) => {
    const answer = await crearGymService(req.body);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};


export const actualizarGym = async (req: Request, res: Response) => {

    const { id } = req.params;
    const idNumber = Number(id);

    const answer = await actualizarGymService(idNumber, req.body);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};


export const obtenerGyms = async (req: Request, res: Response) => {

    const answer = await obtenerGymsService();
    return respuesta(res, 200, true, "obtener todos ok", answer);
};

export const obtenerGymById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const numberId = Number(id);

    const answer = await obetenerGymByIdService(numberId);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};

export const deleteGymById = async (req: Request, res: Response) => {

    const { id } = req.params;

    const numberId = Number(id);
    const answer = await deleteGymByIdSerivice(numberId);

    return respuesta(res, answer.code, true, answer.msg, answer.data);

};
