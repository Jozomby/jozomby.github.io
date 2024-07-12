import { memo } from "react"
import { Tooltip } from "@mui/material"
import "./ingredient.css"

export const info = {
  additives: (
    <>
      I believe it self-evident that modern additives that are used to replicate
      the effects of other ingredients (ex: xantham gum as a gluten replacement)
      would not be available on Roshar.
    </>
  ),
  bakingPowder: (
    <>
      Baking powder is simply baking soda with some additional ingredients.
      Neither of them were invented on earth until the 1800's, so would not be
      available on Roshar.
    </>
  ),
  bakingSoda: (
    <>
      On earth, baking soda wasn't invented until the 1800s. Roshar is clearly
      not yet to that point in their technological development, so I did not use
      baking soda or baking powder in any recipes.
    </>
  ),
  cannedFood: (
    <>
      Whether or not canned food is available on Roshar is a bit unclear. On one
      hand, Kaladin has never seen a metal can of food before meeting Riino
      (Oathbringer ch 97). On the other hand, jam is stored in jars (The Way of
      Kings ch 33). On earth, jam as we know it didn't exist until the invention
      of canning in the 1800s. Before that, fruit was preserved in sugar or
      honey all the way back to the Roman era, but it was more similar to
      preserves than jam. The amount of sugar needed to preserve fruit in a
      non-sterile environmeent makes a spreadable, fruit-forward jam like
      Shallan eats on bread not possible. Given that, it seems that some sort of
      food preservation method similar to canning is available on Roshar, even
      though it wasn't discovered on earth until much later. If that's the case,
      why is Kaladin not familiar with canned food? On earth, the invention of
      canning was prompted by an award offered by Napoleon for finding a way to
      preserve food for his armies. In Alethkar, this isn't necessary becausee
      of soulcasters. So perhaps canning (or something similar) was developed
      elsewhere on Roshar, then became popular for luxury items such as jam that
      are extremely difficult to create with soulcasting.
    </>
  ),
  coconutOil: (
    <>
      Though never mentioned in the books, coconuts fit Roshar well. They seem
      like a close analogue to the varieties of rockbuds that have shells and
      contain water. On earth, coconut oil has been used for thousands of years,
      and features in Asian cuisine.
    </>
  ),
  cornStarch: (
    <>
      Lavis is a{" "}
      <a href="https://wob.coppermind.net/events/409/#e13805">
        close analogue to corn.
      </a>
    </>
  ),
  dairy: (
    <>
      Brandon has stated that{" "}
      <a href="https://wob.coppermind.net/events/148-torcom-the-way-of-kings-re-read-interview/#e2778">
        pigs on Roshar give more milk than on earth.
      </a>{" "}
      This is important because pigs on earth are basically impossible to milk.
      They have around a dozen teats and only produce milk for 15 seconds at a
      time. Even in cultures that are known for using every part of the animal,
      pig milk is not used. So I've chosen to use dairy products very sparingly.
      Per Brandon, they are available, but I've chosen to interpret that as
      something mostly only available to the wealthy.
    </>
  ),
  eggs: (
    <>
      I tried to avoid using eggs. I really did. Chicken eggs would not be
      widely available outside of Shinovar. However, there are several dishes
      described which are clearly leavened in some manner (fluffy pancakes in
      Edgedancer, lavis cakes in Oathbringer). Without gluten or baking soda,
      beaten egg whites are the best method I'm left with. I explored fermenting
      the batter or using aquafaba, but neither of those proved satisfactory.
      That said, I did some research on eggs and I think there is a case to be
      made that some crustaceans on Roshar lay eggs that contain whites that can
      be beaten to stiff peaks. On earth, crustaceans and other water-dwelling
      animals lay soft eggs that do not have a white. But as animals moved on
      land, eggs developed a hard shell to retain moisture. This also required
      the presence of a water reserve inside the shell, which we call the white
      of the egg. This reserve beats into a foam because it also contains
      protein. I do not think it is too much of a stretch to assume that on
      Roshar, a world where crustaceans live on land, that some of them have
      adapted to laying eggs outside of water. These eggs, then, would also
      likely contain whites that could be beaten and used as a leavening agent.
      On a somewhat related note, it is also interesting that eggs are never
      mentioned in the books. Since chicken as a food in mentioned frequently,
      it is likely that eggs are not mentioned either because they are unknown,
      or are common.
    </>
  ),
  fish: (
    <>
      At first I wasn't sure that fish would feature heavily in Rosharan
      cooking. Shellfish and crusteaceans are mentioned much more frequently,
      and most rivers are ephemeral, only running after storms. (For an example,
      seee Rhythm of War ch 17) However, when Riino gives Kaladin a can of fish
      (Oathbringer ch 97), he recognizes it immediately as 'fish rations.' This
      indicates not only that Kaladin is familiar with fish, but that it's used
      as soldier rations. I therefore conclude that fish must be at least
      somewhat common in Alethkar, and likely other parts of Roshar as well.
    </>
  ),
  garlicClove: (
    <>
      Brandon has stated that{" "}
      <a href="https://wob.coppermind.net/events/409/#e13805">
        there is a Rosharan analogue to garlic.
      </a>
    </>
  ),
  maseca: (
    <>
      Lavis is a{" "}
      <a href="https://wob.coppermind.net/events/409/#e13805">
        close analogue to corn.
      </a>{" "}
      Mexican-style corn flour has been nixtamalized, though. This process never
      appears in the books, but it is required in order to make flatbread from
      corn. I have made the assumption that either Roshar has access to
      nixtamalization, or lavis is different enough from corn that it doen't
      require it.
    </>
  ),
  onion: (
    <>
      Onions are in the same family as garlic, which Brandon has stated has a{" "}
      <a href="https://wob.coppermind.net/events/409/#e13805">
        close analogue on Roshar.
      </a>
    </>
  ),
  oysterSauce: (
    <>
      Oyster sauce is made by cooking down oysters. Shellfish is common on
      Roshar, so something similar should be available.
    </>
  ),
  softShellCrab: (
    <>
      Soft shell crabs are not as crunchy as cremling claws, but they're the
      closest our regular human teeth are likely to appreciate.
    </>
  ),
  spam: (
    <>
      Spam is my best guess for soulcast meat. The low sodium option is
      preferred as it further removes flavor. It is pork-based, which would be a
      type of meat Soulcasters would be familiar with.
    </>
  ),
  spices: (
    <>
      I see no reason why seeds, bark, flowers, etc. wouldn't be available on
      Roshar. I have chosen to use whatever spices fit the flavor I'm going for,
      rather than creating a justification for each individal spice. I did try
      to use similar spices across the recipes, especially in recipes from the
      same or similar cultures, to create cohesiveness in the cuisines.
    </>
  ),
  vegetableOil: (
    <>
      There should be no problem finding low-flavor vegetable oils on Roshar.
      Seeds, vegetables, and fruits can all provide this.
    </>
  )
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
