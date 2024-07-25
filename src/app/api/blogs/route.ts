import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Blog from "../../../../models/blog";

export async function POST(request: NextRequest) {
  const { title, description, category, date, time, user, email, img } = await request.json();
  await connectMongoDB();
  const newBlog = await Blog.create({
    title,
    description,
    category,
    user,
    email,
    img,
    date,
    time,});
  return NextResponse.json(
    { message: "Blog created successfully", blog: newBlog },
    { status: 201 }
  );
}

export async function GET() {
  try {
    await connectMongoDB();
    const blogs = await Blog.find();
    return NextResponse.json(
      { message: "Blogs fetched successfully", blogs },
      { status: 200 }
    );
  } catch (error:any) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Failed to fetch blogs", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const id = new URL(request.url).searchParams.get("id");
  await connectMongoDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog deleted successfully" },
    { status: 200 }
  );
}
