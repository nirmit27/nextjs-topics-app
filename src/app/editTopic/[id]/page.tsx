//

export default function AddTopic() {
  return (
    <form
      method="post"
      className="mx-auto max-w-3xl mt-3 flex flex-col gap-4 p-6 border border-white bg-white"
    >
      <label htmlFor="title" className="font-semibold text-md">
        Topic title
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
        Topic description
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
          className="mt-2 py-2 px-6 bg-green-600 w-fit text-sm font-semibold text-white rounded-sm
        focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-green-700 hover:bg-green-700 active:bg-green-800"
        >
          Update topic
        </button>
      </div>
    </form>
  );
}
