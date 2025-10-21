new WOW().init();
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
   pagination: {
    el: '.project-pagination',
    bulletClass:'project-bullet',
    bulletActiveClass:'project-bullet-activ',
    clickable:true
  },
});