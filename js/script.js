// Navbar toggle
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// Login form toggle
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

loginBtn.onclick = () => {
  loginForm.classList.add('active');
};
formClose.onclick = () => {
  loginForm.classList.remove('active');
};

// Video slider
let videoBtns = document.querySelectorAll('.vid-btn');
let videoSlider = document.querySelector('#video-slider');

videoBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.vid-btn.active').classList.remove('active');
    btn.classList.add('active');
    videoSlider.src = btn.getAttribute('data-src');
  });
});

// Swiper sliders
var reviewSwiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

var brandSwiper = new Swiper(".brand-slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 }
  }
});
