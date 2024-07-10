import { memo, useState } from "react"
import { Ingredient } from "./ingredient"
import { Button, Collapse } from "@mui/material"
import { recipeMapping } from "./recipe-mapping"

export const Recipe = memo(({ id }) => {
  const recipeInfo = recipeMapping[id]
  const [notesOpen, setNotesOpen] = useState(false)
  return (
    <div className="content">
      <div className="centered">
        <h1>{recipeInfo.name}</h1>
      </div>
      <div className="info-container">
        <div className="info-text">
          <p className="description">{recipeInfo.summary}</p>
          <p className="quotes">{recipeInfo.quotes}</p>
          <p className="specifications">{`Time: ${recipeInfo.time}. Makes ${recipeInfo.quantity}.`}</p>
          <Button onClick={() => setNotesOpen(oldNotesOpen => !oldNotesOpen)}>
            Notes
          </Button>
          <Collapse in={notesOpen}>
            <p className="notes">{recipeInfo.notes}</p>
          </Collapse>
        </div>
        {recipeInfo.image && (
          <div className="info-image">
            <img src={recipeInfo.image} className="overview-image" />
          </div>
        )}
      </div>
      <h2>Ingredients</h2>
      {recipeInfo.ingredientSections.map(ingredientSection => {
        return (
          <div className="ingredientsListWrapper">
            {!!ingredientSection.title && <h3>{ingredientSection.title}</h3>}
            <ul className="ingredients">
              {ingredientSection.ingredients.map(ingredient => (
                <li>
                  <Ingredient ingredient={ingredient} />
                </li>
              ))}
            </ul>
          </div>
        )
      })}
      <h2>Method</h2>
      <ol className="steps">
        {recipeInfo.steps.map(step => (
          <li>{step}</li>
        ))}
      </ol>
      <p className="feedback">
        Tried this recipe? <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1SVKuTmr8zLvDplxhyjBrYILfwn49X81lQYkxPtWo3quXGA/viewform?usp=sf_link">Let me know how it went.</a>
      </p>
    </div>
  )
})
