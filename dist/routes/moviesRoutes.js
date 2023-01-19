"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moviesController_1 = require("../controller/moviesController");
const auth_1 = __importDefault(require("../Authentication/auth"));
const router = express_1.default.Router();
router.post("/addmovie", auth_1.default, moviesController_1.AddMovie);
router.put("/updatemovie/:title", auth_1.default, moviesController_1.UpdateMovie);
router.delete("/deletemovie/:title", auth_1.default, moviesController_1.DeleteMovie);
router.get("/allmovies", auth_1.default, moviesController_1.AllMovie);
exports.default = router;
