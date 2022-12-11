import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { APP_SECRET } from "../config/db.config";
import { Request, Response, NextFunction } from "express";
dotenv.config();

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, APP_SECRET, (err: any) => {
      if (err) {
        res.redirect("/users/login");
      } else {
        next();
      }
    });
  } else {
    res.redirect("/users/login");
  }
};

export default requireAuth;
