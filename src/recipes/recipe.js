import { memo } from "react";
import { Chouta } from "./recipes/chouta"
import { ThaylenBread } from "./recipes/thaylen-bread"

const recipes = {
    chouta: <Chouta />,
    thaylenBread: <ThaylenBread />
}

export const Recipe = memo(({ id }) => {
    const recipeInfo = recipes[id]
    return (
        <div className="recipe-card">
            {recipeInfo}
        </div>
    )
})