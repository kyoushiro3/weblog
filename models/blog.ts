import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: String,
    description: String,
    category: [String],
    user: String,
    email: String,
    img: String,
    date: String,
    time: String,
  },
  {
    timestamps: true,
  }
)

const Blog = mongoose.models.weblogdb || mongoose.model("weblogdb", blogSchema);

export default Blog;