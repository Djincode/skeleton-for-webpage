var closeIcon = document.querySelector("#close");
var openIcon = document.querySelector("#open");
var sideBarElement = document.querySelector("#sidemenu");

openIcon.addEventListener("click", function(){
    if(sideBarElement.classList.contains("open") == false) {
        sideBarElement.classList.add("open");
     }
  });


  closeIcon.addEventListener("click" , function() {
    if(sideBarElement.classList.contains("open") == true) {
        sideBarElement.classList.remove("open");
    }
});
    
