import mongoose from "mongoose";
export interface ImageAttribute {
  _id?: any;
  name: string;
  image: any;
}

export const imageSchema = new mongoose.Schema<ImageAttribute>({
  name: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const Image = mongoose.model<ImageAttribute>("image", imageSchema);
export default Image;
