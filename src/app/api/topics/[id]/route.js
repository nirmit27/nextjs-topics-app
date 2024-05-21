// For upating a record, we need a dynamic route to access it.

import connectToMongoDB from "../../../../../lib/mongoConnect";
import Topic from "../../../../../models/topic.model.js";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectToMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectToMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Note updated." }, { status: 200 });
}
