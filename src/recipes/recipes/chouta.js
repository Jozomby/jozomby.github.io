import { memo } from "react"

export const id = "chouta"
export const link = "/recipes/recipes/chouta"
export const name = "Chouta"
// export const image
export const summary = "This is a recipe for chouta"

export const Chouta = memo(() => {
    return (
        <>
            <h1>{name}</h1>
        </>
    )
})