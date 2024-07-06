import { Response } from "express";


export const respuesta = (res: Response, code: number, success: boolean, message: string, data: any,) => {
    return res.status(code).json({
        success: success,
        message: message,
        data,
    });
};

export interface IRespuestaFuncion {
    success: boolean,
    code: number,
    message: string,
    data: any,
};

export const getRespuestaCommon = (success: boolean, code: number, message: string = "", data: any = null, p0?: { total: number; }): IRespuestaFuncion => {

    return {
        success,
        code,
        message,
        data
    };
};
