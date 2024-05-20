import Link from "next/link";

export default function Blog() {
    return (
      <div>
            <h1 className="text-slate-300 font-semibold text-2xl">My Blogs</h1>
            <br />
            <Link href="/blog/first">First blog</Link>
            <br />
            <Link href="/blog/second">Second blog</Link>
      </div>
    );
}
