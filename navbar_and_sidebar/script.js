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
    
var rightIcon = document.querySelector(".right-icon");
var leftIcon = document.querySelector(".left-icon");


rightIcon.addEventListener("click", function () {

    var activeElement = document.querySelector("#slider-wrapper img.active");
    var thumbnailActiveElement = document.querySelector("#thumbnail-wrapper img.active")


    var nextElement = activeElement.nextElementSibling;
    var nextThumbElement = thumbnailActiveElement.nextElementSibling;

    if (nextElement != null && nextThumbElement != null) {
        activeElement.classList.remove("active");
        nextElement.classList.add("active");

        thumbnailActiveElement.classList.remove("active");
        nextThumbElement.classList.add("active");
    }
    
    else {
        activeElement.classList.remove("active");
        nextElement = document.querySelector("#slider-wrapper img:first-child");
        nextElement.classList.add("active");

        thumbnailActiveElement.classList.remove("active");
        nextThumbElement = document.querySelector("#thumbnail-wrapper img:first-child");
        nextThumbElement.classList.add("active");
    }

});


leftIcon.addEventListener("click", function () {

    var activeElement = document.querySelector("#slider-wrapper img.active");
    var thumbnailActiveElement = document.querySelector("#thumbnail-wrapper img.active");


    var previousElement = activeElement.previousElementSibling;
    var previousThumbElement = thumbnailActiveElement.previousElementSibling;
    if (previousElement != null && previousThumbElement != null) {
        activeElement.classList.remove("active");
        previousElement.classList.add("active");

        thumbnailActiveElement.classList.remove("active");
        previousThumbElement.classList.add("active")

    }
    else {
        activeElement.classList.remove("active");
        previousElement = document.querySelector("#slider-wrapper img:last-child");
        previousElement.classList.add("active");

        thumbnailActiveElement.classList.remove("active");
        previousThumbElement = document.querySelector("#thumbnail-wrapper img:last-child");
        previousThumbElement.classList.add("active");

    }

});


var thumbnails = document.querySelectorAll("#thumbnail-wrapper img");

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
        document.querySelector("#thumbnail-wrapper img.active")
            .classList
            .remove("active");

        this.classList.add("active");

        var dataNumber = this.getAttribute("data-number");


        document
            .querySelector("#slider-wrapper img.active")
            .classList
            .remove("active");


        document
            .querySelector(`#slider-wrapper img[data-id="${dataNumber}"]`)
            .classList
            .add("active");
    })
}

