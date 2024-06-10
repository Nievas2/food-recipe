"use client"
import { useTheme } from "@/assets/contexts/theme"
import Foods from "@/components/home-page/foods"
import SearchContent from "@/components/home-page/search-content"
import SearchBar from "@/components/home-page/searchbar"
import CardFood from "@/components/reusable/card-food"
import { useParams } from "next/navigation"
import { useContext, useEffect, useState } from "react"

 interface Dictionary {
   name: string
   language: string
   title:string
   subTitle:string
   description:string
 }
export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const params = useParams<{ lang: string }>()
  const [dictionary, setDictionary] = useState<Dictionary>({
    name: "",
    language: "",
    title:"",
    subTitle:"",
    description:""
  })
  async function getDictionary() {
    console.log(params.lang);
    await import(`@/app/dictionaries/${params.lang}.json`).then((res) =>
      setDictionary({
        name: res.default.name,
        language: res.default.language,
        title: res.default.title,
        subTitle: res.default.subTitle,
        description: res.default.description
      })
    )
  }
  useEffect(() => {
    getDictionary()
  }, [])
  return (
    <main
      className={`grid grid-cols-1 ${
        theme === "dark" ? "bg-slate-900" : "bg-white"
      }`}
    >
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
          {dictionary.title}
        </h1>
        <h4
          className="text-white font-light text-2xl"
          style={{ textShadow: "1px 1px 5px #03071E" }}
        >
          {dictionary.subTitle}
        </h4>
        <h5
          className="text-white font-extralight text-lg"
          style={{ textShadow: "1px 1px 5px #03071E" }}
        >
          {dictionary.description}
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
