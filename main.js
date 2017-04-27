function text1() {
  document.getElementById("textbox").className = "";
  document.getElementById("textbox").innerHTML =
    "This is a test of My Amazing New Javascript skills! This is a test of My Amazing New Jazascript skills! This is a test of My Amazing New Jazascript skills! This is a test of My Amazing New Jazascript skills! This is a test of My Amazing New Jazascript skills! This is a test of My Amazing New Jazascript skills! This is a test of My Amazing New Jazascript skills! ";
  setTimeout(function() {
    document.getElementById("textbox").classList.add("animatee");
  }, 300);
};

function text2() {
  document.getElementById("textbox").className = "";
  document.getElementById("textbox").innerHTML = "Even more evidence of my amazing new javascript skills! Would you like to know the time and date? No problem:" + "<br><br>" + Date();
  setTimeout(function() {
    document.getElementById("textbox").classList.add("animatee");
  }, 300);
};
