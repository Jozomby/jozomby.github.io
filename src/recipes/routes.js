import { Outlet, Route } from "react-router-dom";
import { Home } from "./home";
import { Recipes } from "./recipes";
import { SourceMaterial } from "./source-material";
import { About } from "./about";
import "./navbar.css";
import { Chouta } from "./recipes/chouta";
import { ThaylenBread } from "./recipes/thaylen-bread";

export const RecipesRoutes = (
      <Route path="/recipes" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipes">
            <Route index element={<Recipes />} />
            <Route path="chouta" element={<Chouta />} />
            <Route path="thaylenBread" element={<ThaylenBread />} />
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
                    <a onClick={(e) => {
                        e.preventDefault();
                        window.location.href="/recipes/"
                    }}>
                        Home
                    </a>
                </div>
                <div className="link">
                    <a onClick={(e) => {
                        e.preventDefault();
                        window.location.href="/recipes/recipes"
                    }}>
                        Recipes
                    </a>
                </div>
                <div className="link">
                    <a onClick={(e) => {
                        e.preventDefault();
                        window.location.href="/recipes/source"
                    }}>
                        Source Material
                    </a>
                </div>
                <div className="link">
                    <a onClick={(e) => {
                        e.preventDefault();
                        window.location.href="/recipes/about"
                    }}>
                        About
                    </a>
                </div>
            </div>
        </div>
        <Outlet />
      </div>
    );
  }