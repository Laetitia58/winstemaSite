// burgerbutton responsive
let burgerButton = document.getElementById("burgerButton");

let menuResponsive = document.getElementById("menuResponsive");

burgerButton.onclick = togg;

function togg(){
  if(getComputedStyle(menuResponsive).display != "none"){
    menuResponsive.style.display = "none";
  } else {
    menuResponsive.style.display = "block";
  }
}









