"use strict"

const closeBtn = document.querySelector(".popup-close");
const popup = document.querySelector(".popup");
const btnrdv = document.querySelector(".btnrdv");
const rendezvous = document.querySelector(".rendezvous")
const contact = document.querySelector(".contact")


const popupClose = function(e){
    e.preventDefault()
    popup.classList.toggle("hide")
}


closeBtn.addEventListener("click", popupClose);
btnrdv.addEventListener("click", popupClose)
rendezvous.addEventListener("click", popupClose)
contact.addEventListener("click", popupClose)
