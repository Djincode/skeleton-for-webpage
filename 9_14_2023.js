var closeIcon = document.querySelector(".closeicon");
var openIcon = document.querySelector(".openicon");
var sideBarElement = document.querySelector("#sidebar");
openIcon.addEventListener("click", function() {
   if(sideBarElement.classList.contains("open") == false) {
      sideBarElement.classList.add("open");
   }
});

closeIcon.addEventListener("click" , function() {
    if(sideBarElement.classList.contains("open") == true) {
        sideBarElement.classList.remove("open");
    }
});