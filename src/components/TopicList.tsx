import Link from "next/link";
import RemoveButton from "./RemoveButton";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicList() {
  return (
    <div className="bg-white rounded-md p-6 mt-3 mx-auto flex justify-between items-start gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Topic title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum
          rerum facilis reiciendis expedita facere, quidem a quia quae possimus
          ab provident ipsam in architecto! Deserunt sed cupiditate laborum a?
        </p>
      </div>
      <div className="flex gap-2">
        <Link
          href={"/editTopic"}
          className="text-slate-700 hover:text-slate-800 focus:outline-none focus:text-slate-800"
        >
          <HiPencilAlt size={24} />
        </Link>
        <RemoveButton />
      </div>
    </div>
  );
}
