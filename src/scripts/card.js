export {
  createCard
};

const cardTemplate = document.querySelector('#card-template').content;

function createCard(item, deleteCard, likeCard, setSrcCard, userId) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const buttonDelete = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardLike = cardElement.querySelector('.card__like-button');
  const likesNumber = cardElement.querySelector('.card__like-numbers');
  
  cardElement.querySelector('.card__title').textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;
  likesNumber.textContent = item.likes.length;

  if(item.owner._id === userId) {
    buttonDelete.classList.remove('card__delete-button-hidden');
    buttonDelete.addEventListener('click', () => {
      deleteCard(item._id, cardElement);
    });
  }

  item.likes.forEach(elem => {
    if(elem._id === userId) {
      cardLike.classList.add('card__like-button_is-active');
    }
  })

  cardLike.addEventListener('click', () => {
    likeCard(item._id, cardLike, likesNumber);
  });
  cardImage.addEventListener('click', setSrcCard);
  return cardElement;
}