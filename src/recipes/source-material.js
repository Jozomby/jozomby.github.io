import { memo, useState } from "react"
import { info as ingredients } from "./ingredient"
import "./source-material.css"

export const SourceMaterial = memo(() => {
  console.log(ingredients)
  const cultures = {
    alethkar: (
      <>
        The Alethi are based in large part on{" "}
        <a href="https://wob.coppermind.net/events/379/#e12671">Mongolia.</a>{" "}
        Brandon has also stated that they draw from{" "}
        <a href="https://wob.coppermind.net/events/216/#e6467">
          Korean culture
        </a>
        , the language is inspired by{" "}
        <a href="https://wob.coppermind.net/events/169-steelheart-release-party/#e9796">
          Semitic languages
        </a>
        , and the people look half Asian half Hawaiian, though picturing them as{" "}
        <a href="https://kogiopsis.tumblr.com/post/87962806784/people-in-the-cfsbf-chat-were-talking-about-this">
          East Indian
        </a>{" "}
        works well too. I initially tried to lean into the Mongolian roots for
        Alethi food, but I learned that curry is not a part of traditional
        Mongolian cuisine, while it is a staple of Alethi cuisine. Mongolian
        food is also heavy in dairy, which Alethi food is not. Given that, I
        used some Mongolian influences for more traditional Alethi dishes, such
        as the food eaten by Roshone, but looked to India more for the curries
        and spices. I did give a nod to Korea by using gochugaru (Korean red
        pepper flakes) as the way to bring heat to dishes. Being Vorin, Alethkar
        has two cuisines. Food eaten by men is spicy, and women's food is sweet.
        It should be noted that men do eat sweet food as well, such as fruit and
        pastries. (Oathbringer ch 69) But their meals tend toward spicy and
        savory, while women's meals are sweet.
      </>
    ),
    azir: (
      <>
        Azir draws from a number of real world cultures. The skin tones and
        clothing may be based on some African cultures, the government is
        somewhat inspired by{" "}
        <a href="https://wob.coppermind.net/events/25-paris-signing/#e1752">
          Confucian China
        </a>
        , and social reassignment is inspired by some{" "}
        <a href="https://wob.coppermind.net/events/116-general-reddit-2017/#e1443">
          medieval Indian societies
        </a>
        . As for food, the books mention cake, dinner rolls, sausage, mashed
        purple vegetables, and lots of fruit (dried, fresh, jams). I also
        decided to use yeast and wheat flour in some of their dishes, as these
        were things served at the palace, and so more likely to use exotic
        ingredients.
      </>
    ),
    babatharnam: <>Has tasty snails. (The Way of Kings ch 46)</>,
    emul: (
      <>
        Emul is a Makabaki kingdom, and as such likely is similar in culture to
        Azir. We don't know much more about them than that, other than the fact
        that their food is salty. (The Way of Kings ch 55)
      </>
    ),
    herdaz: (
      <>
        Herdazians draw heavily from{" "}
        <a href="https://wob.coppermind.net/events/216/#e6467">
          Hispanic cultures
        </a>
        , specifically{" "}
        <a href="https://wob.coppermind.net/events/116/#e8883">Mexico</a>. They
        also have some{" "}
        <a href="https://wob.coppermind.net/events/116/#e8883">
          Korean inspirations
        </a>
        , and their food has{" "}
        <a href="https://wob.coppermind.net/events/157/#e2854">
          Italian influences
        </a>
        . Given that they're neighbors with Alethkar, have some cultural
        intermixing, and were a part of historical Alethela, I included some of
        the spices and flavors that I used for the Alethi recipes.
      </>
    ),
    horneaterPeaks: (
      <>
        Horneaters are a{" "}
        <a href="https://wob.coppermind.net/events/355/#e10503">
          mashup of Hawaiian, Scottish, and Russian
        </a>{" "}
        cultures. Their food is stated to be less heavy on the spices. (The Way
        of Kings ch 23) We also know that Rock's recipes utilized the
        ingredients he had available, even if they weren't traditionally
        Unkalaki.
      </>
    ),
    kharbranth: (
      <>
        Kharbranth doesn't have a culture of its own. It's a cosmopolitan city
        that combines peoples from many different cultures. (The Way of Kings ch
        3) Soup is preferred for lunch (The Way of Kings ch 29), and at least
        some people there follow Vorin traditions of men's food being spicy and
        women's food being sweet.
      </>
    ),
    purelake: (
      <>
        We don't have much information at all about the cultures of the
        Purelake. We know they live in and near the water, have a laid back
        attitude, and eat fish. I chose to look to Polynesian cultures for
        inspiration.
      </>
    ),
    shinovar: (
      <>
        While the Shin are{" "}
        <a href="https://www.reddit.com/r/Stormlight_Archive/comments/4shyds/comment/d59u6fo/">
          not perfect analogues to western Europe,
        </a>{" "}
        they're the closest it gets on Roshar. They have wheat, grapes, chickens, sheep, etc.
        Given that they eat misir wat, and Ethiopian dish, there is definitely
        some Ethiopian influence in their food as well.
      </>
    ),
    tashikk: (
      <>
        Tashikk is a Makabaki kingdom, and as such likely is similar in culture
        to Azir. They do have their own food traditions with the 10 varieties of
        pancakes, and they appear to eat more clema rather than the other
        popular Rosharan grains.
      </>
    ),
    thaylenah: (
      <>
        Thaylenah is known for their bread, which is made from wheat and
        contains gluten. The linguistics of their language are somewhat{" "}
        <a href="https://wob.coppermind.net/events/260/#e8749">
          based on Welsh,
        </a>{" "}
        and being a nominally-Vorin kingdom, they likely have similar food
        influences as the Alethi. As an island nation, it's probably safe to
        assume that they eat quite a bit of seafood.
      </>
    ),
    otherCountries: (
      <>
        Other countries not mentioned above, like Jah Keved, haven't had any
        food mentioned in the books so far.
      </>
    )
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
          <h2>Methods</h2>
          <p className="methods-description">
            After seeing how careful I was to choose ingredients that fit
            Roshar, you may be surprised to see me recommending using food
            processors and stand mixers. Shouldn't everything be done by hand?
            Shouldn't we chop everything with hand-forged knives, bake in
            wood-fired ovens, cook over a flame, and avoid plastic utensils?
            Well, if you'd like to do that, go for it! If you're familiar with
            those methods, it won't take much tweaking to get these recipes to
            work with them. But for myself, and the common home cook, I've drawn
            the line here. I want these recipes to be doable for most people.
            All the modern methods I suggest are simply ways to make things
            easier. These same things have been done for hundreds if not
            thousands of years, we just have easier ways of doing them now. And
            I don't think there's anything wrong with that.
          </p>
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
