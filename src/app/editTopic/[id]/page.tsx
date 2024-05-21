import { ObjectId } from "mongoose";
import EditForm from "../../../components/EditForm";

async function getNoteById(id: ObjectId) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/topics/${id}`,
      {
        cache: "no-store",
      }
    );

    if (res.ok) return res.json();
    else throw new Error("Failed to fetch previous note.");
  } catch (error) {
    console.log(error);
    return {};
  }
}

export default async function EditNote({ params }: any) {
  const { id } = params;

  const oldNote = await getNoteById(id);

  return <EditForm oldNote={oldNote} />;
}
