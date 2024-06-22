
import { Request, Response, } from "express";
import { actualizarClienteServiceById, crearClienteService, deleteClienteByIdService, obtenerClienteByIdService, obtenerClientesService } from "./cliente.services";
import { respuesta } from "../../common/response.common";

export const crearCliente = async (req: Request, res: Response) => {

    const clienteService = await crearClienteService(req.body);

    console.log("hola jeje");

    return res.status(clienteService.code).json({
        msg: clienteService.msg,
        data: clienteService.data
    });
};



export const actualizarClienteById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { estado, ...data } = req.body


    const answer = await actualizarClienteServiceById(id, data);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};

export const obtenerClienteById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const answer = await obtenerClienteByIdService(id);
    return respuesta(res, answer.code, true, answer.msg, answer.data);

};

export const obtenerClientes = async (req: Request, res: Response) => {
    const answer = await obtenerClientesService();
    return respuesta(res, 200, true, "obtener todos ok", answer);

};

export const eliminarClienteById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const answer = await deleteClienteByIdService(id);
    return respuesta(res, answer.code, true, answer.msg, answer.data);

};