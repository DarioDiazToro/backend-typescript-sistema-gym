import { Request, Response } from "express";
import { crearGymService } from "./gyms.services";
import { respuesta } from "../../common/response.common";

export const crearGym = (req: Request, res: Response) => {
    // const mensaje = crearGymService();

    return respuesta(res, 200, true, 'crear ok', req.body);

    // return res.status(200).json({
    //     success: true,
    //     message: 'ok crear',
    //     data: req.body
    // });
};