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
exports.Login = exports.Register = void 0;
const utility_1 = require("../utils/utility");
const userModel_1 = __importDefault(require("../model/userModel"));
const config = require("../config/db.config");
/**========================REGISTER USER==========================**/
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, phone, address, password, confirm_password, } = req.body;
        const validateResult = utility_1.registerSchema.validate(req.body, utility_1.option);
        if (validateResult.error) {
            return res.status(400).json({
                Error: validateResult.error.details[0].message,
            });
        }
        const salt = yield (0, utility_1.GenerateSalt)();
        const userPassword = yield (0, utility_1.GeneratePassword)(password, salt);
        const user = yield userModel_1.default.findOne({ email });
        if (!user) {
            const newUser = yield userModel_1.default.create({
                email,
                password: userPassword,
                firstName,
                lastName,
                salt,
                address,
                phone,
            });
            const user = yield userModel_1.default.findOne({ email });
            let signature = yield (0, utility_1.Generatesignature)({
                _id: user === null || user === void 0 ? void 0 : user._id,
            });
            return res.status(201).json({
                message: "User created successfully",
                signature,
            });
        }
        return res.status(400).json({
            message: "User already exist",
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.Register = Register;
/**======================User Login===========================**/
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const validateResult = utility_1.loginSchema.validate(req.body, utility_1.option);
        if (validateResult.error) {
            return res.status(400).json({
                Error: validateResult.error.details[0].message,
            });
        }
        const user = yield userModel_1.default.findOne({ email });
        if (user) {
            const validation = yield (0, utility_1.validatePassword)(password, user.password, user.salt);
            if (validation) {
                return res.status(200).json({
                    message: "You have successfully logged in",
                });
            }
        }
        return res.status(400).json({
            message: "Wrong username or password",
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.Login = Login;
