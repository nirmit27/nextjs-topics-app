"use client";

import { ObjectId } from "mongoose";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveButton({ id }: { id: ObjectId }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/topics?id=${id}`,
        {
          method: "DELETE",
        }
      );
      router.refresh();
    }
  };

  return (
    <button
      onClick={removeTopic}
      className="text-red-500 hover:text-red-700 focus:outline-none focus:text-red-700"
    >
      <HiOutlineTrash size={24} />
    </button>
  );
}
