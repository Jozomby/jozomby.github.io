import { memo } from "react"
import { Tooltip } from "@mui/material"
import "./ingredient.css"

export const info = {
  additives: (
    <>
      I believe it self-evident that modern additives that are used to replicate
      the effects of other ingredients (ex: xanthan gum as a gluten replacement)
      would not be available on Roshar.
    </>
  ),
  avocado: (
    <>
      I've chosen to use avocados for lurnips. We know that lurnips are small
      and green, the flavor is such that they fit well in a sweet soup, and they
      are a staple food in Emul. (The Way of Kings interlude I-7) The fact that
      they are a staple food is the hardest requirement, as otherwise there are
      plenty of green fruits or vegetables that could work. I tried tomatillos,
      but eventually settled on avocados as a good compromise between being
      sweet and having many uses.
    </>
  ),
  // TODO - Update the notes on baking powder baking soda. Shin people make them from burning salt water plants to ash then dissolving in water, carbonating the water, and evaporating the water. Cream of tartar is a byproduct of wine making. It's a newer development in Shinovar and hasn't made its way to the rest of Roshar yet.
  bakingPowder: (
    <>
      Baking powder is simply baking soda with some additional ingredients.
      Neither of them were invented on earth until the 1800's, so would not be
      available on Roshar.
    </>
  ),
  bakingSoda: (
    <>
      On earth, baking soda wasn't invented until the 1800s. Roshar is clearly
      not yet to that point in their technological development, so I did not use
      baking soda or baking powder in any recipes.
    </>
  ),
  beanPaste: (
    <>
      Bean paste is mentioned as being used with flatbread, so it is available
      on Roshar. (Words of Radiance ch 59)
    </>
  ),
  bellPepper: (
    <>
      Spicy food is available on Roshar, and they seem to get the heat from
      chili peppers. (The Sunlit Man ch 15) If hot peppers are available, bell
      peppers should be as well, since they're simply a variety that has been
      bred to have no capsaicin.
    </>
  ),
  blueberries: (
    <>
      One of the jams Kabsal gives Shallan is called bluebar jam. (The Way of
      Kings ch 39) I made the obvious assumption that the fruit used for that
      would be similar to blueberries.
    </>
  ),
  burdockRoot: (
    <>
      Burdock root is pretty close to longroot from the books. It's long, brown,
      and one of the less-popular root vegetables. Once peeled, it's not quite
      as sticky as longroot, but that's a fairly minor difference. (The Way of
      Kings ch 37)
    </>
  ),
  butter: (
    <>
      There are sheep in Shinovar. (Rhythm of War, interlude I7) Given that
      sheep milk is used on earth for dairy products, the{" "}
      <a href="https://wob.coppermind.net/events/148-torcom-the-way-of-kings-re-read-interview/#e2778">
        differences in pigs that allow them to be milked,
      </a>{" "}
      and the fact that Shinovar generally has more access to earth-like foods,
      I assume that butter is widely available in Shinovar.
    </>
  ),
  butternutSquash: (
    <>
      I've chosen butternut squash to represent tenem. Tenem is described as a
      soft, light orange vegetable that can be fried and sliced into rounds.
      (The Way of Kings ch 22) At first I thought an orange sweet potato would
      work, but roots and tubers are mentioned often in the books, and tenem is
      described instead as a vegetable. That indicates to me that it's something
      different. So I chose to use butternut squash - it's the right color, and
      is delicious when fried.
    </>
  ),
  cannedFood: (
    <>
      Whether or not canned food is available on Roshar is a bit unclear. On one
      hand, Kaladin has never seen a metal can of food before meeting Riino, who
      I assume got the cans off-world. (Oathbringer ch 97) On the other hand,
      jam is stored in jars. (The Way of Kings ch 33) On earth, jam as we know
      it didn't exist until the invention of canning in the 1800s. Before that,
      fruit was preserved in sugar or honey all the way back to the Roman era,
      but it was more similar to preserves than jam. The amount of sugar needed
      to preserve fruit in a non-sterile environment makes a spreadable,
      fruit-forward jam like Shallan eats on bread not possible. Given that, it
      seems that some sort of food preservation method similar to canning is
      available on Roshar, even though it wasn't discovered on earth until much
      later. If that's the case, why is Kaladin not familiar with canned food?
      On earth, the invention of canning was prompted by an award offered by
      Napoleon for finding a way to preserve food for his armies. In Alethkar,
      this isn't necessary because of soulcasters. So perhaps canning (or
      something similar) was developed elsewhere on Roshar, then became popular
      for luxury items such as jam that are extremely difficult to create with
      soulcasting.
    </>
  ),
  celeriac: (
    <>
      I've used celeriac in place of stagm. Stagm is described as a brownish
      tuber that is small enough for an entire one to be a single serving, and
      it can be sliced into disks that can be picked up and topped with other
      food. (The Way of Kings ch 54) Celeriac matches this pretty well.
    </>
  ),
  chicken: (
    <>
      While it is considered exotic, chicken is available to wealthy people
      outside of Shinovar. (The Way of Kings ch 22)
    </>
  ),
  coconut: (
    <>
      Though never mentioned in the books, coconuts fit Roshar well. They seem
      like a close analogue to the varieties of rockbuds that have shells and
      contain water. On earth, coconut oil has been used for thousands of years,
      and features in Asian cuisine.
    </>
  ),
  corn: (
    <>
      Lavis is a{" "}
      <a href="https://wob.coppermind.net/events/409/#e13805">
        close analogue to corn.
      </a>
    </>
  ),
  crayfish: (
    <>
      Crayfish are the closest thing I can find to a cremling. They're small and
      have just a little bit of meat of them. They seem very similar to skrips,
      since both have a flat tail, claws, and antennae. (Oathbringer ch 68)
    </>
  ),
  cucumber: (
    <>
      Cucumbers seem like a good fit for crispmelons. I've read that horses can
      enjoy them (it's implied that Gallant likes crispmelons in The Way of
      Kings ch 15), and they grow on vines, like many Rosharan vegetables.
    </>
  ),
  curryPaste: (
    <>
      Curry paste exists on Roshar. (Words of Radiance ch 49). I chose to use
      yellow curry paste each time, so that you don't have to buy multiple
      varieties. But try mixing it up! While yellow curry paste works well for
      women's food, as it is the least spicy, red curry paste might go better in
      men's food.
    </>
  ),
  dairy: (
    <>
      Brandon has stated that{" "}
      <a href="https://wob.coppermind.net/events/148-torcom-the-way-of-kings-re-read-interview/#e2778">
        pigs on Roshar give more milk than on earth.
      </a>{" "}
      This is important because pigs on earth are basically impossible to milk.
      They have around a dozen teats and only produce milk for 15 seconds at a
      time. Even in cultures that are known for using every part of the animal,
      pig milk is not used. So I've chosen to use dairy products very sparingly.
      Per Brandon, they are available, but I've chosen to interpret that as
      something mostly only available to the wealthy.
    </>
  ),
  dashi: (
    <>
      Dashi is simply Japanese-style bonito (fish) stock. You could replace with
      any other seafood stock if you wish. We know Rosharans do eat fish
      (Oathbringer ch 97), so fish stock should be available as well.
      Personally, I buy hon dashi (dried bonito stock granules) and use it to
      make dashi at 1 tsp hon dashi to 1 cup water.
    </>
  ),
  driedBeans: (
    <>
      Bean paste is available on Roshar (Words of Radiance ch 59) so beans
      should be as well.
    </>
  ),
  eggs: (
    <>
      I tried to avoid using eggs. I really did. Chicken eggs would not be
      widely available outside of Shinovar. However, there are several dishes
      described which are clearly leavened in some manner (fluffy pancakes in
      Edgedancer, lavis cakes in Oathbringer). Without gluten or baking soda,
      beaten egg whites are the best method I'm left with. I explored fermenting
      the batter or using aquafaba, but neither of those proved satisfactory.
      That said, I did some research on eggs and I think there is a case to be
      made that some crustaceans on Roshar lay eggs that contain whites that can
      be beaten to stiff peaks. On earth, crustaceans and other water-dwelling
      animals lay soft eggs that do not have a white. But as animals moved on
      land, eggs developed a hard shell to retain moisture. This also required
      the presence of a water reserve inside the shell, which we call the white
      of the egg. This reserve beats into a foam because it also contains
      protein. I do not think it is too much of a stretch to assume that on
      Roshar, a world where crustaceans live on land, that some of them have
      adapted to laying eggs outside of water. These eggs, then, would also
      likely contain whites that could be beaten and used as a leavening agent.
      On a somewhat related note, it is also interesting that eggs are never
      mentioned in the books. Since chicken as a food in mentioned frequently,
      it is likely that eggs are not mentioned either because they are unknown,
      or are common.
    </>
  ),
  fish: (
    <>
      At first I wasn't sure that fish would feature heavily in Rosharan
      cooking. Shellfish and crustaceans are mentioned much more frequently, and
      most rivers are ephemeral, only running after storms. (For an example, see
      Rhythm of War ch 17) However, when Riino gives Kaladin a can of fish
      (Oathbringer ch 97), he recognizes it immediately as 'fish rations.' This
      indicates not only that Kaladin is familiar with fish, but that it's used
      as soldier rations. I therefore conclude that fish must be at least
      somewhat common in Alethkar, and likely other parts of Roshar as well.
    </>
  ),
  garlicClove: (
    <>
      Brandon has stated that{" "}
      <a href="https://wob.coppermind.net/events/409/#e13805">
        there is a Rosharan analogue to garlic.
      </a>
    </>
  ),
  gelatin: (
    <>
      Gelatin on earth is an ancient ingredient made from animal tissues. I see
      no reason it wouldn't be available on Roshar as well. Obviously the
      convenient powdered form is a modern invention, but it seems reasonable to
      take that shortcut since it's still the same basic ingredient.
    </>
  ),
  glutinousRiceFlour: (
    <>
      Despite the name, glutinous rice flour does not contain gluten. It's named
      that because it's stickier and stretchier that normal rice flour. As for
      Roshar, I assume something similar is available since{" "}
      <a href="https://coppermind.net/wiki/Tallew">
        rice is an analogue to tallew.
      </a>
    </>
  ),
  gochugaru: (
    <>
      Gochugaru, or Korean hot pepper flakes, are my ingredient of choice to
      bring heat to Rosharan dishes, especially Alethi ones. If not available,
      it can be replaced with other red pepper flakes, though try and use
      medium-to-mild varieties. You could also replace with chili powders, such
      as kashmiri chili powder. If you do that, reduce the amount to 3/4 of the
      specified amount, since powder packs more tightly than flakes.
    </>
  ),
  hominy: (
    <>
      Lavis is a{" "}
      <a href="https://wob.coppermind.net/events/409/#e13805">
        close analogue to corn.
      </a>{" "}
      Hominy is corn that has been nixtamalized, though. This process never
      appears in the books, but it is required in order to make flatbread from
      corn, and we do see lavis flatbread in the books. I have made the
      assumption that either Roshar has access to nixtamalization, or lavis is
      different enough from corn that it doesn't require it.
    </>
  ),
  honey: (
    <>
      Honey is mentioned in the Rosharan Wines illustration in Oathbringer.
      While it's unlikely that bees exist on Roshar, there are flowers, which
      means that there are pollinators. It's not too much of a stretch to think
      that these other creatures might produce something similar to honey.
    </>
  ),
  hotPeppers: (
    <>
      Spicy food is available on Roshar, and they seem to get the heat from
      chili peppers. (The Sunlit Man ch 15)
    </>
  ),
  kiwi: (
    <>
      Scalespray fruit{" "}
      <a href="https://reactormag.com/cosmere-cuisine-meals-inspired-by-the-stormlight-archive-part-1/">
        tastes like kiwi.
      </a>
      .
    </>
  ),
  lemon: (
    <>
      Lemons are present on Roshar. (Oathbringer, Rosharan Wines illustration)
    </>
  ),
  lingonberryJam: (
    <>
      I used lingonberries in place of simberries. Simberries are described as
      having red skin and a clear interior (Rhythm of War ch 7). Lingonberries
      don't have a clear interior, but they are made into jam and wine like
      simberries. I went with lingonberries because there aren't actually that
      many commonly eaten berries with red skins. Strawberries and raspberries,
      which are the most common red berries, don't have skins. I recommend just
      buying lingonberry jam or spread - IKEA sells it at their stores. If you
      live in northern North America or Europe, though, you may be able to
      forage these in the wild. They are also known as lowbush cranberries. I've
      eaten plenty of them in Denali National Park in Alaska. If you must
      substitute, their flavor is similar to regular cranberries.
    </>
  ),
  maseca: (
    <>
      Lavis is a{" "}
      <a href="https://wob.coppermind.net/events/409/#e13805">
        close analogue to corn.
      </a>{" "}
      Mexican-style corn flour has been nixtamalized, though. This process never
      appears in the books, but it is required in order to make flatbread from
      corn. I have made the assumption that either Roshar has access to
      nixtamalization, or lavis is different enough from corn that it doesn't
      require it.
    </>
  ),
  molasses: (
    <>
      Molasses is a byproduct of the sugar making process. Since Roshar has
      sugar, they should have access to molasses as well.
    </>
  ),
  mussels: (
    <>
      Mussels are my choice for stranna haspers. Haspers are bivalve mollusks
      that are fairly common and live above water. (The Way of Kings ch 44) On
      earth we don't have any non-aquatic bivalves, but mussels fill the rest of
      the requirements.
    </>
  ),
  nuts: (
    <>Nuts are mentioned in the Rosharan Wines illustration in Oathbringer.</>
  ),
  oats: (
    <>
      I used oats in place of clema. I needed a gluten-free grain that could be
      used to make bread with granules in it. It also needed to be something
      that conceivably could be a staple food for a population. I chose oats
      because steel-cut oats work well in bread, and both steel-cut oats and oat
      flour are commonly available at grocery stores.
    </>
  ),
  onion: (
    <>
      Onions are in the same family as garlic, which Brandon has stated has a{" "}
      <a href="https://wob.coppermind.net/events/409/#e13805">
        close analogue on Roshar.
      </a>
    </>
  ),
  oysterSauce: (
    <>
      Oyster sauce is made by cooking down oysters. Shellfish is common on
      Roshar, so something similar should be available.
    </>
  ),
  passionfruit: (
    <>
      Passionfruit feels like something straight out of Roshar. It's a round
      fruit that grows on a vine, and is filled with pulp-encased seeds. If that
      isn't a rockbud I don't know what is.
    </>
  ),
  persimmons: (
    <>
      I used persimmons as methi fruit. Methi fruit is red when rotting (Rhythm
      of War ch 98) which implies that it's not red when ripe. Persimmons fit
      this well. They work well with asian cuisine, are delicious when cooked,
      and are orange when ripe, becoming more red when overripe. Just make sure
      to use fuya persimmons, as other varieties are too sour to eat when firm.
    </>
  ),
  pectin: (
    <>
      Pectin occurs naturally in many fruits, and is extracted from them for use
      in getting jams and jellies to gel. Pectin can be extracted by boiling and
      soaking citrus peels and seeds, which is what I assume they do on Roshar.
      (Lemons are mentioned in the Rosharan Wines illustration in Oathbringer.)
      Since it's essentially the same ingredient, I've opted to take a shortcut
      by using commercial pectin rather than extracting my own.
    </>
  ),
  pickledCucumber: (
    <>
      Cucumbers seem like a good fit for crispmelons. I've read that horses can
      enjoy them (it's implied that Gallant likes crispmelons in The Way of
      Kings ch 15), and they grow on vines, like many Rosharan vegetables.
      Vinegar is definitely present on Roshar: it's the next step in the
      fermentation process after alcohol, and Shallan is familiar with the
      smell. (The Way of Kings ch 48) Add those two together, and you get
      pickles.
    </>
  ),
  plum: (
    <>
      Plums seem like a good fit for palafruit. Just like palafruit, they
      contain pits, can be soft when ripe, and are brightly colored. (Rhythm of
      War ch 21) They also are popular in some Asian cuisines, so they seem like
      a good fit here.
    </>
  ),
  pork: (
    <>
      Pork exists on Roshar, and is available enough that well-to-do darkeyes
      eat it occasionally. (The Way of Kings, ch 37)
    </>
  ),
  potatoes: (
    <>
      I've chosen not to use potatoes in any of the recipes. There's plenty of
      root vegetables in Rosharan cooking, and I see no reason to include one
      that isn't mentioned in the books or by Brandon. Also, there's the fact
      that Rock is{" "}
      <a href="https://wob.coppermind.net/events/508/#e16222">
        not familiar with potatoes
      </a>
      .
    </>
  ),
  preservedLemon: (
    <>
      Preserved lemons are an ingredient from North Africa. Lemons are preserved
      in a salt brine, which makes them saltier, less sour, and intensifies the
      lemon flavor. They're a unique ingredient, and I chose them to make
      Tashikki food feel different from Alethi food. (And the Makabaki peoples
      do draw some inspirations from Africa.) As for the lemons themselves, they
      are present on Roshar. (Oathbringer, Rosharan Wines illustration)
    </>
  ),
  rice: (
    <>
      Tallew is{" "}
      <a href="https://coppermind.net/wiki/Tallew">comparable to rice.</a> It
      can be boiled, steamed, fermented, or made into flatbread.
    </>
  ),
  scallops: <>Shellfish is present on Roshar. (Rhythm of War prologue)</>,
  shrimp: (
    <>
      Shrimp seems like a good substitute for finger crabs. They look somewhat
      like curled fingers, need to be shelled like finger crabs, and should be
      cooked briefly just like Rock said. (Oathbringer ch 37)
    </>
  ),
  smelts: (
    <>
      We know that purelakers eat fish, specifically fish that are small enough
      to fit in a bucket and still swim around. (The Way of Kings Interlude
      I-1). Smelts match this well.
    </>
  ),
  softShellCrab: (
    <>
      Soft shell crabs are not as crunchy as cremling claws, but they're the
      closest our regular human teeth are likely to appreciate.
    </>
  ),
  // Add a note about why I chose not to use soy sauce
  spam: (
    <>
      Spam is my best guess for soulcast meat. The low sodium option is
      preferred as it further removes flavor. It is pork-based, which would be a
      type of meat Soulcasters would be familiar with.
    </>
  ),
  spices: (
    <>
      I see no reason why seeds, bark, flowers, etc. wouldn't be available on
      Roshar. I have chosen to use whatever spices fit the flavor I'm going for,
      rather than creating a justification for each individual spice. I did try
      to use similar spices across the recipes, especially in recipes from the
      same or similar cultures, to create cohesiveness in the cuisines.
    </>
  ),
  strawberry: <>Strawberries grow in Shinovar. (The Way of Kings ch 48)</>,
  summerSquash: (
    <>
      Since I picked butternut squash to represent tenem (see Butternut Squash
      on the Source Material page) it makes sense to use other types of squash
      as well.
    </>
  ),
  sweetPotato: (
    <>
      Brandon has stated the most popular vegetable on Roshar is{" "}
      <a href="https://wob.coppermind.net/events/409/#e13805">
        similar to a sweet potato
      </a>
      .
    </>
  ),
  tahini: (
    <>
      Tahini is simply ground sesame seeds, so I've treated this like I did the
      spices. I assume that Roshar will have a similar seed that we can use.
    </>
  ),
  // Update the note of tomatoes to include that since they're not used in Misir Wat in Shinovar, that's extra support to them not existing on Roshar
  tomatoes: (
    <>
      I've chosen not to use tomatoes in any recipes. They're never mentioned in
      the books, and avoiding them has helped me make the dishes feel a little
      more alien, to me at least.
    </>
  ),
  turnip: (
    <>
      As humorous as it sounds, I've used turnips in place of Rosharan curnips
      solely based on the name. We don't know much about curnips other than that
      they're a vegetable. Given Rosharan's penchant for naming things based off
      similar non-Rosharan things, it seems possible that curnips were named
      such <i>because</i> they were similar to turnips.
    </>
  ),
  vegetableOil: (
    <>
      There should be no problem finding low-flavor vegetable oils on Roshar.
      Seeds, vegetables, and fruits can all provide this.
    </>
  ),
  vinegar: (
    <>
      Vinegar is definitely present on Roshar: it's the next step in the
      fermentation process after alcohol, and Shallan is familiar with the
      smell. (The Way of Kings ch 48)
    </>
  ),
  wheatFlour: (
    <>
      Wheat flour is available as an{" "}
      <a href="https://wob.coppermind.net/events/409/#e13805">
        export from Shinovar.
      </a>
    </>
  ),
  yeast: (
    <>
      Though commercial yeast in packets or jars like we have today wouldn't be
      available on Roshar, wild yeast can be used for the same purpose. This is
      done today with sourdough recipes and the like. The people on Roshar
      definitely have access to yeast, it's just a little less convenient than
      what you can buy from the grocery store.
    </>
  ),
  yogurt: (
    <>
      According to Brandon,{" "}
      <a href="https://wob.coppermind.net/events/148-torcom-the-way-of-kings-re-read-interview/#e2778">
        dairy products are available on Roshar,
      </a>{" "}
      though they're less common. As for yogurt specifically, it's a traditional
      part of many relevant earth cuisines, including Indian and Mongolian food.
      I've chosen to use it sparingly, especially in upper-class or more
      traditional dishes.
    </>
  )
}

// Add notes on extra ingredients we know they eeat but I didn't use in any recipes. Caviar for the Alethi. Mutton and carrots for the Shin. etc.

export const Ingredient = memo(({ ingredient }) => {
  const ingredientInfo = info[ingredient.item]
  if (!ingredientInfo) {
    return <p>{ingredient.display}</p>
  }
  console.log(ingredientInfo)
  let numberWords = 0
  const ingredientInfoPieces = ingredientInfo.props.children
  if (typeof ingredientInfoPieces === "string") {
    numberWords = ingredientInfoPieces.split(" ").length
  } else {
    numberWords = ingredientInfoPieces.reduce((accumulator, piece) => {
      if (typeof piece === "string") {
        return accumulator + piece.split(" ").length
      } else {
        if (typeof piece?.props?.children === "string") {
          return accumulator + piece.props.children.split(" ").length
        } else {
          return accumulator + 3
        }
      }
    }, 0)
  }
  console.log(numberWords)
  return (
    <>
      <Tooltip
        title={<p style={{ fontSize: "14px" }}>{ingredientInfo}</p>}
        enterTouchDelay={0}
        leaveTouchDelay={(numberWords / 5) * 1000}
      >
        <p className="underlinedIngredient">{ingredient.display}</p>
      </Tooltip>
    </>
  )
})
