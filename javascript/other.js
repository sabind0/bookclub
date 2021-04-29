function validateForm() {
    var x = document.forms["myForm"]["number"].value;
    if (x == "") {
      alert("Empty");
      return false;
    }
  }