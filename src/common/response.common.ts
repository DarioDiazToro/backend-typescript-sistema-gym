import { Response } from "express";


export const respuesta = (res: Response, code: number, success: boolean, message: string, data: any,) => {
    return res.status(code).json({
        success: success,
        message: message,
        data,
    });
};


