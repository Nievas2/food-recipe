"use client"
import { useTheme } from "@/assets/contexts/theme"
import Icon from "@/assets/icon"
import Image from "next/image"
import { useContext, useState } from "react"

export default function Navbar() {
  const [activeMenuMovil, setActiveMenuMovil] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const { theme, toggleTheme } = useTheme()
  return (
    <nav className={`w-full navbar ${theme === "dark" ? "bg-[#815419]" : "bg-[#F48C06]"}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setActiveMenuMovil(!activeMenuMovil)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                style={{ display: activeMenuMovil ? "block" : "hidden" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center align-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Icon />
            </div>
            <div className="hidden sm:ml-6 sm:block content-center w-full">
              <div className="flex space-x-4 ">
                <section className="flex flex-row justify-start">
                  {/* <a
                    href="#proyects"
                    className="text-gray-300 block rounded-md px-3 py-2 text-base font-medium h-full"
                  >
                    Proyectos
                  </a>
                  <a
                    href="#studies"
                    className="text-gray-300 block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Estudios
                  </a> */}
                </section>
                <section className="flex flex-row justify-self-end justify-end gap-3 flex-grow">
                  <button
                    className="flex align-midle text-white"
                    onClick={() => {
                      setDarkMode(!darkMode)
                      toggleTheme()
                    }}
                  >
                    <div className="bg-white pr-6 rounded-full">
                      <div
                        className={`rounded-full w-6 h-6 bg-red-600 duration-200 ${
                          darkMode ? "translate-x-6 bg-gray-700" : ""
                        }`}
                      ></div>
                    </div>
                  </button>{" "}
                  <span className="pl-2 text-white w-[110px]">
                    {theme === "light" ? "Modo oscuro" : "Modo claro"}
                  </span>
                  <div className="flex align-midle text-white">
                    <button>Idioma</button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className="sm:hidden"
        id="mobile-menu"
        hidden={activeMenuMovil}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

          {/* <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Proyectos
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Estudios
          </a> */}
          {/* <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Calendar
              </a> */}
        </div>
      </div>
    </nav>
  )
}
