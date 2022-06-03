var toggle = false;
var menu = document.getElementById('menu');
var btnToggleNav= document.getElementById('btnToggleNav');

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

const PI = Math.PI;
var mainAngle = 0;

function calcAngle(CO,CA){
    return Math.atan((CO/CA)) * (180/PI);
}

function calcMainTriangle(CO,CA){
    mainAngle = calcAngle(CO,CA);
    //const miniCO = calcMiniTriangle(CA,angle);
    //return miniCO;//the CO of the mini triangle;
    return mainAngle;
}
calcMainTriangle(500,window.innerHeight);
console.log("main angle: ",mainAngle);

//////////////////////////////////////////////////
function calcMiniCO(angle,CA){
    const CO = Math.tan(angle * PI / 180) * CA;
    return CO;
}

let marginRightHome = calcMiniCO(mainAngle,window.innerHeight * 0.8);
console.log(marginRightHome);
const navHome = document.querySelector("#navHome");
navHome.style.marginRight = `${marginRightHome - 130}px`;

let marginRightAbout = calcMiniCO(mainAngle,window.innerHeight * 0.7);
const navAbout = document.querySelector("#navAbout");
navAbout.style.marginRight = `${marginRightAbout - 130}px`;

let marginRightServices = calcMiniCO(mainAngle,window.innerHeight * 0.6);
const navServices = document.querySelector("#navServices");
navServices.style.marginRight = `${marginRightServices - 130}px`;

let marginRightGalery = calcMiniCO(mainAngle,window.innerHeight * 0.5);
const navGalery = document.querySelector("#navGalery");
navGalery.style.marginRight = `${marginRightGalery - 130}px`;

let marginRightContact = calcMiniCO(mainAngle,window.innerHeight * 0.4);
const navContact = document.querySelector("#navContact");
navContact.style.marginRight = `${marginRightContact - 130}px`;
/*

window.addEventListener("resize",()=>{
    const CO = 500;
    const CAHome = window.innerHeight;
    const CAAbout = (window.innerHeight / 0.9);
    const CAServices = (window.innerHeight/ 0.8);
    const CAGalery = (window.innerHeight / 0.7);
    const CAContact = (window.innerHeight / 0.6);

    console.log(calcMainTriangle(CO,CAHome));
    navHome.style.marginRight = `${calcMainTriangle(CO,CAHome)}px`;

})

*/
