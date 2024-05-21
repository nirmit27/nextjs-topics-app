// Custom Not-Found page for the whole app

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col mt-3 bg-white p-8 mx-auto max-w-3xl gap-2 rounded-md">
      <h1 className="text-red-500 font-semibold text-2xl">Error 404</h1>
      <p>Couldn't find the requested resources.</p>
    </div>
  );
}
