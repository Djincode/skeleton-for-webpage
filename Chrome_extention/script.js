let mylinks = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEL = document.getElementById("ul-l");
let links = JSON.parse(localStorage.getItem("mylinks"));
const delbtn = document.querySelector(".btn")
delbtn.addEventListener("click", function bla(){
  mylinks.length = 0;
  listItems = ""
  localStorage.clear();
  renderlist();
})

if(links){
  mylinks = links;
  renderlist();
}



 inputBtn.addEventListener("click", function blabla(){
   mylinks.push(inputEl.value);
   renderlist()
  inputEl.value = "";

  localStorage.setItem("mylinks", JSON.stringify(mylinks))
 })

 function renderlist(){
  let listItems = "";


  for(let i=0; i<mylinks.length; i++){
    listItems += `<li><a target='_blank' href='${mylinks[i]}'>${mylinks[i]}</a></li>`;
 
  }
  ulEL.innerHTML= listItems;

 }
