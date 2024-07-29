export {appearPopup, setSrcCard, handleFormCardSubmit, handleFormProfileSubmit, setInfoFromProfile, formProfile, formCard, popupTypeEdit, popupTypeNewCard};
import {createCard} from "./card.js";

const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');

const cardContainer = document.querySelector('.places__list');
const formProfile = document.forms['edit-profile'];
const formCard = document.forms['new-place'];

const nameInput = formProfile.elements.name;
const jobInput = formProfile.elements.description;
const placeName = formCard.elements['place-name'];
const formLink = formCard.elements.link;

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function appearPopup(popup) {
  const popupCloseButton = popup.querySelector('.popup__close');
  popup.classList.add('popup_is-opened');

  popupCloseButton.addEventListener('click', eventHandler);
  popup.addEventListener('click', eventHandler);
  document.addEventListener('keydown', eventHandler);

  function eventHandler(evt) {
    if(evt.target === evt.currentTarget || evt.key === 'Escape') {
      disappearPopup(popup);
      popupCloseButton.removeEventListener('click', eventHandler);
      popup.removeEventListener('click', eventHandler);
      document.removeEventListener('keydown', eventHandler);
    }
  }
}

function disappearPopup(card) {
  card.classList.remove('popup_is-opened');
}

function setSrcCard(evt) {
  const popupTypeImage = document.querySelector('.popup_type_image');
  if(evt.target.classList.contains('card__image')) {
    const image = document.querySelector('.popup__image');
    image.src = evt.srcElement.currentSrc;
    appearPopup(popupTypeImage);
  }
}

function handleFormProfileSubmit(evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  disappearPopup(popupTypeEdit);
}

function handleFormCardSubmit(evt) {
  evt.preventDefault(); 
  const obj = {};
  obj.name = placeName.value;
  obj.link = formLink.value;
  cardContainer.append(createCard(obj));
  disappearPopup(popupTypeNewCard);
}

function setInfoFromProfile() {
  const name = formProfile.elements.name;
  const description = formProfile.elements.description;
  name.value = profileTitle.textContent;
  description.value = profileDescription.textContent;
}
