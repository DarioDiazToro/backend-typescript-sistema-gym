import { Router } from "express";
import routerHelloWorld from "../modules/servicios/servicios.router";
import routerUsuarios from "../modules/usuarios/usuarios.router"
import routerGyms from "../modules/gyms/gyms.router";
import routerClientes from "../modules/clientes/cliente.router";
import routerAuth from "../modules/auth/auth.router";
import routerServicio from "../modules/servicios/servicios.router";
import routerCategoria from "../modules/categorias/categoria.router";
import routerProveedor from "../modules/proveedores/proveedores.router";



const routes = Router();

const base = "/api/v1";


routes.use(`${base}/hello-world`, routerHelloWorld);
routes.use(`${base}/usuarios`, routerUsuarios);


routes.use(`${base}/auth`, routerAuth);

routes.use(`${base}/gyms`, routerGyms);
routes.use(`${base}/clientes`, routerClientes);
routes.use(`${base}/categoria`, routerCategoria);
routes.use(`${base}/servicios`, routerServicio);
routes.use(`${base}/proveedores`, routerProveedor);





export default routes;