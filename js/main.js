const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const korzina=document.querySelector(".button-card-text");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click",toggleModal);
korzina.addEventListener("click",toggleModal);

function toggleModal(){
    modal.classList.toggle("is-open");
} 
 
new WOW().init();