//REAME: IMPORT PACKAGE
import Joi from 'joi';


export const schemaCrearGym = Joi.object({
    nombre: Joi.string().required(),
    codigo: Joi.string().required(),
    direccion: Joi.string().required(),
    telefono: Joi.string().required(),
})


