"use client"
import { useTheme } from "@/assets/contexts/theme"
import Foods from "@/components/home-page/foods"
import SearchContent from "@/components/home-page/search-content"
import SearchBar from "@/components/home-page/searchbar"
import CardFood from "@/components/reusable/card-food"
import { useContext } from "react"

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
      <main className={`grid grid-cols-1 ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}>
        <section className="col-start-1 row-start-1 w-full h-[519px]">
          <img
            src="/platter.webp"
            alt="platte"
            className="w-full h-full object-cover"
          />
        </section>

        <section className="col-start-1 row-start-1 align-middle content-center pl-4 max-w-[90vh]">
          <h1
            className="text-white font-extrabold text-4xl"
            style={{ textShadow: "1px 1px 5px #03071E" }}
          >
            All recipe for coock🍳
          </h1>
          <h4
            className="text-white font-light text-2xl"
            style={{ textShadow: "1px 1px 5px #03071E" }}
          >
            {"Do you need ideas because you don't know what to cook?"}
          </h4>
          <h5
            className="text-white font-extralight text-lg"
            style={{ textShadow: "1px 1px 5px #03071E" }}
          >
            This is the place for you, a page intended for you to find new and
            different ideas for cooking
          </h5>
        </section>
        <SearchContent />
        <section>
          <h1></h1>
        </section>
        <section>
          <Foods />
        </section>
      </main>
  )
}
