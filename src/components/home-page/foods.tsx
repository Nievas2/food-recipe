"use client"
import { getFoods } from "@/services/food"
import { useEffect, useState } from "react"
import CardFood from "../reusable/card-food"

export default function Foods() {
  const [food, setFood] = useState<String[]>()
  async function getFoodsRandoms() {/* 
    const response = await getFoods()
      .then((data) => {
        setFood(data)
      })
      .catch((error) => {
        throw new Error(error)
      }) */
     console.log("test");
     setFood(["data","data" , "", ""])
     
  }
  useEffect(()=>{
    getFoodsRandoms()
  },[])
  
  return (
    <main className="w-full grid grid-cols-3 justify-center align-middle gap-4 p-4">
      {food && food.map((food) => <CardFood key={crypto.randomUUID()} />)}
    </main>
  )
}
