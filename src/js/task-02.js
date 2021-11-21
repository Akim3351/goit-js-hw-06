const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsMarkup = document.getElementById('ingredients');

ingredients.map(el => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = `${el}`;
  console.log(listEl.textContent);
  ingredientsMarkup.appendChild(listEl);
});
