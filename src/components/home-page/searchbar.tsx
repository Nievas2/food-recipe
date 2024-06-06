import SearchIcon from "@/assets/searchIcon"

export default function SearchBar() {
  return (
    <main className="w-[90vh] p-2 flex justify-center mt-4">
      <div className="w-full flex flex-row rounded-xl  h-12 border-[1px] border-slate-950">
        <button
          type="submit"
          className="w-12 bg-white rounded-l-xl border-r-[1px] border-r-slate-950 px-4 py-2"
        >
          <SearchIcon />
        </button>
        <input
          type="text"
          className="w-full  p-2"
        />
        <select
          name="option"
          id=""
          className="rounded-r-xl border-l-[1px] border-l-slate-950"
        >
          <option value="">Food</option> <option value="">Recipe</option>
        </select>
      </div>
    </main>
  )
}