export {createCard, deleteCard, likeCard};

const cardTemplate = document.querySelector('#card-template').content;

function createCard(item, deleteCard, likeCard, setSrcCard) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const buttonDelete = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardLike = cardElement.querySelector('.card__like-button');

  cardElement.querySelector('.card__title').textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  buttonDelete.addEventListener('click', deleteCard);
  cardLike.addEventListener('click', likeCard);
  cardImage.addEventListener('click', setSrcCard);
  return cardElement;
}

function deleteCard(evt) {
  const eventTarget = evt.target;
  eventTarget.closest('.card').remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}