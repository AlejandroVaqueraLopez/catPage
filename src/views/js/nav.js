//menu toggle variables
var toggle = false;
var menu = document.getElementById('menu');
var btnToggleNav= document.getElementById('btnToggleNav');

//Triangles variables
const PI = Math.PI;
var mainAngle = 0;

//global design variables
let mainWidth = window.innerWidth;
let pcDesign = true;

//nav buttons
const navHome = document.querySelector("#navHome");
const navAbout = document.querySelector("#navAbout");
const navServices = document.querySelector("#navServices");
const navProducts = document.querySelector("#navProducts");
const navContact = document.querySelector("#navContact");

function openMenu(e){
    if(e.type=='click'){
        if(toggle==false){
            menu.style.marginRight = '0px';
            btnToggleNav.children[0].src = "./icons/menu-icon.png";
        }
        else if(toggle==true){
            menu.style.marginRight = '-500px';
            btnToggleNav.children[0].src = "./icons/menu-icon-white.png";
        }
        toggle = !toggle;
    }
}
btnToggleNav.onclick = openMenu;

function calcAngle(CO,CA){
    return Math.atan((CO/CA)) * (180/PI);
}

function calcMainTriangle(CO,CA){
    mainAngle = calcAngle(CO,CA);
    return mainAngle;
}
calcMainTriangle(500,window.innerHeight);

//////////////////////////////////////////////////
function calcMiniCO(angle,CA){
    const CO = Math.tan(angle * PI / 180) * CA;
    return CO;
}

//Inicialization of styles
if(mainWidth >= 500){
    pcDesign = true;
}else{
    pcDesign = false;
}
designAssign(pcDesign);

//Inicialization of styles
function designAssign(pcDesign){
    if(pcDesign){//min width 501px
        let marginRightHome = calcMiniCO(mainAngle,window.innerHeight * 0.8);
        navHome.style.marginRight = `${marginRightHome - 130}px`;

        let marginRightAbout = calcMiniCO(mainAngle,window.innerHeight * 0.7);
        navAbout.style.marginRight = `${marginRightAbout - 130}px`;

        let marginRightServices = calcMiniCO(mainAngle,window.innerHeight * 0.6);
        navServices.style.marginRight = `${marginRightServices - 130}px`;

        let marginRightGalery = calcMiniCO(mainAngle,window.innerHeight * 0.5);
        navProducts.style.marginRight = `${marginRightGalery - 130}px`;

        let marginRightClients = calcMiniCO(mainAngle,window.innerHeight * 0.4);
        navClients.style.marginRight = `${marginRightClients - 130}px`;

    }else{//max with 500px
        navHome.style.marginRight = `calc(70vw - 100px)`;
        navAbout.style.marginRight = `calc(60vw - 100px)`;
        navServices.style.marginRight = `calc(50vw - 100px)`;
        navProducts.style.marginRight = `calc(40vw - 100px)`;
        navClients.style.marginRight = `calc(30vw - 100px)`;
    }
}

//Event listeners
window.addEventListener("resize",()=>{
    mainWidth = window.innerWidth;
    if(mainWidth >= 500){
        pcDesign = true;
    }else{
        pcDesign = false;
    }

    designAssign(pcDesign);
})
