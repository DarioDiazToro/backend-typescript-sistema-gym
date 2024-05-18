"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const data_source_1 = require("./data-source");
const morgan_1 = __importDefault(require("morgan"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = Number(process.env.PORT) || 4000;
        this.middlewares();
        this.routes();
        this.connectionBd();
    }
    routes() {
        this.app.use(router_1.default);
    }
    connectionBd() {
        data_source_1.AppDataSource.initialize()
            .then(() => {
            // here you can start to work with your database
        })
            .catch((error) => console.log(error));
    }
    middlewares() {
        // this.app.use(express.urlencoded({ extended: true }));
        //TODO: IMPORTANTE PARA LEER DATA DESDE REQ.DATA COMO JSON
        this.app.use(express_1.default.json({ limit: '2000mb' }));
        this.app.use((0, morgan_1.default)('dev'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Escuchando el puerto: ", this.port);
        });
    }
}
exports.Server = Server;
