import Link from "next/link";
import RemoveButton from "./RemoveButton";
import { HiPencilAlt } from "react-icons/hi";
import { Key } from "react";

async function getNotes() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/topics/`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) throw new Error("Failed to fetch topics!");
    else return res.json();
  } catch (error) {
    console.log(error);
    return { topics: [] };
  }
}

export default async function NoteList() {
  const { topics } = await getNotes();
  return (
    <>
      {topics.map((topic: any, i: Key) => (
        <div
          className="bg-white rounded-md p-8 mt-4 mx-auto flex justify-between items-start gap-4"
          key={i}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">{topic.title}</h1>
            <p>{topic.description}</p>
          </div>
          <div className="flex gap-2">
            <Link
              href={`/editTopic/${topic._id}`}
              className="text-slate-700 hover:text-black focus:outline-none focus:text-black"
            >
              <HiPencilAlt size={24} />
            </Link>
            <RemoveButton id={topic._id} />
          </div>
        </div>
      ))}
    </>
  );
}
