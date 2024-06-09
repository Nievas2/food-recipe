import { useTheme } from "@/assets/contexts/theme"
import { Recipe } from "@/types/food"

export default function CardFood({ recipe }: { recipe: Recipe }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className="max-w-[100%] flex flex-col gap-3">
      <section className="flex">
        <div>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="max-h-[100px]"
          />
        </div>
        <div className="px-3 flex-1">
          <h2 className="text-[#F48C06] font-extrabold text-xl">
            {recipe.title}
          </h2>

          {recipe.vegan && (
            <h4 className="text-[#F48C06] font-extralight text-md">Vegan</h4>
          )}
          {recipe.vegetarian && (
            <h4 className="text-[#F48C06] font-extralight text-md">
              Vegetarian
            </h4>
          )}
        </div>
      </section>

      <div className="flex flex-row flex-1 gap-4 flex-grow flex-wrap">
        {recipe.diets.map((diet, index) => (
          <div key={index}>
            <h4
              className={`text-white font-extralight text-md bg-[#9D0208] p-1 px-2 rounded-sm capitalize`}
            >
              {diet}
            </h4>
          </div>
        ))}
      </div>
    </main>
  )
}
