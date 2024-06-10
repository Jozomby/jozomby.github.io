import { memo } from "react";

export const RecipeLine = memo(({ id }) => {
    const { link, name } = require(`./recipes/${id}`)
    return (
        <div className="recipe-line">
            <a href={link}>{name}</a>
        </div>
    )
})