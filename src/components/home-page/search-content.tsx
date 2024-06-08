"use client"
import { useRef, useState } from "react"
import SearchBar from "./searchbar"
import { useTheme } from "@/assets/contexts/theme"

export default function SearchContent() {
  const [search, setSearch] = useState("")
  const { theme, toggleTheme } = useTheme()
  const firstSearch = useRef(true)
  return (
    <main className="col-start-1 row-start-1">
      <section
        className={`col-start-1 row-start-1 pl-4 w-full grid justify-center z-10 ${
          search != "" && theme === "light" ? "bg-white" : theme === "dark" && search != "" ? "bg-[#03071E]" : "bg-transparent"
        }`}
      >
        <SearchBar
          search={search}
          setSearch={setSearch}
          firstSearch={firstSearch}
        />
      </section>
      <section
        className={`col-start-1 row-start-1 w-full z-0 ${
          search != "" && theme === "light" ? "bg-white": theme === "dark" ? "bg-[#03071E] text-white" : ""
        }`}
      >
        {search != "" ? (
          <main className="w-[100%] h-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            ratione dolorem beatae doloremque dolor dignissimos aliquid
            reiciendis culpa perferendis quisquam vel expedita, libero
            consequuntur quis. Blanditiis, deleniti? Nisi, fugit expedita.
          </main>
        ) : (
          ""
        )}
      </section>
    </main>
  )
}
