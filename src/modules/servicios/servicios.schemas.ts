//REAME: IMPORT PACKAGE
import Joi from 'joi';
import { CategoriaEntity } from '../../models/categoria';


export const schemaCrearServicio = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    id_categoria: Joi.string().required(),
    valor: Joi.number().required(),
    cantidad: Joi.number().required(),
    estado: Joi.boolean().required()
})

export const schemaActualizarServicio = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    id_categoria: Joi.string().required(),
    valor: Joi.number().required(),
    cantidad: Joi.number().required(),
    estado: Joi.boolean().required()
})



