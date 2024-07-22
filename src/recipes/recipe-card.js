import { memo } from "react"
import "./recipe-card.css"

export const RecipeCard = memo(({ id }) => {
const recipeInfoModule = require(`./recipes/${id}`)
const recipeInfo = recipeInfoModule[id]
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
