
import { Router } from "express";
import { joiValidateMiddleware } from "../../middlewares/Joi.middlewares";

import { schemaCrearProveedor } from "./proveedores.schemas";
import { crearProveedor } from "./proveedors.controller";



const router = Router();


router.post("/",
    [
        joiValidateMiddleware(schemaCrearProveedor)
    ],
    crearProveedor
);


export default router;