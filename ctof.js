
function myFunction() {
  var x = document.getElementById("frm2");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value;
  }
  if (isNaN(text) == true) {
        document.getElementById("tempF").innerHTML = "Please enter a number."
  }
  else {
        document.getElementById("tempF").innerHTML = +((parseInt(text) * (9/5)) + 32).toFixed(2);
  }
}

