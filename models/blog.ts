import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
    {
        title: {type: String},
        description: {type: String},
    },
    {
        timestamps: true,
    }
);

const Blog = mongoose.models.weblogdb || mongoose.model("weblogdb", blogSchema);

export default Blog;