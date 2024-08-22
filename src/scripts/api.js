export {
  getInitialCards,
  getUserInfo,
  setUserInfo,
  addCardToApi,
  delereCardFromApi,
  likeCardToApi,
  dislikeCardToApi,
  setNewAvatar,
  renderLoading
};

function getInitialCards() {
  return fetch('https://nomoreparties.co/v1/wff-cohort-20/cards', {
    method: 'GET',
    headers: {
      authorization: 'f77c1491-65dc-47b9-987d-f5e30fa375da'
    }
  })
  .then(res => {
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
  })
  .catch(err => console.error(err));
}

function getUserInfo() {
  return fetch('https://nomoreparties.co/v1/wff-cohort-20/users/me', {
    method: 'GET',
    headers: {
      authorization: 'f77c1491-65dc-47b9-987d-f5e30fa375da'
    }
  })
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      }
    })
    .then(res => {
      return res;
    })
    .catch(err => console.error(err));
}

function setUserInfo(name, about) {
  return fetch('https://nomoreparties.co/v1/wff-cohort-20/users/me', {
    method: 'PATCH',
    headers: {
      authorization: 'f77c1491-65dc-47b9-987d-f5e30fa375da',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: `${name}`,
      about: `${about}`,
    })
  })
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      }
    })
    .catch(err => console.error(err));
}

function addCardToApi(name, link) {
  return fetch('https://nomoreparties.co/v1/wff-cohort-20/cards', {
    method: 'POST',
    headers: {
      authorization: 'f77c1491-65dc-47b9-987d-f5e30fa375da',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`,
      length: 0
    })
  })
    .then(res => {
      if(res.ok) {
        return res.json();
      } 
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .catch(err => console.error(err));
}

function delereCardFromApi(CardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-20/cards/${CardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'f77c1491-65dc-47b9-987d-f5e30fa375da',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(res.ok) {
        return res.json();
      } 
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .catch(err => console.error(err));
}

function likeCardToApi(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-20/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: 'f77c1491-65dc-47b9-987d-f5e30fa375da',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(res.ok) {
        return res.json();
      } 
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .catch(err => console.error(err));
}

function dislikeCardToApi(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-20/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'f77c1491-65dc-47b9-987d-f5e30fa375da',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(res.ok) {
        return res.json();
      } 
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .catch(err => console.error(err));
}

function setNewAvatar(avatarLink) {
  return fetch('https://nomoreparties.co/v1/wff-cohort-20/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: 'f77c1491-65dc-47b9-987d-f5e30fa375da',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: `${avatarLink}`
    })
  })
    .then(res => {
      if(res.ok) {
        return res.json();
      } 
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .catch(err => console.error(err));
}

function renderLoading(flag) {
  const submitButton = document.querySelector('.popup_is-opened').querySelector('.popup__button'); 
  if(flag) {
    submitButton.textContent = 'Сохранение...';
  } else {
    submitButton.textContent = 'Сохранить';
  }
}

/*
  token: 
    f77c1491-65dc-47b9-987d-f5e30fa375da
  cohort:
    wff-cohort-20
*/