
import "reflect-metadata"
import { DataSource } from "typeorm";
import { GymEntity } from "./models/gym";
import { UsuariosEntity } from "./models/usuario";
import { CategoriaEntity } from "./models/categoria";
import { ClienteEntity } from "./models/cliente";
import { ServicioEntity } from "./models/servicio";
import { ProveedorEntity } from "./models/proveedor";
import { ProductoEntity } from "./models/producto";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "gym",
    synchronize: true,
    logging: false,
    entities: [GymEntity, UsuariosEntity, CategoriaEntity, ClienteEntity, ServicioEntity, ProveedorEntity, ProductoEntity],
    subscribers: [],
    migrations: [],
})

