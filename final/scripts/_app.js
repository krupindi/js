const HABBIT_KEY = 'HABBIT_KEY';

let habbits = [];

const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    h1: document.querySelector('.h1'),
    progressPercent: document.querySelector('.progess__percent'),
    progressCoverBar: document.querySelector('.progress__cover-bar'),
  },
};

function loadData() {
  const habbitString = localStorage.getItem(HABBIT_KEY);
  const habbitArray = JSON.parse(habbitString);
  habbits = habbitArray;
}

function renderMenu(activeHabbit) {
  page.menu.innerHTML = '';

  habbits.forEach((habbit) => {
    const button = document.createElement('button');
    button.dataset.habbitId = habbit.id;
    button.classList.add('menu__item');
    button.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}" />`;
    if (activeHabbit.id === habbit.id) {
      button.classList.add('menu__item_active');
    }

    button.addEventListener('click', () => render(habbit.id));

    page.menu.appendChild(button);
  });
}

function renderHead(activeHabbit) {
  page.header.h1.innerText = activeHabbit.name;
  const progress =
    activeHabbit.days.length / activeHabbit.target > 1
      ? 100
      : (activeHabbit.days.length / activeHabbit.target) * 100;
  page.header.progressPercent.innerText = progress.toFixed(0) + '%';
  page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`);
}

function render(activeHabbitsId) {
  const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitsId);
  renderMenu(activeHabbit);
  renderHead(activeHabbit);
}

function initApp() {
  loadData();
  render(habbits[0].id);
}

initApp();
