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
            <RecipeLine id="lavisAndCrab" />
          </li>
          <li>
            <RecipeLine id="candiedFruit" />
          </li>
          <li>
            <RecipeLine id="chickenAndFriedTenem" />
          </li>
          <li>
            <RecipeLine id="chickenAndMethiFruit" />
          </li>
          <li>
            <RecipeLine id="crabCurry" />
          </li>
          <li>
            <RecipeLine id="cremlingCakes" />
          </li>
          <li>
            <RecipeLine id="coconutCustard" />
          </li>
          <li>
            <RecipeLine id="fruitedRice" />
          </li>
          <li>
            <RecipeLine id="kuma" />
          </li>
          <li>
            <RecipeLine id="lavisCurry" />
          </li>
          <li>
            <RecipeLine id="lavisFlatbread" />
          </li>
          <li>
            <RecipeLine id="lavisFlatbreadPocket" />
          </li>
          <li>
            <RecipeLine id="lavisPastrySquares" />
          </li>
          <li>
            <RecipeLine id="nutsAndHoneyPastry" />
          </li>
          <li>
            <RecipeLine id="porkSkewers" />
          </li>
          <li>
            <RecipeLine id="redPorkCurry" />
          </li>
          <li>
            <RecipeLine id="simberriesAndCreamPastry" />
          </li>
          <li>
            <RecipeLine id="stagmAndTallew" />
          </li>
          <li>
            <RecipeLine id="steamedStrannaHaspers" />
          </li>
          <li>
            <RecipeLine id="sugaredFlatbread" />
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
          <li>
            <RecipeLine id="vegetablesWithBlackSauce" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Azir</h2>
        <ul>
          <li>
            <RecipeLine id="azishSausages" />
          </li>
          <li>
            <RecipeLine id="berryCake" />
          </li>
          <li>
            <RecipeLine id="dinnerRolls" />
          </li>
          <li>
            <RecipeLine id="mashedSweetPotatoes" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Babatharnam</h2>
        <ul>
          <li>
            <RecipeLine id="tastySnails" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Herdaz</h2>
        <ul>
          <li>
            <RecipeLine id="chouta" />
          </li>
          <li>
            <RecipeLine id="frybread" />
          </li>
          <li>
            <RecipeLine id="tsupales" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Horneater Peaks</h2>
        <ul>
          <li>
            <RecipeLine id="fishStew" />
          </li>
          <li>
            <RecipeLine id="rocksStew" />
          </li>
          <li>
            <RecipeLine id="shiki" />
          </li>
          <li>
            <RecipeLine id="sugaredMashedBeans" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Kharbranth</h2>
        <ul>
          <li>
            <RecipeLine id="fruitSoup" />
          </li>
          <li>
            <RecipeLine id="ingoTea" />
          </li>
          <li>
            <RecipeLine id="porkBroth" />
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
            <RecipeLine id="misirWat" />
          </li>
          <li>
            <RecipeLine id="sodaBiscuits" />
          </li>
          <li>
            <RecipeLine id="strawberryJam" />
          </li>
        </ul>
      </div>
      <div className="recipeCountrySection">
        <h2>Tashikk</h2>
        <ul>
          <li>
            <RecipeLine id="clemabread" />
          </li>
          <li>
            <RecipeLine id="fluffyPancakes" />
          </li>
          <li>
            <RecipeLine id="seededPancakes" />
          </li>
          <li>
            <RecipeLine id="vegetablePancakes" />
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
      <div className="recipeCountrySection">
        <h2>Unknown</h2>
        <ul>
          <li>
            <RecipeLine id="bluebarJam" />
          </li>
        </ul>
      </div>
    </div>
  )
})
