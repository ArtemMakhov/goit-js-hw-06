const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const items = ingredients.map(item => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = item;
  return itemEl;
});

ingredientsListEl.append(...items);



