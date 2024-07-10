import { memo, useState } from "react"
import { info as ingredients } from "./ingredient"
import "./source-material.css"

export const SourceMaterial = memo(() => {
  console.log(ingredients)
  const cultures = {
    azir: <>Azir draws from a number of real world cultures. The skin tones and clothing may be based on some African cultures, the government is somewhat inspired by <a href='https://wob.coppermind.net/events/25-paris-signing/#e1752'>Confucian China</a>, and social reassignment is inspired by some <a href='https://wob.coppermind.net/events/116-general-reddit-2017/#e1443'>medieval Indian societies</a>. As for food, the books mention cake, dinner rolls, sausage, mashed purple vegetables, and lots of fruit (dried, fresh, jams). I also decided to use yeast and wheat flour in some of their dishes, as these were things served at the palace, and so more likely to use exotic ingredients.</>
  }
  return (
    <>
      <div className="content">
        <div className="centered">
          <h1>Source Material</h1>
        </div>
        <div className="source-material-container">
          <h2>Cultures</h2>
          <ul className="collapse-list">
            {Object.keys(cultures).map(name => (
              <CollapseListItem name={name} description={cultures[name]} />
            ))}
          </ul>
          <h2>Ingredients</h2>
          <ul className="collapse-list">
            {Object.keys(ingredients).map(name => (
              <CollapseListItem name={name} description={ingredients[name]} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
})

const CollapseListItem = memo(({ name, description }) => {
  const [showDescription, setShowDescription] = useState(false)
  const formattedName = name
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, function (str) {
      return str.toUpperCase()
    })
  return (
    <li
      onClick={() =>
        setShowDescription(oldShowDescription => !oldShowDescription)
      }
    >
      {showDescription ? `⌄ ${formattedName}` : `> ${formattedName}`}
      {showDescription && (
        <>
          <p>{description}</p>
        </>
      )}
    </li>
  )
})
