import mongoose from "mongoose";

export interface MovieAttribute {
  _id?: any;
  title: string;
  description: string;
  image: string;
  price: string;
}

export const movieSchema = new mongoose.Schema<MovieAttribute>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    rquired: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model<MovieAttribute>("movie", movieSchema);
export default Movie;
