//elements containers
const aboutSection = document.querySelector("#aboutSection");
const servicesSection = document.querySelector("#servicesSection");

let elementTop = 0; 
let mainScrollY = 0;

//to prevent the link of non-selectable links in nav
menu.addEventListener("click",(e)=>{
    const aElement = e.target;
    if(aElement.className == "nonSelect"){
        e.preventDefault();
    }
})

