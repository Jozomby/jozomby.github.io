import "../recipe.css"

export const exampleRecipe = {
  id: "name",
  link: "/recipes/recipes/name",
  name: "Name",
  summary: "Visible summary",
  notes: "Hidden notes",
  quotes: "Italic book quotes",
  ingredientSections: [
    {
      title: null,
      ingredients: [
        {
          item: "ingredientId",
          display: "1/2 cup nothing"
        }
      ]
    }
  ],
  steps: ["text"]
}
