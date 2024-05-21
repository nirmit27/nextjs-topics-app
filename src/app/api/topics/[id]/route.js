import connectToMongoDB from "../../../../../lib/mongoConnect";
import Topic from "../../../../../models/topic.model.js";
import { NextResponse } from "next/server";

export async function GET({ params }) {
  const { id } = params;
  await connectToMongoDB();
  const note = await Topic.findOne({ _id: id });
  return NextResponse.json({ note }, { status: 200 });
}

export async function PATCH(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectToMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Note updated." }, { status: 200 });
}
