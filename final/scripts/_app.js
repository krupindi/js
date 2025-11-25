const HABBIT_KEY = 'HABBIT_KEY';

let habbits = [];

const page = {
  menu: document.querySelector('.menu__list'),
};

function loadData() {
  const habbitString = localStorage.getItem(HABBIT_KEY);
  const habbitArray = JSON.parse(habbitString);
  habbits = habbitArray;
}

function renderMenu(habbitsActive) {
  page.menu.innerHTML = '';

  habbits.forEach((habbit) => {
    const button = document.createElement('button');
    button.dataset.habbitId = habbit.id;
    button.classList.add('menu__item');
    button.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}" />`;
    if (habbit.id === habbitsActive) {
      button.classList.add('menu__item_active');
    }

    button.addEventListener('click', () => renderMenu(habbit.id));

    page.menu.appendChild(button);
  });
}

function initApp() {
  loadData();
  renderMenu(habbits[0].id);
}

initApp();
