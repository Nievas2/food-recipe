"use client"
import { getFoods } from "@/services/food"
import { useEffect, useState } from "react"
import CardFood from "../reusable/card-food"
import { Recipe } from "@/types/food"

export default function Foods() {
  const [foods, setFoods] = useState<Recipe[]>()
  async function getFoodsRandoms() {
    /* const response = await getFoods()
      .then((data) => {
        setFoods(data)
        console.log(data)
      })
      .catch((error) => {
        throw new Error(error)
      }) */

    /* setFood(["data","data" , "", ""]) */
  }
  useEffect(() => {
    getFoodsRandoms()
  }, [])

  return (
    <main className="w-full grid grid-cols-2 justify-center align-middle gap-4 p-4">
      {/* {foods &&
        foods.map((food: Recipe) => (
          <CardFood
            key={crypto.randomUUID()}
            recipe={food}
          />
        ))} */}
    </main>
  )
}
