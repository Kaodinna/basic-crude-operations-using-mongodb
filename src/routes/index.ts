import express, { Request, Response, Router } from "express";
const router: Router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("helllooooo");
});

export default router;
