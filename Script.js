const navLinks=document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",() =>{
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click",() => menuOpenButton.click());

navLinks.forEach(link =>{
    link.addEventListener("click",() => menuOpenButton.click());
});
// Modal Functionality
const orderNowBtn = document.getElementById('orderNowBtn');
const orderFormModal = document.getElementById('orderFormModal');
const closeOrderForm = document.getElementById('closeOrderForm');
const orderForm = document.getElementById('orderForm');
const formContent = document.getElementById('formContent');
const thankYouMessage = document.getElementById('thankYouMessage');

// Open form modal
orderNowBtn.addEventListener('click', (e) => {
  e.preventDefault();
  orderFormModal.classList.remove('hidden');
  formContent.classList.remove('hidden');
  thankYouMessage.classList.add('hidden');
  orderForm.reset();
  document.body.classList.add('modal-open'); // Lock scroll
});

// Close modal button
closeOrderForm.addEventListener('click', () => {
  orderFormModal.classList.add('hidden');
  document.body.classList.remove('modal-open'); // Unlock scroll
});

// On form submission
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Show thank-you message
  formContent.classList.add('hidden');
  thankYouMessage.classList.remove('hidden');

  // Auto-close after 3 seconds
  setTimeout(() => {
    orderFormModal.classList.add('hidden');
    formContent.classList.remove('hidden');
    thankYouMessage.classList.add('hidden');
    orderForm.reset();
    document.body.classList.remove('modal-open'); // Unlock scroll
  }, 3000);
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
0 :{
    slidesPerView:1
},
768:{
    slidesPerView:2
},
1024:{
    slidesPerView:3
},
}

});