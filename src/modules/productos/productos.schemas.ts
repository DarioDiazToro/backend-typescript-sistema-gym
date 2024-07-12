
import Joi from 'joi';

export const schemaCrearProducto = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    id_proveedor: Joi.string(),
    valor_total: Joi.number().required(),
    id_categoria: Joi.string().required(),
    cantidad: Joi.number().required(),
    valor_unitario: Joi.string().required(),
    activo: Joi.boolean().required(),

});

export const schemaActualizarProducto = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    id_proveedor: Joi.string(),
    valor_total: Joi.number().required(),
    id_categoria: Joi.string().required(),
    cantidad: Joi.number().required(),
    valor_unitario: Joi.string().required(),
    activo: Joi.boolean().required(),
});


