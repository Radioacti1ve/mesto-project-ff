// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const container = document.querySelector('.content');
const cardContainer = container.querySelector('.places__list');
const cardTempate = document.querySelector('#card-template').content;

function addCard(item) {
  const cardElement = cardTempate.querySelector('.card').cloneNode(true);
  const buttonDelete = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__image').src = item.link;
  cardContainer.append(cardElement);

  buttonDelete.addEventListener('click', deleteCard);
}

function deleteCard(evt) {
  const eventTarget = evt.target;
  eventTarget.closest('.card').remove();
}

initialCards.forEach(item => {
  addCard(item);
});