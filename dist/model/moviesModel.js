"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.movieSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        rquired: true,
    },
    price: {
        type: String,
        required: true,
    },
});
const Movie = mongoose_1.default.model("movie", exports.movieSchema);
exports.default = Movie;
