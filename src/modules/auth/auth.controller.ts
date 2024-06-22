import { Response, Request } from "express";
import { loginService } from "./auth.services";
import { respuesta } from "../../common/response.common";



export const login = async (req: Request, res: Response) => {

    const answer = await loginService(req.body);

    respuesta(res, answer?.code, true, answer?.msg, answer?.data);
};