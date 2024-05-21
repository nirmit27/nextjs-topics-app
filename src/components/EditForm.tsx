"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function EditoldNote({ oldNote }: any) {
  console.log(oldNote.note._id);

  const router = useRouter();
  const [newTitle, setNewTitle] = useState(oldNote.note.title);
  const [newDescription, setNewDescription] = useState(oldNote.note.description);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/topics/${oldNote.note._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newTitle, newDescription }),
        }
      );

      if (res.ok) {
        router.replace("/");
        router.refresh();
      } else throw new Error("Failed to update note.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl mt-3 flex flex-col gap-4 p-8 border border-white bg-white rounded-md"
    >
      <label htmlFor="title" className="font-semibold text-md">
        New title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
        value={newTitle}
        required
        placeholder="Enter new title"
        className="px-4 py-2 text-sm border border-slate-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <label htmlFor="desc" className="font-semibold text-md">
        New description
      </label>
      <input
        type="text"
        name="desc"
        id="desc"
        onChange={(e) => {
          setNewDescription(e.target.value);
        }}
        value={newDescription}
        required
        placeholder="Enter new description"
        className="px-4 py-2 text-sm border border-slate-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="mt-2 w-fit py-2 px-4 bg-green-600 text-sm font-semibold text-white rounded-sm
        focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-green-700 hover:bg-green-700 active:bg-green-800"
        >
          Update note
        </button>
      </div>
    </form>
  );
}
