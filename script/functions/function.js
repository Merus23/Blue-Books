/*  Script para rotacionar a div
function teste() {

    var pontos = document.getElementById("pontos");
    var mais = document.getElementById("mais");
    var btn = document.getElementById("btn");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        mais.style.display="none";
        btn.innerHTML="Leia Mais"
    }else{
        pontos.style.display="none";
        mais.style.display="inline";
        btn.innerHTML="Leia menos";
    }
}*/
function mostrarLogIn() {
    var painel = document.getElementById("painel");
    var painel1 = document.getElementById("painel1");
    if(painel1.style.display === "none"){
        painel.style.display="inline-block";
        painel1.style.display="none";
    }else{
        painel.style.display="none";
        painel1.style.display="inline-block";
    }
}
function mostrarSigUp() {
    var painel = document.getElementById("painel");
    var painel2 = document.getElementById("painel2");
    if(painel1.style.display === "none"){
        painel.style.display="inline-block";
        painel2.style.display="none";
    }else{
        painel.style.display="none";
        painel2.style.display="inline-block";
    }
}