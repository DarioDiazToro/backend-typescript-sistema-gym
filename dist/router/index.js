"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hello_world_router_1 = __importDefault(require("../modules/hello-world/hello-world.router"));
const usuarios_router_1 = __importDefault(require("../modules/usuarios/usuarios.router"));
const gyms_router_1 = __importDefault(require("../modules/gyms/gyms.router"));
const cliente_router_1 = __importDefault(require("../modules/clientes/cliente.router"));
const routes = (0, express_1.Router)();
const base = "/api/v1";
routes.use(`${base}/hello-world`, hello_world_router_1.default);
routes.use(`${base}/usuarios`, usuarios_router_1.default); //TODO: PENDIENTE POR TERMINAR
routes.use(`${base}/gyms`, gyms_router_1.default);
routes.use(`${base}/clientes`, cliente_router_1.default);
exports.default = routes;
