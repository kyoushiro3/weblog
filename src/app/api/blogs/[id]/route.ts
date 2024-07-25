import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Blog from "../../../../../models/blog";

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
    const { id } = params
    const {
      newTitle: title,
      newDescription: description,
      newCategory: category,
      date,
      time,
    } = await request.json()
  
    await connectMongoDB()
    await Blog.findByIdAndUpdate(id, { title, description, category, date, time })
    return NextResponse.json({ message: "Blog updated" }, { status: 200 })
  }
