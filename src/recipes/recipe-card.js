import { memo } from "react"
import { recipeMapping } from "./recipe-mapping"
import "./recipe-card.css"

export const RecipeCard = memo(({ id }) => {
  const recipeInfo = recipeMapping[id]
  const handleCardClick = () => {
    window.location.href = recipeInfo.link
  }
  return (
    <div className={"partial-recipe-card"} onClick={handleCardClick}>
      <div className={"partial-recipe-card-text"}>
        <h1>{recipeInfo.name}</h1>
        <p className="description">{recipeInfo.summary}</p>
        <p className="quotes">{recipeInfo.quotes}</p>
      </div>
      {recipeInfo.image && (
        <div className={"partial-recipe-card-image"}>
          <img src={recipeInfo.image} />
        </div>
      )}
    </div>
  )
})
