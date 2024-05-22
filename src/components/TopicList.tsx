import Link from "next/link";
import RemoveButton from "./RemoveButton";
import { HiPencilAlt } from "react-icons/hi";
import { Key } from "react";

async function getTopics() {
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

export default async function TopicList() {
  const { topics } = await getTopics();
  return (
    <div className="md:mb-12 mb-6">
      {topics.map((topic: any, i: Key) => (
        <div
          className="bg-white rounded-md lg:p-8 md:p-6 p-5 md:mt-4 mt-3 md:mx-auto mx-4 flex justify-between items-start gap-4"
          key={i}
        >
          <div className="flex flex-col gap-2">
            <h1 className="md:text-xl sm:text-md font-bold">
              {topic.title.trim().replace(/[\r\n\t\\]+/, "")}
            </h1>
            <p className="md:text-sm text-xs">
              {topic.description.trim().replace(/[\r\n\t\\]+/, "")}
            </p>
          </div>
          <div className="flex md:gap-2 gap-1">
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
    </div>
  );
}
