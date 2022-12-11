import supertest from "supertest";
import app from "../src/app";
import mongoose from "mongoose";
require("dotenv").config;

beforeEach(async () => {
  await mongoose.connect("mongodb://localhost/moviesStore");
});
afterEach;
async () => {
  await mongoose.connection.close();
};

describe("Post/Get/Update/Delete", () => {
  describe("post routes", () => {
    describe("", () => {
      it("register user", async () => {
        await supertest(app)
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
      });
      it("login user", async () => {
        const user = await supertest(app)
          .post("/users/login")
          .send({
            email: "chijiokenwoye@gmail.com",
            password: "deecagon123",
          })
          .expect(302);
      });
      it("add movie for user", async () => {
        const movie = await supertest(app)
          .post("/movie/add-movie")
          .send({
            title: "city of angels",
            description: "super interesting",
            price: 4000,
            image: "imagelink",
          })
          .expect(302);
      });
    });
    //Testing GET route
    describe("get route", () => {
      it("get movies should return 200", async () => {
        await supertest(app).get("/movies/allmovies");
        expect(200);
      });
    });
    //Testing UPDATE route
    describe("update routes", () => {
      it("updates movies for a user", async () => {
        const updateMovie = await supertest(app)
          .put("/movies//updatemovie/:title")
          .send({
            title: "city of angels",
            description: "really captivating",
            price: "7000",
            image: "imagelink",
          });
        expect(302);
      });
    });
    //Testing DELETE route
    describe("delete route", () => {
      it("delete movie for a user", async () => {
        const title = "city of angels";
        await supertest(app).delete("/movies/deletemovie/:title");
        expect(200);
      });
    });
  });
});
