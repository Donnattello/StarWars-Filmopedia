
const mobileHeader = document.querySelector('.mobileheader');
const burgerIcon = document.querySelector('.burger');

burgerIcon.addEventListener('click', function(){
    mobileHeader.classList.toggle('active');
    burgerIcon.classList.toggle('active');
})