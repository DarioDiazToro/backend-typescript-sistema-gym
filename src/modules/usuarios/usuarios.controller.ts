import { Request, Response } from "express";
import { helloService } from "./usuarios.services";

export const hello = (req: Request, res: Response) => {

    const mensaje = helloService();
    return res.send(mensaje);
};