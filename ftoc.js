
function myFunction() {
  var x = document.getElementById("frm1");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value;
  }
  if (isNaN(text) == true) {
        document.getElementById("tempC").innerHTML = "Please enter a number."
  }
  else {
        document.getElementById("tempC").innerHTML = +((parseInt(text) - 32) * (5/9)).toFixed(2);
  }
}

