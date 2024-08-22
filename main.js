(()=>{"use strict";var e,t,n=document.querySelector("#card-template").content;function o(e,t,o,r,c){var a=n.querySelector(".card").cloneNode(!0),i=a.querySelector(".card__delete-button"),u=a.querySelector(".card__image"),s=a.querySelector(".card__like-button"),l=a.querySelector(".card__like-numbers");return a.querySelector(".card__title").textContent=e.name,u.src=e.link,u.alt=e.name,l.textContent=e.likes.length,e.owner._id===c&&(i.classList.remove("card__delete-button-hidden"),i.addEventListener("click",(function(){t(e._id,a)}))),e.likes.forEach((function(e){e._id===c&&s.classList.add("card__like-button_is-active")})),s.addEventListener("click",(function(){o(e._id,s,l)})),u.addEventListener("click",r),a}function r(n,o){e=n,t=o,n.classList.add("popup_is-opened"),o.addEventListener("click",c),n.addEventListener("click",a),document.addEventListener("keydown",i)}function c(){u(e,t)}function a(n){n.target===n.currentTarget&&u(e,t)}function i(n){"Escape"===n.key&&u(e,t)}function u(n,o){n.classList.remove("popup_is-opened"),o.removeEventListener("click",c),n.removeEventListener("click",a),document.removeEventListener("keydown",i),e=void 0,t=void 0}function s(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),r.textContent="",r.classList.remove(o)}function l(e,t){var n=t.inputSelector,o=t.submitButtonSelector,r=t.inactiveButtonClass,c=t.inputErrorClass,a=t.errorClass;e.reset();var i=Array.from(e.querySelectorAll(n));!function(e,t){e.disabled=!0,e.classList.add(t)}(e.querySelector(o),r),i.forEach((function(t){s(e,t,c,a)}))}function d(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n)):(t.disabled=!0,t.classList.add(n))}function f(e){document.querySelector(".popup_is-opened").querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}var p,m,h,_,v,y,S,b,E=document.querySelector(".places__list"),k=document.querySelectorAll(".popup"),q=document.querySelector(".profile__edit-button"),L=document.querySelector(".profile__add-button"),C=document.querySelector(".avatar__edit-button"),j=document.querySelector(".popup_type_edit"),g=document.querySelector(".popup_type_new-card"),w=document.querySelector(".popup_type_image"),T=document.querySelector(".popup_delete-card"),x=document.querySelector(".popup_new-avatar"),P=j.querySelector(".popup__close"),A=g.querySelector(".popup__close"),z=w.querySelector(".popup__close"),D=T.querySelector(".popup__close"),B=x.querySelector(".popup__close"),N=document.querySelector(".popup__image"),O=document.querySelector(".popup__caption"),J=document.forms["edit-profile"],M=document.forms["new-place"],G=document.forms["confirm-delete"],H=document.forms["new-avatar"],V=J.elements.name,U=J.elements.description,F=M.elements["place-name"],I=M.elements.link,K=H.elements.avatar,Q=document.querySelector(".profile__title"),R=document.querySelector(".profile__description"),W=document.querySelector(".profile__image"),X=J.elements.name,Y=J.elements.description,Z={},$={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function ee(e,t){Z={id:e,cardElement:t},r(T,D)}function te(e,t,n){t.classList.contains("card__like-button_is-active")?function(e){return fetch("https://nomoreparties.co/v1/wff-cohort-20/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:"f77c1491-65dc-47b9-987d-f5e30fa375da","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){return console.error(e)}))}(e).then((function(e){n.textContent=e.likes.length,t.classList.remove("card__like-button_is-active")})).catch((function(e){return console.error(e)})):function(e){return fetch("https://nomoreparties.co/v1/wff-cohort-20/cards/likes/".concat(e),{method:"PUT",headers:{authorization:"f77c1491-65dc-47b9-987d-f5e30fa375da","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){return console.error(e)}))}(e).then((function(e){n.textContent=e.likes.length,t.classList.add("card__like-button_is-active")})).catch((function(e){return console.error(e)}))}function ne(e){N.src=e.srcElement.currentSrc,N.alt=e.srcElement.alt,O.textContent=e.srcElement.alt,r(w,z)}!function(e,t,n){fetch("https://nomoreparties.co/v1/wff-cohort-20/users/me",{method:"GET",headers:{authorization:"f77c1491-65dc-47b9-987d-f5e30fa375da"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).then((function(e){return e})).catch((function(e){return console.error(e)})).then((function(o){p=o._id,e.textContent=o.name,t.textContent=o.about,n.setAttribute("style","background-image: url(".concat(o.avatar,");"))}))}(Q,R,W),h=(m=$).formSelector,_=m.inputSelector,v=m.submitButtonSelector,y=m.inactiveButtonClass,S=m.inputErrorClass,b=m.errorClass,Array.from(document.querySelectorAll(h)).forEach((function(e){e.addEventListener("submit",(function(e){return e.preventDefault()})),function(e,t,n,o,r,c){var a=Array.from(e.querySelectorAll(t)),i=e.querySelector(n);d(a,i,o),a.forEach((function(t){t.addEventListener("input",(function(){d(a,i,o),function(e,t,n,o){t.validity.valid?s(e,t,n,o):(t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),function(e,t,n,o,r){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o),c.textContent=n,c.classList.add(r)}(e,t,t.validationMessage,n,o))}(e,t,r,c)}))}))}(e,_,v,y,S,b)})),fetch("https://nomoreparties.co/v1/wff-cohort-20/cards",{method:"GET",headers:{authorization:"f77c1491-65dc-47b9-987d-f5e30fa375da"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){return console.error(e)})).then((function(e){e.forEach((function(e){E.append(o(e,ee,te,ne,p))}))})).catch((function(e){return console.error(e)})),k.forEach((function(e){e.classList.add("popup_is-animated")})),q.addEventListener("click",(function(){r(j,P),l(J,$),X.value=Q.textContent,Y.value=R.textContent})),L.addEventListener("click",(function(){r(g,A),l(M,$)})),C.addEventListener("click",(function(e){r(x,B),l(H,$)})),J.addEventListener("submit",(function(e){var t,n;e.preventDefault(),f(!0),(t=V.value,n=U.value,fetch("https://nomoreparties.co/v1/wff-cohort-20/users/me",{method:"PATCH",headers:{authorization:"f77c1491-65dc-47b9-987d-f5e30fa375da","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(t),about:"".concat(n)})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){return console.error(e)}))).then((function(){Q.textContent=V.value,R.textContent=U.value})).then((function(){f(!1),u(j,P)})).catch((function(e){return console.error(e)}))})),M.addEventListener("submit",(function(e){var t,n;e.preventDefault(),f(!0),(t=F.value,n=I.value,fetch("https://nomoreparties.co/v1/wff-cohort-20/cards",{method:"POST",headers:{authorization:"f77c1491-65dc-47b9-987d-f5e30fa375da","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(t),link:"".concat(n),length:0})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){return console.error(e)}))).then((function(e){E.prepend(o(e,ee,te,ne,p))})).then((function(){f(!1),u(g,A)})).catch((function(e){return console.error(e)}))})),G.addEventListener("submit",(function(e){var t;e.preventDefault(),(t=Z.id,fetch("https://nomoreparties.co/v1/wff-cohort-20/cards/".concat(t),{method:"DELETE",headers:{authorization:"f77c1491-65dc-47b9-987d-f5e30fa375da","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){return console.error(e)}))).then((function(){Z.cardElement.remove(),u(T,D),Z={}})).catch((function(e){return console.error(e)}))})),H.addEventListener("submit",(function(e){var t;e.preventDefault(),f(!0),(t=K.value,fetch("https://nomoreparties.co/v1/wff-cohort-20/users/me/avatar",{method:"PATCH",headers:{authorization:"f77c1491-65dc-47b9-987d-f5e30fa375da","Content-Type":"application/json"},body:JSON.stringify({avatar:"".concat(t)})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){return console.error(e)}))).then((function(e){W.setAttribute("style","background-image: url(".concat(e.avatar,");"))})).then((function(){f(!1),u(x,B)})).catch((function(e){return console.error(e)}))}))})();