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

