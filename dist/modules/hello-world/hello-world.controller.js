"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const hello_world_services_1 = require("./hello-world.services");
const hello = (req, res) => {
    const mensaje = (0, hello_world_services_1.helloService)();
    return res.send(mensaje);
};
exports.hello = hello;
