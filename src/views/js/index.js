var toggle = false;
var menu = document.getElementById('menu');
var btnToggleNav= document.getElementById('btnToggleNav');

function openMenu(e){
    if(e.type=='click'){
        if(toggle==false){
            menu.style.marginRight = '0px';
        }
        else if(toggle==true){
            menu.style.marginRight = '-500px';
        }
        toggle = !toggle;
    }
}

btnToggleNav.onclick = openMenu;

