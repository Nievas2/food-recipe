const Api_Key = "dcc2771288e04c2cb2990f5566cf1d98"
export const Food = async ({ search }: string) => {
  try {
    const result = await fetch(
      `https://api.spoonacular.com/food/products/search?query=${search}&number=10&apiKey=${Api_Key}`
    )
    const json = await result.json()

    const foods = json.products
    console.log(search)
    return foods?.map((food: { id: any; image: any; title: any }) => ({
      id: food.id,
      img: food.image,
      title: food.title
    }))
  } catch (error) {
    throw new Error("Error buscando las comidas")
  }
}
export const getFoods = async () => {
  try {
    const result = await fetch(
      `https://api.spoonacular.com/recipes/random?limitLicense=true&number=10&apiKey=${Api_Key}`
    ).catch((error) => {
      throw new Error(error)
    })
    const json = await result.json()

    const foods = json.products
    console.log(result)
    return foods?.map((food: { id: any; image: any; title: any }) => ({
      id: food.id,
      img: food.image,
      title: food.title
    }))
  } catch (error) {
    throw new Error("Error buscando las comidas")
  }
}