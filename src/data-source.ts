
import "reflect-metadata"
import { DataSource } from "typeorm";
import { GymEntity } from "./models/gym";
import { UsuariosEntity } from "./models/usuario";
import { CategoriaEntity } from "./models/categoria";
import { ClienteEntity } from "./models/cliente";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "gym",
    synchronize: true,
    logging: false,
    entities: [GymEntity, UsuariosEntity, CategoriaEntity, ClienteEntity],
    subscribers: [],
    migrations: [],
})

