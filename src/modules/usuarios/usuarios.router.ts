
import { Request, Response, Router } from "express";
import { hello } from "./usuarios.controller";

const router = Router();


router.get("/", [], hello);
router.get("/saludo", [], (req: Request, res: Response) => {
    res.send("saludo usuario");
});


export default router;