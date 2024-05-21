import connectToMongoDB from "../../../../lib/mongoConnect.js";
import Topic from "../../../../models/topic.model.js";
import { NextResponse, NextRequest } from "next/server.js";

export async function GET() {
  await connectToMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const { title, description } = await request.json();
  await connectToMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted." }, { status: 200 });
}
