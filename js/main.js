function addClass() {
    var addActive = document.getElementById("sidebar");
    var addOverlay = document.getElementById("overlay");
    addActive.classList.add("active");
    addOverlay.classList.add("show");
 }
 function removeClass() {
   var element = document.getElementById("sidebar");
   element.classList.remove("active");
   var removeOverlay = document.getElementById("overlay");
   removeOverlay.classList.remove("show");
 }