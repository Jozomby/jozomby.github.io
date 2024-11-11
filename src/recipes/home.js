import { memo } from "react"
import { RecipeCard } from "./recipe-card"

export const Home = memo(() => {
  return (
    <div>
      <RecipeCard id="chickenAndMethiFruit" />
      <RecipeCard id="simberriesAndCreamPastry" />
      <RecipeCard id="kuma" />
      <RecipeCard id="chouta" />
      <RecipeCard id="rocksStew" />
      <RecipeCard id="redPorkCurry" />
      <RecipeCard id="cremlingCakes" />
      <RecipeCard id="steamedStrannaHaspers" />
      <RecipeCard id="fruitedRice" />
      <br />
      <p>
        See the <a href="/#/recipes/recipes">recipes page</a> for more
      </p>
    </div>
  )
})
