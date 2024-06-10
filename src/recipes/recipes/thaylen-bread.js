import { memo } from "react"

export const id = "thaylen-bread"
export const link = "/recipes/recipes/thaylenBread"
export const name = "Thaylen Bread"
// export const image
export const summary = "Hey, here's how you make Thaylen bread"

export const ThaylenBread = memo(() => {
    return (
        <>
            <h1>{name}</h1>
        </>
    )
})