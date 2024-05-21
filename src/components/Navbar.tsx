import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-200 px-8 py-4 mx-auto max-w-3xl mb-8 shadow-md shadow-black">
      <Link
        href={"/"}
        className="font-bold text-xl focus:outline-none focus:text-slate-900 hover:text-slate-900"
      >
        CRUD App
      </Link>
      <div className="flex justify-between items-center">
        <Link
          href={"/addTopic"}
          className="text-md px-4 py-2 text-slate-600 focus:text-slate-800 focus:outline-none focus:underline focus:underline-offset-2 hover:text-slate-800 hover:underline hover:underline-offset-2"
        >
          Create
        </Link>
        <Link
          href={"/editTopic/:id"}
          className="text-md px-4 py-2 text-slate-600 focus:text-slate-800 focus:outline-none focus:underline focus:underline-offset-2 hover:text-slate-800 hover:underline hover:underline-offset-2"
        >
          Update
        </Link>
      </div>
    </div>
  );
}
