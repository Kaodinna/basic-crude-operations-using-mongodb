import { Request, Response } from "express";
import { addMovieSchema, option } from "../utils/utility";
import Movie from "../model/moviesModel";

/**===============ADD MOVIE====================**/
export const AddMovie = async (req: Request, res: Response) => {
  try {
    const { title, description, image, price } = req.body;

    const validateResult = addMovieSchema.validate(req.body, option);
    if (validateResult.error) {
      return res.status(400).json({
        Error: validateResult.error.details[0].message,
      });
    }

    const movie = await Movie.findOne({ title });
    if (!movie) {
      const newMovie = await Movie.create({
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
  } catch (err) {
    console.log(err);
  }
};
/**========================UPDATE MOVIE=========================**/
export const UpdateMovie = async (req: Request, res: Response) => {
  try {
    const { title, description, image, price } = req.body;

    const validateResult = addMovieSchema.validate(req.body, option);
    if (validateResult.error) {
      return res.status(400).json({
        Error: validateResult.error.details[0].message,
      });
    }

    const movie = await Movie.findOne({ title });
    if (movie) {
      const newMovie = await Movie.updateOne({
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
  } catch (err) {
    console.log(err);
  }
};
/**=========================DELETE MOVIE==========================**/
export const DeleteMovie = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    const movie = await Movie.findOne({ title });
    if (movie) {
      const newMovie = await Movie.deleteOne({
        title,
      });
      return res.status(201).json({
        message: "Movie deleted successfully",
      });
    }
    return res.status(400).json({
      message: "Movie does not exist",
    });
  } catch (err) {
    console.log(err);
  }
};

/**=====================GET MOVIES=======================**/
export const AllMovie = async (req: Request, res: Response) => {
  Movie.find()
    .then((Movie) => {
      res.send(Movie);
    })
    .catch((err) => {
      console.log(err);
    });
};
