import '../pages/index.css';

import {
  createCard
}
from './card.js';

import {
  appearPopup,
  disappearPopup
}
from './modal.js';

import {
  clearValidation,
  enableValidation
}
from './validation.js';

import {
  getInitialCards,
  getUserInfo,
  setUserInfo,
  addCardToApi,
  delereCardFromApi,
  likeCardToApi,
  dislikeCardToApi,
  setNewAvatar,
  renderLoading
}
from './api.js';

//search buttons and popups
const cardContainer = document.querySelector('.places__list');

const popup = document.querySelectorAll('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeNewCardButton = document.querySelector('.profile__add-button');
const popupAvatarEditButton = document.querySelector('.avatar__edit-button');

const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupDeleteCard = document.querySelector('.popup_delete-card');
const popupAvatar = document.querySelector('.popup_new-avatar');

const popupTypeEditButton = popupTypeEdit.querySelector('.popup__close');
const popupTypeCardButton = popupTypeNewCard.querySelector('.popup__close');
const popupTypeImageButton = popupTypeImage.querySelector('.popup__close');
const popupDeleteCardButton = popupDeleteCard.querySelector('.popup__close');
const popupAvatarButton = popupAvatar.querySelector('.popup__close');

const image = document.querySelector('.popup__image');
const caption = document.querySelector('.popup__caption');

//data for forms
const formProfile = document.forms['edit-profile'];
const formCard = document.forms['new-place'];
const formDeleteCard = document.forms['confirm-delete'];
const formEditAvatar = document.forms['new-avatar'];

const nameInput = formProfile.elements.name;
const jobInput = formProfile.elements.description;
const placeName = formCard.elements['place-name'];
const formLink = formCard.elements.link;
const avatar = formEditAvatar.elements.avatar;

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__image')

const name = formProfile.elements.name;
const description = formProfile.elements.description;
let userId;
let cardForDelete = {};
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

setNameAndJob(profileTitle, profileDescription, profileAvatar);
enableValidation(validationConfig);

//create and add cards
getInitialCards().
  then(res => {
      res.forEach(item => {
      cardContainer.append(createCard(item, handleDeleteCard, handleLikeCard, openImage, userId));
    })
  })
  .catch(err => console.error(err));

//add animation to popups
popup.forEach((item) => {
  item.classList.add('popup_is-animated');
})

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  renderLoading(true);
  setUserInfo(nameInput.value, jobInput.value)
    .then(() => {
      profileTitle.textContent = nameInput.value;
      profileDescription.textContent = jobInput.value;
    })
    .then(() => {
      renderLoading(false);
      disappearPopup(popupTypeEdit, popupTypeEditButton);
    })
    .catch(err => console.error(err));
}

function handleFormCardSubmit(evt) {
  evt.preventDefault(); 
  renderLoading(true);
  addCardToApi(placeName.value, formLink.value)
    .then(res => {
      cardContainer.prepend(createCard(res, handleDeleteCard, handleLikeCard, openImage, userId));
    })
    .then(() => {
      renderLoading(false);
      disappearPopup(popupTypeNewCard, popupTypeCardButton);
    })
    .catch(err => console.error(err));
}

function handleDeleteCardSubmit(evt) {
  evt.preventDefault();
  delereCardFromApi(cardForDelete.id)
    .then(() => {
      cardForDelete.cardElement.remove();
      disappearPopup(popupDeleteCard, popupDeleteCardButton);
      cardForDelete = {};
    })
    .catch(err => console.error(err));
}

function handleEditAvatar(evt) {
  evt.preventDefault();
  renderLoading(true);
  setNewAvatar(avatar.value)
    .then(res => {
      profileAvatar.setAttribute('style', `background-image: url(${res.avatar});`);
    })
    .then(() => {
      renderLoading(false);
      disappearPopup(popupAvatar, popupAvatarButton);
    })
    .catch(err => console.error(err));
}

function handleDeleteCard(cardId, cardElement) {
  cardForDelete = {
    id: cardId,
    cardElement
  }
  appearPopup(popupDeleteCard, popupDeleteCardButton);
};

function handleLikeCard(cardId, cardLike, likesNumber) {
  if(cardLike.classList.contains('card__like-button_is-active')) {
    dislikeCardToApi(cardId)
      .then(res => {
        likesNumber.textContent = res.likes.length;
        cardLike.classList.remove('card__like-button_is-active');
      })
      .catch(err => console.error(err));
  } else {
    likeCardToApi(cardId)
      .then(res => {
        likesNumber.textContent = res.likes.length;
        cardLike.classList.add('card__like-button_is-active');
      })
      .catch(err => console.error(err));
  }
}

//for form
function setInfoFromProfile() {
  name.value = profileTitle.textContent;
  description.value = profileDescription.textContent;
}

//for load page
function setNameAndJob(profileTitle, profileDescription, avatar) {
  getUserInfo().then(res => {
    userId = res._id;
    profileTitle.textContent = res.name;
    profileDescription.textContent = res.about;
    avatar.setAttribute('style', `background-image: url(${res.avatar});`);
  });
}

function openImage(evt) {
  image.src = evt.srcElement.currentSrc;
  image.alt = evt.srcElement.alt;
  caption.textContent = evt.srcElement.alt;
  appearPopup(popupTypeImage, popupTypeImageButton);
}

//add listeners
profileEditButton.addEventListener('click', () => {
  appearPopup(popupTypeEdit, popupTypeEditButton);
  clearValidation(formProfile, validationConfig);
  setInfoFromProfile();
});

popupTypeNewCardButton.addEventListener('click', () => {
  appearPopup(popupTypeNewCard, popupTypeCardButton);
  clearValidation(formCard, validationConfig);
});

popupAvatarEditButton.addEventListener('click', (evt) => {
  appearPopup(popupAvatar, popupAvatarButton);
  clearValidation(formEditAvatar, validationConfig);
})

//sending forms
formProfile.addEventListener('submit', handleFormProfileSubmit); 
formCard.addEventListener('submit', handleFormCardSubmit);
formDeleteCard.addEventListener('submit', handleDeleteCardSubmit);
formEditAvatar.addEventListener('submit', handleEditAvatar);