import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-200 px-8 py-4 mx-auto max-w-3xl">
      <Link
        href={"/"}
        className="font-bold text-xl focus:outline-none focus:text-slate-900 hover:text-slate-900"
      >
        CRUD App
      </Link>
      <Link
        href={"/addTopic"}
        className="text-sm rounded-md bg-green-500 px-4 py-2 text-white focus:outline-none focus:bg-green-600 hover:bg-green-600 active:bg-green-700"
      >
        Add topic
      </Link>
    </div>
  );
}
