//REAME: IMPORT PACKAGE
import Joi from 'joi';


export const schemaCrearCategoria = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
});

