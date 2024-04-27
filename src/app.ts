import express from "express";
import misRutas from "./router";

export class Server {

    private app: any;
    private port: number;
    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 4000;
        this.routes();
    }

    routes() {
        this.app.use(misRutas);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Escuchando el puerto: ", this.port);
        });
    }
}

