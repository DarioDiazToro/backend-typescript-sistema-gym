"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hello_world_controller_1 = require("./hello-world.controller");
const router = (0, express_1.Router)();
router.get("/", [], hello_world_controller_1.hello);
exports.default = router;
