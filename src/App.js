import { Routes, Route, Outlet } from "react-router-dom"
import { GanderReveal } from "./gander-reveal"
import { RecipesRoutes } from "./recipes/routes"
import './App.css';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<GanderReveal />} />
      { RecipesRoutes }
    </Route>
  </Routes>
  )
}

function Layout() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
