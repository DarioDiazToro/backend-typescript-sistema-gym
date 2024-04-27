"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = Number(process.env.PORT) || 4000;
        this.routes();
    }
    routes() {
        this.app.use(router_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Escuchando el puerto: ", this.port);
        });
    }
}
exports.Server = Server;
