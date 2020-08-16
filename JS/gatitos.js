var toggle = false;
var menu = document.getElementById('menu');
var btnMenu = document.getElementById('button-1');

function openMenu(e){
    if(e.type=='click'){
        if(toggle==false){
            menu.style.marginLeft = '-40px';
            
        }
        else if(toggle==true){
            menu.style.marginLeft = '-400px';
        }
        toggle = !toggle;
    }
}

btnMenu.onclick = openMenu;

