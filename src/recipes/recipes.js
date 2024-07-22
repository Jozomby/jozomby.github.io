import { memo } from "react"
import { RecipeLine } from "./recipe-line"
import "./recipes.css"

export const Recipes = memo(() => {
  return (
    <div className="content">
      <div className="centered">
        <h1>Recipes</h1>
      </div>
      <div className="recipeCountrySection">
        <h2>Alethkar</h2>
        <ul>
          <li>
            <RecipeLine id="chickenAndFriedTenem" />
          </li>
          <li>
            <RecipeLine id="cremlingCakes" />
          </li>
          <li>
            <RecipeLine id="fruitedRice" />
          </li>
          <li>
            <RecipeLine id="lavisFlatbreadPocket" />
          </li>
          <li>
            <RecipeLine id="porkSkewers" />
          </li>
          <li>
            <RecipeLine id="redPorkCurry" />
          </li>
          <li>
            <RecipeLine id="stagmAndTallew" />
          </li>
          <li>
            <RecipeLine id="steamedStrannaHaspers" />
          </li>
          <li>
            <RecipeLine id="sweetBeanDonutHoles" />
          </li>
          <li>
            <RecipeLine id="sweetBeanFlatbread" />
          </li>
          <li>
            <RecipeLine id="tallewFlatbread" />
          </li>
          <li>
            <RecipeLine id="vegetableCurrySoup" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Azir</h2>
        <ul>
          <li>
            <RecipeLine id="berryCake" />
          </li>
          <li>
            <RecipeLine id="mashedSweetPotatoes" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Herdaz</h2>
        <ul>
          <li>
            <RecipeLine id="chouta" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Horneater Peaks</h2>
        <ul>
          <li>
            <RecipeLine id="rocksStew" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Kharbranth</h2>
        <ul>
          <li>
            <RecipeLine id="fruitSoup" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Purelake</h2>
        <ul>
          <li>
            <RecipeLine id="fishSoup" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Shinovar</h2>
        <ul>
          <li>
            <RecipeLine id="strawberryJam" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Tashikk</h2>
        <ul>
          <li>
            <RecipeLine id="fluffyPancakes" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Thaylenah</h2>
        <ul>
          <li>
            <RecipeLine id="thaylenBread" />
          </li>
        </ul>
      </div>
    </div>
  )
})
