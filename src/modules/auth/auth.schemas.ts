
import Joi from 'joi';

export const schemaAuth = Joi.object({
    password: Joi.string().empty().required(),
    correo: Joi.string().email().required(),

});


