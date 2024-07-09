//REAME: IMPORT PACKAGE
import Joi from 'joi';


export const schemaCrearGym = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    direccion: Joi.string().required(),
    telefono: Joi.string().required(),
    activo: Joi.boolean().required(),
    logo: Joi.string().required(),
    correo: Joi.string().email(),
    nit: Joi.string().required()
})

export const schemaActualizarGym = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    direccion: Joi.string().required(),
    telefono: Joi.string().required(),
    activo: Joi.boolean(),
    logo: Joi.string(),
    correo: Joi.string().email(),
    nit: Joi.string().required(),
})



