import Link from "next/link";
import RemoveButton from "./RemoveButton";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicList() {
  return (
    <div className="mt-8">
      <div className="bg-white rounded-md p-4">
        <h1>Topic title</h1>
        <div>Topic Description</div>
        <div>
          <Link href={"/editTopic"}>
            <HiPencilAlt size={24} />
          </Link>
          <RemoveButton />
        </div>
      </div>
    </div>
  );
}
