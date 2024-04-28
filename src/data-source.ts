
import "reflect-metadata"
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "gym",
    synchronize: true,
    logging: false,
    entities: ["dist/models/*.js"],
    subscribers: [],
    migrations: [],
})