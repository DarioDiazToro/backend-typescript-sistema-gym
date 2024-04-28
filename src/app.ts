import express from "express";
import misRutas from "./router";
import { AppDataSource } from "./data-source";

export class Server {

    private app: any;
    private port: number;
    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 4000;
        this.routes();
        this.connectionBd();
    }

    routes() {
        this.app.use(misRutas);
    }

    connectionBd() {
        AppDataSource.initialize()
            .then(() => {
                // here you can start to work with your database
            })
            .catch((error) => console.log(error))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Escuchando el puerto: ", this.port);
        });
    }
}

