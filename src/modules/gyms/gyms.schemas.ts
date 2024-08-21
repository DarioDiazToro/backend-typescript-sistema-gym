//REAME: IMPORT PACKAGE
import Joi from 'joi';


export const schemaCrearGym = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    direccion: Joi.string().required(),
    telefono: Joi.string().required(),
    activo: Joi.boolean().required(),
    correo: Joi.string().email(),
    nit: Joi.string().required(),


    logo: Joi.string().base64().required(),
    informacion_adicional: Joi.string().allow(''),
    extension: Joi.string().required(),

});

export const schemaActualizarGym = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    direccion: Joi.string().required(),
    telefono: Joi.string().required(),
    activo: Joi.boolean(),
    correo: Joi.string().email(),
    nit: Joi.string().required(),

    informacion_adicional: Joi.string().allow(''),
    cambia_logo: Joi.boolean().required(),
    logo: Joi.when('cambia_logo', { is: true, then: Joi.string().base64().required() }),
    extension: Joi.when('cambia_logo', { is: true, then: Joi.string().required() }),

})



