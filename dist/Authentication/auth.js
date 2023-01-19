"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_config_1 = require("../config/db.config");
dotenv_1.default.config();
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jsonwebtoken_1.default.verify(token, db_config_1.APP_SECRET, (err) => {
            if (err) {
                res.redirect("/users/login");
            }
            else {
                next();
            }
        });
    }
    else {
        res.redirect("/users/login");
    }
};
exports.default = requireAuth;
