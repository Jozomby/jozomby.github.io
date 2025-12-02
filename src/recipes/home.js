import { memo, useState } from "react"
import { RecipeCard } from "./recipe-card"
import { DownloadCard } from "./download-card"
import "./home.css"

export const Home = memo(() => {
  const [recipesToShow, setRecipesToShow] = useState(50)
  const allRecipes = [
    <RecipeCard id="tsupales" />,
    <RecipeCard id="chickenAndMethiFruit" />,
    <RecipeCard id="steamedStrannaHaspers" />,
    <RecipeCard id="chouta" />,
    <RecipeCard id="rocksStew" />,
    <RecipeCard id="cremlingCakes" />,
    <RecipeCard id="fishStew" />,
    <RecipeCard id="tastySnails" />,
    <RecipeCard id="misirWat" />,
    <RecipeCard id="porkBroth" />,
    <RecipeCard id="azishSausages" />,
    <RecipeCard id="berryCake" />,
    <RecipeCard id="bluebarJam" />,
    <RecipeCard id="candiedFruit" />,
    <RecipeCard id="chickenAndFriedTenem" />,
    <RecipeCard id="clemabread" />,
    <RecipeCard id="coconutCustard" />,
    <RecipeCard id="crabCurry" />,
    <RecipeCard id="dinnerRolls" />,
    <RecipeCard id="fishSoup" />,
    <RecipeCard id="fluffyPancakes" />,
    <RecipeCard id="fruitedRice" />,
    <RecipeCard id="fruitSoup" />,
    <RecipeCard id="frybread" />,
    <RecipeCard id="ingoTea" />,
    <RecipeCard id="kuma" />,
    <RecipeCard id="lavisAndCrab" />,
    <RecipeCard id="lavisCurry" />,
    <RecipeCard id="lavisFlatbread" />,
    <RecipeCard id="lavisFlatbreadPocket" />,
    <RecipeCard id="lavisPastrySquares" />,
    <RecipeCard id="mashedSweetPotatoes" />,
    <RecipeCard id="nutsAndHoneyPastry" />,
    <RecipeCard id="porkSkewers" />,
    <RecipeCard id="redPorkCurry" />,
    <RecipeCard id="seededPancakes" />,
    <RecipeCard id="shiki" />,
    <RecipeCard id="simberriesAndCreamPastry" />,
    <RecipeCard id="sodaBiscuits" />,
    <RecipeCard id="stagmAndTallew" />,
    <RecipeCard id="strawberryJam" />,
    <RecipeCard id="sugaredFlatbread" />,
    <RecipeCard id="sugaredMashedBeans" />,
    <RecipeCard id="sweetBeanDonutHoles" />,
    <RecipeCard id="sweetBeanFlatbread" />,
    <RecipeCard id="tallewFlatbread" />,
    <RecipeCard id="thaylenBread" />,
    <RecipeCard id="vegetableCurrySoup" />,
    <RecipeCard id="vegetablePancakes" />,
    <RecipeCard id="vegetablesWithBlackSauce" />
  ]

  const handleScroll = e => {
    const bottom =
      Math.abs(
        e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight)
      ) <= 1
    if (bottom && recipesToShow < allRecipes.length) {
      setRecipesToShow(recipesToShow + 10)
    }
  }

  return (
    <>
      <DownloadCard />
      <div className="scrollContainer" onScroll={handleScroll}>
        {allRecipes.slice(0, recipesToShow)}
      </div>
    </>
  )
})
