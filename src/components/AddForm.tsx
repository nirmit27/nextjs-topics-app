"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please enter the title and description.");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}api/topics`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );

      if (res.ok) {
        router.replace("/");
        router.refresh();
      } else throw new Error("Failed to create new note.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:mx-auto md:mx-6 mx-4 max-w-3xl mt-3 flex flex-col md:gap-4 gap-2 lg:p-8 md:p-6 p-5 border border-white bg-white rounded-md"
    >
      <label htmlFor="title" className="font-semibold text-md">
        Add title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={(e) => {
          setTitle(e.target.value.replace(/[\r\n\t\\]+/, ""));
        }}
        value={title}
        required
        placeholder="Enter the title"
        className="px-4 py-2 text-sm border border-slate-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <label htmlFor="desc" className="font-semibold text-md">
        Add description
      </label>
      <input
        type="text"
        name="desc"
        id="desc"
        onChange={(e) => {
          setDescription(e.target.value.replace(/[\r\n\t\\]+/, ""));
        }}
        value={description}
        required
        placeholder="Enter the description"
        className="px-4 py-2 text-sm border border-slate-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="md:mt-0 mt-2 w-fit py-2 px-4 bg-green-600 text-sm font-semibold text-white rounded-sm
        focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-green-700 hover:bg-green-700 active:bg-green-800"
        >
          Create topic
        </button>
      </div>
    </form>
  );
}
