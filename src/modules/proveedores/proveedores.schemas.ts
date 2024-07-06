
import Joi from 'joi';

export const schemaCrearProveedor = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    id_categoria: Joi.string().required(),
    valor: Joi.number().required(),
    cantidad: Joi.number().required(),
    estado: Joi.boolean().required(),

});

export const schemaActualizarProveedor = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    id_categoria: Joi.string().required(),
    valor: Joi.number().required(),
    cantidad: Joi.number().required(),
    estado: Joi.boolean().required(),
});


