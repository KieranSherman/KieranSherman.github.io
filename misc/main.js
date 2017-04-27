function autotab(current,to) {
  to.select();

  if(current.getAttribute && current.value.length == current.getAttribute("maxlength"))
    to.focus();
}
