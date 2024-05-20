import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-semibold text-xl">Let's try navigating ...</h1>
      <br />
      <div className="text-left">
        <Link className="block" href="/products">Products</Link>
        <Link className="block" href="/blog">Blog</Link>
        <Link className="block" href="/about">About</Link>
        <Link className="block" href="/profile">Profile</Link>
      </div>
    </main>
  );
}
