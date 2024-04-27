import { Router } from "express";
import routerHelloWorld from "../modules/hello-world/hello-world.router";
import routerUsuarios from "../modules/usuarios/usuarios.router"

const routes = Router();

const base = "/api/v1";


routes.use(`${base}/hello-world`, routerHelloWorld);
routes.use(`${base}/usuarios`, routerUsuarios);

export default routes;