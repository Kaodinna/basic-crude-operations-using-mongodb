import express, { Request, Response, Router, NextFunction } from "express";
import {
  AddMovie,
  UpdateMovie,
  DeleteMovie,
  AllMovie,
} from "../controller/moviesController";
import requireAuth from "../Authentication/auth";

const router: Router = express.Router();

router.post("/addmovie", requireAuth, AddMovie);
router.put("/updatemovie/:title", requireAuth, UpdateMovie);
router.delete("/deletemovie/:title", requireAuth, DeleteMovie);
router.get("/allmovies", requireAuth, AllMovie);
export default router;
