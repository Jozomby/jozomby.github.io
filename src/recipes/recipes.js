import { memo } from "react"
import { RecipeLine } from "./recipe-line"
import "./recipes.css"

export const Recipes = memo(() => {
  return (
    <div className="content">
      <div className="centered">
        <h1>Recipes</h1>
      </div>
      <div className="recipeCountrySection">
        <h2>Herdaz</h2>
        <ul>
          <li>
            <RecipeLine id="chouta" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Thaylenah</h2>
        <ul>
          <li>
            <RecipeLine id="thaylenBread" />
          </li>
        </ul>
      </div>
    </div>
  )
})
