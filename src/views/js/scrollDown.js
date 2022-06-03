//elements containers
const aboutSection = document.querySelector("#aboutSection");
const servicesSection = document.querySelector("#servicesSection");

let elementTop = 0; 
navHome.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(elementTop);
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
navAbout.addEventListener("click",(e)=>{
    e.preventDefault();
    elementTop = aboutSection.getBoundingClientRect().top;
    console.log(elementTop);
    if(elementTop == window.scrollY){
        //nothing
    }else if(elementTop < 0){
        elementTop = window.scrollY + elementTop;
    }
    window.scrollTo({
        top:`${elementTop}`,
        behavior:"smooth"
    });
});
navServices.addEventListener("click",(e)=>{
    e.preventDefault();
    elementTop = servicesSection.getBoundingClientRect().top;
    console.log(elementTop)
    if(elementTop == window.scrollY){
        //nothing
    }else if(elementTop < 0){
        elementTop = window.scrollY + elementTop;
    }
    window.scrollTo({
        top:`${elementTop}`,
        behavior:"smooth"
    });
});
