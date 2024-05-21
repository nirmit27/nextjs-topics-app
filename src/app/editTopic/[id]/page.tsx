//

export default function EditTopic() {
  return (
    <form
      method="post"
      className="mx-auto max-w-3xl mt-3 flex flex-col gap-4 p-8 border border-white bg-white rounded-md"
    >
      <label htmlFor="title" className="font-semibold text-md">
        New title
      </label>
      <input
        type="text"
        name="title"
        id="title"
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
