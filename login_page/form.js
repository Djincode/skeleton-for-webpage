const container = document.getElementById('container');
const regbutton = document.getElementById('register');
const logbutton = document.getElementById('login');
regbutton.addEventListener("click", function(){
    container.classList.add("active");
})
    
logbutton.addEventListener("click", function(){
    container.classList.remove("active");
})