var menu = document.getElementById('menu_mobile');
var btnOpen = document.getElementById('btn_icon_header');
var btnOpen = document.getElementById('btn_icon_header_close');
var showSidebar = false;

menu.addEventListener('click',openSidebar)

function openSidebar(){
    menu.classList.toggle('abrir')
    
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        menu.style.animationName = 'showSidebar';
    }
    else
    {
        menu.style.animationName = '';
    }
    
}

