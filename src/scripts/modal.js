export {appearPopup, disappearPopup};

let openedPopup;
let openedPopupButton;

function appearPopup(popup, popupButton) {
  openedPopup = popup;
  openedPopupButton = popupButton;
  popup.classList.add('popup_is-opened');

  popupButton.addEventListener('click', eventHandlerPopupButton);
  popup.addEventListener('click', eventHandlerOverlay);
  document.addEventListener('keydown', eventHandlerEsc);
}

function eventHandlerPopupButton() {
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
  popupButton.removeEventListener('click', eventHandlerPopupButton);
  popup.removeEventListener('click', eventHandlerOverlay);
  document.removeEventListener('keydown', eventHandlerEsc);

  openedPopup = undefined;
  openedPopupButton = undefined;
}
