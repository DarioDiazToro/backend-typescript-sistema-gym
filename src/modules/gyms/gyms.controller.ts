import { Request, Response } from "express";
import { actualizarGymServiceById, crearGymService, deleteGymByIdService, obtenerGymByIdService, obtenerGymsService } from "./gyms.services";
import { IRespuestaFuncion, respuesta } from "../../common/response.common";

export const crearGym = async (req: Request, res: Response) => {
    const answer = await crearGymService(req.body);

    return respuesta(res, answer.code, true, answer.message, answer.data);
};


export const actualizarGymById = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const idNumber = Number(id);
        const answer = await actualizarGymServiceById(idNumber, req.body);

        return respuesta(res, answer.code, true, answer.message, answer.data);

    } catch (error: any) {
        console.log("Error ActualizarGymController=====>", error.message);
    }
};


export const obtenerGyms = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const answer = await obtenerGymsService(page, limit);
    return respuesta(res, answer.code, true, answer.message, answer.data);
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
