function autoTab(current,to) {
  to.select();

  if(current.value.length == current.getAttribute("maxlength"))
    to.focus();
}

function doOnClick(current) {
  current.select();
}

var AUTH = (function() {
  var id_1 = 0;
  var id_2 = 0;

  function check() {
    if(id_1 == 2 && id_2 == 1)
      showAccess();
  }

  function showAccess() {
    document.getElementById("access").style.visibility = "visible";
  }

  return {
    increment_id_1: function() {
      id_1 += 1;
      check();
    },
    increment_id_2: function() {
      id_2 += 1;
      check();
    }
  }
})();

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
