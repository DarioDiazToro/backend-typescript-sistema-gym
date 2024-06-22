
import Joi from 'joi';

export const schemaCrearCliente = Joi.object({
    nombres: Joi.string().required(),
    apellidoUno: Joi.string().required(),
    apellidoDos: Joi.string().required(),
    direccion: Joi.string().required(),
    telefono: Joi.string().required(),
    estado: Joi.boolean().required(),
    correo: Joi.string().required().email(),
    documento_identificacion: Joi.string().required(),
    genero: Joi.string().required()

});

