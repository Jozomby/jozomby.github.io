import { Outlet, Route } from "react-router-dom"
import { Home } from "./home"
import { Recipes } from "./recipes"
import { SourceMaterial } from "./source-material"
import { About } from "./about"
import "./navbar.css"
import { Recipe } from "./recipe"

export const RecipesRoutes = (
  <Route path="/recipes" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="recipes">
      <Route index element={<Recipes />} />
      <Route path="chouta" element={<Recipe id={"chouta"} />} />
      <Route path="strawberryJam" element={<Recipe id={"strawberryJam"} />} />
      <Route path="thaylenBread" element={<Recipe id={"thaylenBread"} />} />
      <Route
        path="lavisFlatbreadPocket"
        element={<Recipe id={"lavisFlatbreadPocket"} />}
      />
      <Route
        path="tallewFlatbread"
        element={<Recipe id={"tallewFlatbread"} />}
      />
      <Route path="redPorkCurry" element={<Recipe id={"redPorkCurry"} />} />
      <Route
        path="sweetBeanDonutHoles"
        element={<Recipe id={"sweetBeanDonutHoles"} />}
      />
      <Route path="rocksStew" element={<Recipe id={"rocksStew"} />} />
      <Route path="fruitSoup" element={<Recipe id={"fruitSoup"} />} />
      <Route
        path="mashedSweetPotatoes"
        element={<Recipe id={"mashedSweetPotatoes"} />}
      />
      <Route path="fruitedRice" element={<Recipe id={"fruitedRice"} />} />
      <Route
        path="sweetBeanFlatbread"
        element={<Recipe id={"sweetBeanFlatbread"} />}
      />
      <Route path="fluffyPancakes" element={<Recipe id={"fluffyPancakes"} />} />
      <Route path="berryCake" element={<Recipe id={"berryCake"} />} />
      <Route path="cremlingCakes" element={<Recipe id={"cremlingCakes"} />} />
      <Route path="porkSkewers" element={<Recipe id={"porkSkewers"} />} />
      <Route
        path="vegetableCurrySoup"
        element={<Recipe id={"vegetableCurrySoup"} />}
      />
      <Route
        path="steamedStrannaHaspers"
        element={<Recipe id={"steamedStrannaHaspers"} />}
      />
      <Route
        path="chickenAndFriedTenem"
        element={<Recipe id={"chickenAndFriedTenem"} />}
      />
      <Route path="stagmAndTallew" element={<Recipe id={"stagmAndTallew"} />} />
      <Route path="fishSoup" element={<Recipe id={"fishSoup"} />} />
      <Route path="shiki" element={<Recipe id={"shiki"} />} />
      <Route
        path="lavisPastrySquares"
        element={<Recipe id={"lavisPastrySquares"} />}
      />
      <Route
        path="simberriesAndCreamPastry"
        element={<Recipe id={"simberriesAndCreamPastry"} />}
      />
      <Route
        path="nutsAndHoneyPastry"
        element={<Recipe id={"nutsAndHoneyPastry"} />}
      />
      <Route path="coconutCustard" element={<Recipe id={"coconutCustard"} />} />
      <Route path="bluebarJam" element={<Recipe id={"bluebarJam"} />} />
      <Route
        path="sugaredMashedBeans"
        element={<Recipe id={"sugaredMashedBeans"} />}
      />
      <Route path="clemabread" element={<Recipe id={"clemabread"} />} />
      <Route
        path="vegetablePancakes"
        element={<Recipe id={"vegetablePancakes"} />}
      />
      <Route path="kuma" element={<Recipe id={"kuma"} />} />
      <Route path="lavisFlatbread" element={<Recipe id={"lavisFlatbread"} />} />
      <Route
        path="chickenAndMethiFruit"
        element={<Recipe id={"chickenAndMethiFruit"} />}
      />
      <Route path="dinnerRolls" element={<Recipe id={"dinnerRolls"} />} />
      <Route
        path="sugaredFlatbread"
        element={<Recipe id={"sugaredFlatbread"} />}
      />
      <Route path="candiedFruit" element={<Recipe id={"candiedFruit"} />} />
      <Route path="azishSausages" element={<Recipe id={"azishSausages"} />} />
      <Route path="fishStew" element={<Recipe id={"fishStew"} />} />
      <Route path="seededPancakes" element={<Recipe id={"seededPancakes"} />} />
      <Route path="frybread" element={<Recipe id={"frybread"} />} />
      <Route path="ingoTea" element={<Recipe id={"ingoTea"} />} />
      <Route path="tastySnails" element={<Recipe id={"tastySnails"} />} />
      <Route path="porkBroth" element={<Recipe id={"porkBroth"} />} />
      <Route path="crabCurry" element={<Recipe id={"crabCurry"} />} />
      <Route
        path="vegetablesWithBlackSauce"
        element={<Recipe id={"vegetablesWithBlackSauce"} />}
      />
      <Route path="lavisCurry" element={<Recipe id={"lavisCurry"} />} />
      <Route path="tsupales" element={<Recipe id={"tsupales"} />} />
      <Route path="misirWat" element={<Recipe id={"misirWat"} />} />
      <Route path="sodaBiscuits" element={<Recipe id={"sodaBiscuits"} />} />
      <Route path="lavisAndCrab" element={<Recipe id={"lavisAndCrab"} />} />
    </Route>
    <Route path="source" element={<SourceMaterial />} />
    <Route path="about" element={<About />} />
  </Route>
)

// TODO: keep the currently selected navbar tab highlighted
function Layout() {
  return (
    <div className="RecipesApp">
      <div className="navbar">
        <div className="title">
          <h1>Recipes from the Stormlight Archive</h1>
        </div>
        <div className="links">
          <div className="link">
            <a
              onClick={e => {
                e.preventDefault()
                window.location.href = "/#/recipes/"
              }}
            >
              Home
            </a>
          </div>
          <div className="link">
            <a
              onClick={e => {
                e.preventDefault()
                window.location.href = "/#/recipes/recipes"
              }}
            >
              Recipes
            </a>
          </div>
          <div className="link">
            <a
              onClick={e => {
                e.preventDefault()
                window.location.href = "/#/recipes/source"
              }}
            >
              Source Material
            </a>
          </div>
          <div className="link">
            <a
              onClick={e => {
                e.preventDefault()
                window.location.href = "/#/recipes/about"
              }}
            >
              About
            </a>
          </div>
        </div>
      </div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}
