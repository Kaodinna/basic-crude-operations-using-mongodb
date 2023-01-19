import createError from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import multer from "multer";
import Image from "model/imagemodel";
import moviesRouter from "./routes/moviesRoutes";
import usersRouter from "./routes/usersRoutes";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
mongoose
  .connect("mongodb://localhost/moviesStore")
  .then(() => {
    console.log("connected to Mongo");
  })
  .catch((error) => {
    console.log("error");
  });

// view engine setup

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

export default app;
