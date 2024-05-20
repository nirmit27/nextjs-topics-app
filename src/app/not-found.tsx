// Custom Not-Found page for the whole app

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <h1 className="text-2xl font-bold">Error 404</h1>
      <h2 className="text-xl font-semibold">Page not found</h2>
      <p>Couldn't find the requested resources.</p>
    </div>
  );
}
