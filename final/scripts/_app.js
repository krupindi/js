const HABBIT_KEY = 'HABBIT_KEY';

let habbits = [];
let globalActiveHabbitId;

const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    h1: document.querySelector('.h1'),
    progressPercent: document.querySelector('.progress__percent'),
    progressCoverBar: document.querySelector('.progress__cover-bar'),
  },
  content: {
    days: document.getElementById('days'),
    nextDay: document.querySelector('.habbit__day'),
  },
  popup: {
    index: document.getElementById('add_habbit_popup'),
    popupForm: document.querySelector('.popup__form'),
  },
};

function loadData() {
  const habbitString = localStorage.getItem(HABBIT_KEY);
  const habbitArray = JSON.parse(habbitString);
  habbits = habbitArray;
}

function saveData() {
  localStorage.getItem(HABBIT_KEY, JSON.stringify(habbits));
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

function renderMain(activeHabbit) {
  page.content.days.innerHTML = '';

  activeHabbit.days.forEach((day, index) => {
    const element = document.createElement('div');
    element.classList.add('habbit');
    element.innerHTML = `<div class="habbit__day">День ${index + 1}</div>
              <div class="habbit__comment">${day.comment}</div>
              <button class="habbit__delete" onclick="deleteDay(${index})">
                <img src="./images/delete.svg" alt="Удалить день ${
                  index + 1
                }" />
              </button>`;
    page.content.days.appendChild(element);
  });
  page.content.nextDay.innerText = `День ${activeHabbit.days.length + 1}`;
}

function render(activeHabbitsId) {
  globalActiveHabbitId = activeHabbitsId;
  const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitsId);
  renderMenu(activeHabbit);
  renderHead(activeHabbit);
  renderMain(activeHabbit);
}

function addDay(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const comment = data.get('comment');
  form['comment'].classList.remove('error');
  if (!comment) {
    form['comment'].classList.add('error');
    return;
  }
  habbits = habbits.map((habbit) => {
    return {
      ...habbit,
      days: habbit.days.concat({ comment }),
    };
  });
  form['comment'].value = '';
  render(globalActiveHabbitId);
  saveData();
}

function togglePopup() {
  page.popup.index.classList.toggle('cover_hidden');
  page.popup.popupForm.querySelector('input[name="name"]').value = '';
  page.popup.popupForm.querySelector('input[name="target"]').value = '';
}

function deleteDay(index) {
  habbits = habbits.map((habbit) => {
    habbit.days.splice(index, 1);
    return {
      ...habbit,
      days: habbit.days,
    };
  });
  render(globalActiveHabbitId);
  saveData();
}

function initApp() {
  loadData();
  render(habbits[0].id);
}

initApp();
