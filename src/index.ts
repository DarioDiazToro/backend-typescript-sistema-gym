require("dotenv").config();
import { Server } from "./app";

const server = new Server();

server.listen();