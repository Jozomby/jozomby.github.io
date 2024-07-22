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
                window.location.href = "/recipes/"
              }}
            >
              Home
            </a>
          </div>
          <div className="link">
            <a
              onClick={e => {
                e.preventDefault()
                window.location.href = "/recipes/recipes"
              }}
            >
              Recipes
            </a>
          </div>
          <div className="link">
            <a
              onClick={e => {
                e.preventDefault()
                window.location.href = "/recipes/source"
              }}
            >
              Source Material
            </a>
          </div>
          <div className="link">
            <a
              onClick={e => {
                e.preventDefault()
                window.location.href = "/recipes/about"
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
