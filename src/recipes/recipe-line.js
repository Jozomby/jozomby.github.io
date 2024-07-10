import { memo } from "react";
import "./recipe-line.css";

export const RecipeLine = memo(({ id }) => {
    const recipeInfoModule = require(`./recipes/${id}`)
    const recipeInfo = recipeInfoModule[id]
    return (
        <div className="recipeLine">
            <a href={recipeInfo.link}>{recipeInfo.name}</a>
            <p>{recipeInfo.summary}</p>
        </div>
    )
})