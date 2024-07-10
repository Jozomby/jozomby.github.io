import { memo } from "react"
import { RecipeCard } from "./recipe-card"

export const Home = memo(() => {
  return (
    <div>
      <RecipeCard id="chouta" />
      <RecipeCard id="thaylenBread" />
    </div>
  )
})
