"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllMovie = exports.DeleteMovie = exports.UpdateMovie = exports.AddMovie = void 0;
const utility_1 = require("../utils/utility");
const moviesModel_1 = __importDefault(require("../model/moviesModel"));
/**===============ADD MOVIE====================**/
const AddMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, image, price } = req.body;
        const validateResult = utility_1.addMovieSchema.validate(req.body, utility_1.option);
        if (validateResult.error) {
            return res.status(400).json({
                Error: validateResult.error.details[0].message,
            });
        }
        const movie = yield moviesModel_1.default.findOne({ title });
        if (!movie) {
            const newMovie = yield moviesModel_1.default.create({
                title,
                description,
                image,
                price,
            });
            return res.status(201).json({
                message: "Movie added successfully",
            });
        }
        return res.status(400).json({
            message: "Movie already exist",
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.AddMovie = AddMovie;
/**========================UPDATE MOVIE=========================**/
const UpdateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, image, price } = req.body;
        const validateResult = utility_1.addMovieSchema.validate(req.body, utility_1.option);
        if (validateResult.error) {
            return res.status(400).json({
                Error: validateResult.error.details[0].message,
            });
        }
        const movie = yield moviesModel_1.default.findOne({ title });
        if (movie) {
            const newMovie = yield moviesModel_1.default.updateOne({
                title,
                description,
                image,
                price,
            });
            return res.status(201).json({
                message: "Movie updated  successfully",
            });
        }
        return res.status(400).json({
            message: "Movie does not exist",
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.UpdateMovie = UpdateMovie;
/**=========================DELETE MOVIE==========================**/
const DeleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        const movie = yield moviesModel_1.default.findOne({ title });
        if (movie) {
            const newMovie = yield moviesModel_1.default.deleteOne({
                title,
            });
            return res.status(201).json({
                message: "Movie deleted successfully",
            });
        }
        return res.status(400).json({
            message: "Movie does not exist",
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.DeleteMovie = DeleteMovie;
/**=====================GET MOVIES=======================**/
const AllMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    moviesModel_1.default.find()
        .then((Movie) => {
        res.send(Movie);
    })
        .catch((err) => {
        console.log(err);
    });
});
exports.AllMovie = AllMovie;
