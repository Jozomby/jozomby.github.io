import { memo } from "react";
import { RecipeLine } from "./recipe-line";

export const Recipes = memo(() => {
    return (
        <>
            <h1>Recipes</h1>
            <h2>Herdaz</h2>
            <ul>
                <li>
                    <RecipeLine id="chouta" />
                </li>
            </ul>
            <h2>Thaylenah</h2>
            <ul>
                <li>
                    <RecipeLine id="thaylen-bread" />
                </li>
            </ul>
        </>
    )
})