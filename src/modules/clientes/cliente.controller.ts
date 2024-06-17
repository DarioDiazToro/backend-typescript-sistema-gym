
import { Request, Response, json } from "express";
import { actualizarClienteServiceById, crearClienteService, deleteClienteByIdService, obtenerClienteByIdService, obtenerClientesService } from "./cliente.services";
import { respuesta } from "../../common/response.common";

export const crearCliente = async (req: Request, res: Response) => {

    const clienteService = await crearClienteService(req.body);
    return res.status(200).json({
        msg: "crear ok",
        data: clienteService
    });
};



export const actualizarClienteById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { estado, ...data } = req.body
    const idNumber = Number(id);

    const answer = await actualizarClienteServiceById(idNumber, data);
    return respuesta(res, answer.code, true, answer.msg, answer.data);
};

export const obtenerClienteById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const idNumber = Number(id);
    const answer = await obtenerClienteByIdService(idNumber);
    return respuesta(res, answer.code, true, answer.msg, answer.data);

};

export const obtenerClientes = async (req: Request, res: Response) => {
    const answer = await obtenerClientesService();
    return respuesta(res, 200, true, "obtener todos ok", answer);

};

export const deleteClienteById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const answer = await deleteClienteByIdService(id);
    return respuesta(res, answer.code, true, answer.msg, answer.data);

};