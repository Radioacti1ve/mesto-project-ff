import '../pages/index.css'; 
import {initialCards} from './cards.js'
import {createCard, deleteCard, likeCard} from './card.js';
import {appearPopup, disappearPopup, cardContainer, formProfile, formCard} from './modal.js';

//search buttons and popups
const popup = document.querySelectorAll('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeNewCardButton = document.querySelector('.profile__add-button');

const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');

const popupTypeEditButton = popupTypeEdit.querySelector('.popup__close');
const popupTypeCardButton = popupTypeNewCard.querySelector('.popup__close');
const popupTypeImageButton = popupTypeImage.querySelector('.popup__close');

const image = document.querySelector('.popup__image');
const caption = document.querySelector('.popup__caption');

//data for forms
const nameInput = formProfile.elements.name;
const jobInput = formProfile.elements.description;
const placeName = formCard.elements['place-name'];
const formLink = formCard.elements.link;

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const name = formProfile.elements.name;
const description = formProfile.elements.description;

//create and add cards
initialCards.forEach(item => {
  cardContainer.append(createCard(item, deleteCard, likeCard, setSrcCard));
});

//add animation to popups
popup.forEach((item) => {
  item.classList.add('popup_is-animated');
})

function handleFormProfileSubmit(evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  disappearPopup(popupTypeEdit, popupTypeEditButton);
}

function handleFormCardSubmit(evt) {
  evt.preventDefault(); 
  const obj = {};
  obj.name = placeName.value;
  obj.link = formLink.value;
  cardContainer.append(createCard(obj, deleteCard, likeCard, setSrcCard));
  disappearPopup(popupTypeNewCard, popupTypeCardButton);
  formCard.reset();
}

function setInfoFromProfile() {
  name.value = profileTitle.textContent;
  description.value = profileDescription.textContent;
}

function setSrcCard(evt) {
  image.src = evt.srcElement.currentSrc;
  image.alt = evt.srcElement.alt;
  caption.textContent = evt.srcElement.alt;
  appearPopup(popupTypeImage, popupTypeImageButton);
}

//sending forms
formProfile.addEventListener('submit', handleFormProfileSubmit); 
formCard.addEventListener('submit', handleFormCardSubmit);

//add listeners
profileEditButton.addEventListener('click', () => {
  appearPopup(popupTypeEdit, popupTypeEditButton)
  setInfoFromProfile();
});

popupTypeNewCardButton.addEventListener('click', () => appearPopup(popupTypeNewCard, popupTypeCardButton));

