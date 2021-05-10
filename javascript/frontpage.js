//main page login code


const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    '900': {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    '700': {
      slidesPerView: 3,
      spaceBetween: 50,
    },
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
    console.log("working");
    return false;
  }
};

$(window).scroll(function(){
 if (this.scrollY > 100) {
    $('nav').addClass("afterscroll");
  } else {
    $('nav').removeClass("afterscroll");
  };

});
   


// login page js codes
function validateloginForm() {
  var y = document.forms["myloginform"]["loginnumber"].value;
  if (y=="") {
    alert("Empty");
    console.log("working");
    return false;
  }
};