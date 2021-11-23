const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulMarkup = document.querySelector('#ingredients');

  function makeLiItems () {
    return ingredients.map(el => {
        const listEl = document.createElement('li');
        listEl.classList.add('item');
        listEl.textContent = `${el}`;
        return listEl;
    })
  };

const itemsList = makeLiItems(ingredients);
ulMarkup.append(...itemsList);
