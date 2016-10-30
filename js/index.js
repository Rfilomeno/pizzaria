
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNavLogin() {
    document.getElementById("mySidenav2").style.width = "250px";
}

function closeNavLogin() {
    document.getElementById("mySidenav2").style.width = "0";
}

function openNavCadastro() {
    document.getElementById("mySidenav3").style.width = "850px";
    document.getElementById("logo").style.width = "0";
}

function closeNavCadastro() {
    document.getElementById("mySidenav3").style.width = "0";
    document.getElementById("logo").style.width = "";
}
function openNavCarrinho() {
    document.getElementById("mySidenavCarrinho").style.width = "350px";
    
}

function closeNavCarrinho() {
    document.getElementById("mySidenavCarrinho").style.width = "0";
    
}
function emManutencao(){
    alert ("Estamos em manutenção.");
}