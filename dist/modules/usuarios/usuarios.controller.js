"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const usuarios_services_1 = require("./usuarios.services");
const hello = (req, res) => {
    const mensaje = (0, usuarios_services_1.helloService)();
    return res.send(mensaje);
};
exports.hello = hello;
