//MENU LATERAL  
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block"
        menu_visible = true
    }else{
        menu.style.display = "none"
        menu_visible = false
    }
}