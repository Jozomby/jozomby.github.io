import { memo } from "react"
import { RecipeCard } from "./recipe-card"

export const Home = memo(() => {
  return (
    <div>
      <RecipeCard id="chouta" />
      <RecipeCard id="redPorkCurry" />
      <RecipeCard id="rocksStew" />
      <RecipeCard id="cremlingCakes" />
      <RecipeCard id="steamedStrannaHaspers" />
      <RecipeCard id="fruitedRice" />
      <RecipeCard id="berryCake" />
      <RecipeCard id="thaylenBread" />
      <br />
      <p>See the <a href="/#/recipes/recipes">recipes page</a> for more</p>
    </div>
  )
})
