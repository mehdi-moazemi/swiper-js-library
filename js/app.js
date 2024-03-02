let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
  },
//   effect: 'flip',
//   cssMode: true,
  speed: 1000,
  spaceBetween: 40,
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
});
