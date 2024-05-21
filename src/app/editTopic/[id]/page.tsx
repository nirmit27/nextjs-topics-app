import { ObjectId } from "mongoose";
import { useParams } from "next/navigation";
import EditForm from "../../../components/EditForm";

async function getNoteById(id: any) {
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

export default async function EditNote() {
  // const params = useParams();
  // const { id } = params;
  // console.log(id);

  // const topic = await getNoteById(id);
  // const { title, description } = topic;

  // return (
  //   <EditForm
  //     id={id as unknown as ObjectId}
  //     title={title}
  //     description={description}
  //   />
  // );
  return <></>;
}
