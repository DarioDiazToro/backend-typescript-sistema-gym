import { Request, Response } from "express";
import { respuesta } from "../../common/response.common";
import { actualizarServicioServiceById, crearServicioService } from "./servicios.services";

export const crearServicio = async (req: Request, res: Response) => {
    const answer = await crearServicioService(req.body);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};


export const actualizarServicio = async (req: Request, res: Response) => {

    const { id } = req.params;

    const answer = await actualizarServicioServiceById(Number(id));
    // return respuesta(res, answer.code, true, answer.msg, answer.data);
};


// export const obtenerGyms = async (req: Request, res: Response) => {

//     const answer = await obtenerGymsService();
//     return respuesta(res, 200, true, "obtener todos ok", answer);
// };

// export const obtenerGymById = async (req: Request, res: Response) => {

//     const { id } = req.params;
//     const numberId = Number(id);

//     const answer = await obtenerGymByIdService(numberId);
//     return respuesta(res, answer.code, true, answer.msg, answer.data);
// };

// export const eliminarGymById = async (req: Request, res: Response) => {

//     const { id } = req.params;

//     const answer = await deleteGymByIdService(id);

//     return respuesta(res, answer.code, true, answer.msg, answer.data);

// };
