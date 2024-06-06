import SearchBar from "@/components/home-page/searchbar"
import Image from "next/image"

export default function Home() {
  return (
    <main className="grid grid-cols-1 ">
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
      <section className="col-start-1 row-start-1 pl-4 w-full grid justify-center ">
        <SearchBar/>
      </section>
    </main>
  )
}
