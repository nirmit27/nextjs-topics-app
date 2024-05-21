import NoteList from "../components/NoteList";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen bg-slate-800 w-screen py-8 overflow-y-auto">
      <Navbar />
      <div className="mx-auto max-w-3xl">
        <NoteList />
      </div>
    </div>
  );
}
