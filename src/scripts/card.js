export function createCard(item) {
  const cardTempate = document.querySelector('#card-template').content;
  const cardElement = cardTempate.querySelector('.card').cloneNode(true);
  const buttonDelete = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardLike = cardElement.querySelector('.card__like-button');

  cardElement.querySelector('.card__title').textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  buttonDelete.addEventListener('click', deleteCard);
  cardLike.addEventListener('click', likeCard);
  return cardElement;
}

function deleteCard(evt) {
  const eventTarget = evt.target;
  eventTarget.closest('.card').remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}