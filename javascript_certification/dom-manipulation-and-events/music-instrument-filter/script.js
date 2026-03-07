/*
  Dataset containing instrument information.

  Each object represents:
  - category → instrument type
  - instrument → instrument name
  - price → cost in USD
*/
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
];

/*
  Select dropdown element used for filtering instruments
*/
const selectContainer = document.querySelector("select-container");

/*
  Container where instrument cards are rendered
*/
const productsContainer = document.querySelector(".products-container");

/*
  Generates HTML cards for instruments.

  Parameters:
  instrumentCategory → selected category from dropdown

  Behavior:
  - If "all" is selected, return all instruments.
  - Otherwise filter instruments by category.

  Returns:
  A string of HTML markup for instrument cards.
*/
function instrumentCards(instrumentCategory) {

  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );

  return instruments
    .map(({ instrument, price }) => {
      return `
        <div class="card">
          <h2>${instrument}</h2>
          <p>$${price}</p>
        </div>
      `;
    })
    .join("");
}

/*
  Event listener for dropdown changes.

  When the user selects a category:
  - Generate filtered cards
  - Replace the existing card content
*/
selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
