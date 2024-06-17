import { Response } from "express";
import { GymEntity } from "../models/gym";

export const respuesta = (res: Response, code: number, success: boolean, message: string, data: any) => {
    return res.status(code).json({
        success: success,
        message: message,
        data
    })
}
