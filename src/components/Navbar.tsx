import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-200 px-5 py-4 mx-auto max-w-3xl mb-8 shadow-sm shadow-black">
      <Link
        href={"/"}
        className="font-bold text-2xl focus:outline-none focus:text-slate-700 hover:text-slate-700"
      >
        Topics
      </Link>
      <Link
        href={"/addTopic"}
        className="text-md px-4 py-2 text-slate-600 focus:text-slate-800 focus:outline-none focus:underline focus:underline-offset-2 hover:text-slate-800 hover:underline hover:underline-offset-2 font-semibold bg-slate-300 p-4 rounded-md"
      >
        Create
      </Link>
    </div>
  );
}
