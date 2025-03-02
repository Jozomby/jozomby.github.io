import { memo } from "react"
import { RecipeCard } from "./recipe-card"

export const Home = memo(() => {
  // TODO: infinite scroll
  return (
    <div>
      <RecipeCard id="tsupales" />
      <RecipeCard id="chickenAndMethiFruit" />
      <RecipeCard id="steamedStrannaHaspers" />
      <RecipeCard id="chouta" />
      <RecipeCard id="rocksStew" />
      <RecipeCard id="cremlingCakes" />
      <RecipeCard id="fishStew" />
      <RecipeCard id="tastySnails" />
      <RecipeCard id="misirWat" />
      <RecipeCard id="porkBroth" />
      <br />
      <p>
        See the <a href="/#/recipes/recipes">recipes page</a> for more
      </p>
    </div>
  )
})
