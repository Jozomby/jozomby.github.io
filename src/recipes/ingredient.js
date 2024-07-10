import { memo } from "react"
import { Tooltip } from "@mui/material"
import "./ingredient.css"

export const info = {
  coconutOil:
    "Though never mentioned in the books, coconuts fit Roshar well. They seem like a close analogue to the varieties of rockbuds that have shells and contain water. On earth, coconut oil has been used for thousands of years, and features in Asian cuisine.",
  cornStarch:
    "Lavis is a close analogue to corn. https://wob.coppermind.net/events/409/#e13805",
  garlicClove:
    "Brandon has stated that there is a Rosharan analogue to garlic. https://wob.coppermind.net/events/409/#e13805",
  maseca:
    "Lavis is a close analogue to corn. https://wob.coppermind.net/events/409/#e13805 Mexican-style corn flour has been nixtamalized, though. This process never appears in the books, but it is required in order to make flatbread from corn. I have made the assumption that either Roshar has access to nixtamalization, or lavis is different enough from corn that it doen't require it.",
  onion:
    "Onions are in the same family as garlic, which Brandon has stated has a close analogue on Roshar. https://wob.coppermind.net/events/409/#e13805",
  oysterSauce:
    "Oyster sauce is made by cooking down oysters. Shellfish is common on Roshar, so something similar should be available",
  softShellCrab:
    "Soft shell crabs are not as crunchy as cremling claws, but they're the closest our regular human teeth are likely to appreciate.",
  spam: "Spam is my best guess for soulcast meat. The low sodium option is preferred as it further removes flavor. It is pork-based, which would be a type of meat Soulcasters would be familiar with.",
  vegetableOil:
    "There should be no problem finding low-flavor vegetable oils on Roshar. Seeds, vegetables, and fruits can all provide this."
}

export const Ingredient = memo(({ ingredient }) => {
  const ingredientInfo = info[ingredient.item]
  if (!ingredientInfo) {
    return <p>{ingredient.display}</p>
  }
  return (
    <>
      <Tooltip title={<p style={{ fontSize: "14px" }}>{ingredientInfo}</p>}>
        <p className="underlinedIngredient">{ingredient.display}</p>
      </Tooltip>
    </>
  )
})
