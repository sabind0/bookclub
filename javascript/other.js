function validateForm() {
    var x = document.forms["myForm"]["number"].value;
    if (x == "") {
      alert("Empty");
      return false;
    }
  }
  $(window).scroll(function() {

    if (this.scrollY > 100) {
      $('nav').addClass("afterscroll");
    } else {
      $('nav').removeClass("afterscroll");
    };
  
  });