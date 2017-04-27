function autotab(current,to) {
  to.select();

  if(current.value.length == current.getAttribute("maxlength"))
    to.focus();
}
