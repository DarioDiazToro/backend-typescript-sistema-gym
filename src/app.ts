import express from "express";

export class Server {
    
    private app:any;
    private port:number;
    constructor(){
        this.app = express();
        this.port =  Number(process.env.PORT) || 4000;
    }


    listen(){
        this.app.listen(this.port,()=>{
            console.log("Escuchando el puerto: ", this.port);
        });
    }
}

