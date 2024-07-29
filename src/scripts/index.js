import '../pages/index.css'; 
import {initialCards} from './cards.js'
import {createCard} from './card.js';
import {appearPopup, setSrcCard, handleFormCardSubmit, handleFormProfileSubmit, setInfoFromProfile, cardContainer, formProfile, formCard, popupTypeEdit, popupTypeNewCard} from './modal.js';

//search buttons and popups
const popup = document.querySelectorAll('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeNewCardButton = document.querySelector('.profile__add-button');
const popupImages = document.querySelector('.places__list');

//create and add cards
initialCards.forEach(item => {
  cardContainer.append(createCard(item));
});

//add animation to popups
popup.forEach((item) => {
  item.classList.add('popup_is-animated');
})

//sending forms
formProfile.addEventListener('submit', handleFormProfileSubmit); 
formCard.addEventListener('submit', handleFormCardSubmit);

//add listeners
profileEditButton.addEventListener('click', () => {
  appearPopup(popupTypeEdit)
  setInfoFromProfile();
});

popupTypeNewCardButton.addEventListener('click', () => appearPopup(popupTypeNewCard));

popupImages.addEventListener('click', setSrcCard);