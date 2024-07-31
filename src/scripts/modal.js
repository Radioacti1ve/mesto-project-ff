export {appearPopup, disappearPopup, cardContainer, formProfile, formCard};

const cardContainer = document.querySelector('.places__list');

const formProfile = document.forms['edit-profile'];
const formCard = document.forms['new-place'];

let openedPopup;
let openedPopupButton;

function appearPopup(popup, popupButton) {
  openedPopup = popup;
  openedPopupButton = popupButton;
  popup.classList.add('popup_is-opened');

  popupButton.addEventListener('click', eventHandler);
  popup.addEventListener('click', eventHandlerOverlay);
  document.addEventListener('keydown', eventHandlerEsc);
}

function eventHandler() {
  disappearPopup(openedPopup, openedPopupButton);
}

function eventHandlerOverlay(evt) {
  if(evt.target === evt.currentTarget){
    disappearPopup(openedPopup, openedPopupButton);
  }
}

function eventHandlerEsc(evt) {
  if(evt.key === 'Escape') {
    disappearPopup(openedPopup, openedPopupButton);
  }
}

function disappearPopup(popup, popupButton) {
  popup.classList.remove('popup_is-opened');
  popupButton.removeEventListener('click', eventHandler);
  popup.removeEventListener('click', eventHandlerOverlay);
  document.removeEventListener('keydown', eventHandlerEsc);

  openedPopup = undefined;
  openedPopupButton = undefined;
}
