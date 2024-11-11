import { memo } from "react"
import "./about.css"

export const About = memo(() => {
  return (
    <>
      <div className="content">
        <div className="centered">
          <h1>About</h1>
        </div>
        <div className="about-container">
          <p>Welcome to my work-in-progress cookbook!</p>
          <p>
            I'm a huge fan of Brandon Sanderson, the Cosmere, and Roshar. This
            website is my attempt to recreate the foods mentioned in the books
            of the Stormlight Archive. If you haven't read them yet, I would
            encourage you to. See{" "}
            <a href="https://www.brandonsanderson.com/hello-my-names-brandon/">
              Brandon's website
            </a>{" "}
            for recommendations for where to start reading.
          </p>
          <p>
            While others have created recipes inspired by the Stormlight
            Archive, I've attempted something different here. I've done my best
            to recreate the exact dishes mentioned in the books, as closely as
            is possible with the ingredients we have on earth.
          </p>
          <p>This was my approach:</p>
          <ul>
            <li>Find and record every mention of food in the books</li>
            <li>
              Research the real-world cultural inspirations for each culture in
              the books
            </li>
            <li>
              Review <a href="https://wob.coppermind.net/">WOBs</a> and{" "}
              <a href="https://coppermind.net/wiki/Coppermind:Welcome">
                Coppermind articles
              </a>{" "}
              that mentioned food
            </li>
            <li>
              Decide which ingredients I was going to permit myself to use. For
              more information, see the{" "}
              <a href="/recipes/source">Source Material section</a>
            </li>
            <li>
              Finally, use the descriptions from the book, with the ingredients
              chosen, to make a recipe. Fill in spices and other ingredients
              from the relevant real-world cultures as needed.
            </li>
          </ul>
          <p>
            I hope that you enjoy these recipes. I certainly enjoyed creating
            them. They forced me to think about food in ways I hadn't before,
            and to combine things I never would have otherwise. It sounded crazy
            to me to pour curry sauce over cornbread, but I'm so glad I tried
            it. Enjoy the journey!
          </p>
          <p>
            ps. Since this is a work in progress, I'd love{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1SVKuTmr8zLvDplxhyjBrYILfwn49X81lQYkxPtWo3quXGA/viewform?usp=sf_link">
              any feedback
            </a>{" "}
            you have!
          </p>
        </div>
      </div>
    </>
  )
})
