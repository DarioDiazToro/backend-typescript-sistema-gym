"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("./usuarios.controller");
const router = (0, express_1.Router)();
router.get("/", [], usuarios_controller_1.hello);
router.get("/saludo", [], (req, res) => {
    res.send("saludo usuario");
});
exports.default = router;
