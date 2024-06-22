
import Joi from 'joi';

export const schemaCrearUsuario = Joi.object({
    nombres: Joi.string().required(),
    apellidoUno: Joi.string().required(),
    apellidoDos: Joi.string().required(),
    direccion: Joi.string().required(),
    telefono: Joi.string().required(),
    estado: Joi.boolean().required(),
    password: Joi.string().required(),
    correo: Joi.string().email().required(),
    documento_identificacion: Joi.string().required(),
    genero: Joi.string().required()

});

export const schemaActualizarUsuario = Joi.object({
    nombres: Joi.string().required(),
    apellidoUno: Joi.string().required(),
    apellidoDos: Joi.string().required(),
    direccion: Joi.string().required(),
    telefono: Joi.string().required(),
    estado: Joi.boolean().required(),
    password: Joi.string().optional(),
    correo: Joi.string().email().required(),
    documento_identificacion: Joi.string().required(),
    genero: Joi.string().required()

})
