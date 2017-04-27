function autoTab(current,to) {
  to.select();

  if(current.value.length == current.getAttribute("maxlength"))
    to.focus();
}

function doOnClick(current) {
  current.select();
}

function showAccess() {
  document.getElementById("access").style.visibility = "visible";
}

function checkValid(form) {
  var word = "LLAMA".split('');
  var valid = true;

  for(var i = 0; i < word.length; i++) {
    var c = word[i];
    var name = "input"+i;
    var val = form.elements[i].value;

    if(val.toUpperCase() != c.toUpperCase()) {
      valid = false;
      break;
    }
  }

  if(valid)
    window.location.assign("dev/index.html");
}
