//MENU LATERAL  
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x<links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra(id_barra){
    for(i=0; i<=16; i++){
        let div = document.createElement("div");
        div.className = "e"
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);

let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);

let PHP = document.getElementById("php");
crearBarra(PHP);

let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    console.log(window.innerHeight);
    console.log(habilidades.getBoundingClientRect().top);
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html,16,0,intervalHtml);
        },100);
        const intervalJS = setInterval(function(){
            pintarBarra(javascript,15,1,intervalJS);
        },100);
        const intervalWP= setInterval(function(){
            pintarBarra(wordpress,10,2,intervalWP);
        },100);
        const intervalPHS = setInterval(function(){
            pintarBarra(photoshop,7,3,intervalPHS);
        },100);
        const intervalPHP = setInterval(function(){
            pintarBarra(php,5,4,intervalPHP);
        },100);
        const intervalITR = setInterval(function(){
            pintarBarra(ilustrator,1,5,intervalITR);
        },100);
    }
}

function pintarBarra(id_barra,cantidad,indice,interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}