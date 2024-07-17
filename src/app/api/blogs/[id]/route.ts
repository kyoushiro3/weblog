import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Blog from "../../../../../models/blog";

export async function PUT(request: any,  { params }: { params: { id: string } }){
    const {id} = params;
    const {newTitle: title,
        newDescription: description,
        newCatogory: catogory,
        date,
        time,} = await request.json()
    await connectMongoDB()
    await Blog.findByIdAndUpdate(id, { title, description, catogory, date, time })
    return NextResponse.json({message: "Blog updated"}, {status:200})
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        await connectMongoDB();
        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }
        return NextResponse.json({ blog }, { status: 200 });
    } catch (error) {
        console.error("Error fetching blog:", error);
        return NextResponse.json({ message: "Failed to fetch blog", error: error.message }, { status: 500 });
    }
}