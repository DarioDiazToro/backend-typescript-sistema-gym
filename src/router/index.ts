import { Router } from "express";
import routerHelloWorld from "../modules/hello-world/hello-world.router";
import routerUsuarios from "../modules/usuarios/usuarios.router"
import routerGyms from "../modules/gyms/gyms.router";

const routes = Router();

const base = "/api/v1";


routes.use(`${base}/hello-world`, routerHelloWorld);
routes.use(`${base}/usuarios`, routerUsuarios); //TODO: PENDIENTE POR TERMINAR
routes.use(`${base}/gyms`, routerGyms);

export default routes;