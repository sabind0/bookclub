
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {  
      '900': {
        slidesPerView: 4,
        spaceBetween: 20,},
      '700': {
        slidesPerView: 3,
        spaceBetween: 50, },
    },
    pagination: {
    el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  
  });
  function validateForm() {
    var x = document.forms["myForm"]["number"].value;
    if (x == "") {
      alert("Empty");
      return false;
    }
  }