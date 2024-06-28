import express from "express";
import misRutas from "./router";
import { AppDataSource } from "./data-source";
import morgan from 'morgan';
export class Server {

    private app: any;
    private port: number;
    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 4000;
        this.middlewares();
        this.routes();
        this.connectionBd();
    }





    routes() {
        this.app.use(misRutas);
    }

    async connectionBd() {
        await AppDataSource.initialize()
            .then(() => {
                // here you can start to work with your database
            })
            .catch((error) => console.log(error))
    }

    middlewares() {
        // this.app.use(express.urlencoded({ extended: true }));
        //TODO: IMPORTANTE PARA LEER DATA DESDE REQ.DATA COMO JSON
        this.app.use(express.json({ limit: '2000mb' }))
        this.app.use(morgan('dev'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Escuchando el puerto: ", this.port);
        });
    }
}

