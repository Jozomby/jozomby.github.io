import { memo } from "react";
import { Recipe } from "./recipe"

export const Home = memo(() => {
    return (
        <div>
            {/* TODO: On the home page, display "recipe cards" that truncate the full recipe, and if you click them direct you to the full recipe page */}
            <Recipe id="chouta" />
            <Recipe id="thaylenBread" />
        </div>
    )
})
