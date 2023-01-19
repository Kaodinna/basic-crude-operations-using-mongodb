"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.imageSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
});
const Image = mongoose_1.default.model("image", exports.imageSchema);
exports.default = Image;
