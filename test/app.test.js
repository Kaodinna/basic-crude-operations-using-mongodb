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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config;
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect("mongodb://localhost/moviesStore");
}));
afterEach;
() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close();
});
describe("Post/Get/Update/Delete", () => {
    describe("post routes", () => {
        describe("", () => {
            it("register user", () => __awaiter(void 0, void 0, void 0, function* () {
                yield (0, supertest_1.default)(app_1.default)
                    .post("/users/register")
                    .send({
                    firstName: "Kaodinna",
                    lastName: "Nwoye",
                    email: "chijiokenwoye64@gmail.com",
                    phone: "08100100811",
                    address: "Edo state",
                    password: "decagon123",
                    confirm_password: "decagon123",
                })
                    .expect(302);
            }));
            it("login user", () => __awaiter(void 0, void 0, void 0, function* () {
                const user = yield (0, supertest_1.default)(app_1.default)
                    .post("/users/login")
                    .send({
                    email: "chijiokenwoye@gmail.com",
                    password: "deecagon123",
                })
                    .expect(302);
            }));
            it("add movie for user", () => __awaiter(void 0, void 0, void 0, function* () {
                const movie = yield (0, supertest_1.default)(app_1.default)
                    .post("/movie/add-movie")
                    .send({
                    title: "city of angels",
                    description: "super interesting",
                    price: 4000,
                    image: "imagelink",
                })
                    .expect(302);
            }));
        });
        //Testing GET route
        describe("get route", () => {
            it("get movies should return 200", () => __awaiter(void 0, void 0, void 0, function* () {
                yield (0, supertest_1.default)(app_1.default).get("/movies/allmovies");
                expect(200);
            }));
        });
        //Testing UPDATE route
        describe("update routes", () => {
            it("updates movies for a user", () => __awaiter(void 0, void 0, void 0, function* () {
                const updateMovie = yield (0, supertest_1.default)(app_1.default)
                    .put("/movies//updatemovie/:title")
                    .send({
                    title: "city of angels",
                    description: "really captivating",
                    price: "7000",
                    image: "imagelink",
                });
                expect(302);
            }));
        });
        //Testing DELETE route
        describe("delete route", () => {
            it("delete movie for a user", () => __awaiter(void 0, void 0, void 0, function* () {
                const title = "city of angels";
                yield (0, supertest_1.default)(app_1.default).delete("/movies/deletemovie/:title");
                expect(200);
            }));
        });
    });
});
