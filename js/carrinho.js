var botaoAdiciona = document.querySelector("#adicionar-pizza");
var nomePizza = "";
var valPizza = "";
var idPizza = "";
var total = 0.0;

botaoAdiciona.addEventListener("click", function(event) {
    event.preventDefault();
    var pizza = document.querySelector("#pizzas");
    if (pizza.value == "1") {
        nomePizza = "Pepperoni";
        valPizza = 20.00;
        idPizza = "pepperoni";
    } else if (pizza.value == "2") {
        nomePizza = "Calabresa acebolada";
        valPizza = 18.50;
        idPizza = "calabresaAcebolada";
    } else if (pizza.value == "3") {
        nomePizza = "Calabresa especial";
        valPizza = 20.00;
        idPizza = "calabresaEspecial";
    } else if (pizza.value == "4") {
        nomePizza = "Chocolate com morango";
        valPizza = 20.00;
        idPizza = "chocolateComMorango";
    } else if (pizza.value == "5") {
        nomePizza = "Romeu e Julieta";
        valPizza = 18.50;
        idPizza = "romeuJulieta";
    } else if (pizza.value == "6") {
        nomePizza = "Brigadeiro";
        valPizza = 18.50;
        idPizza = "brigadeiro";
    } else if (pizza.value == "7") {
        nomePizza = "Combo 1";
        valPizza = 28.50;
        idPizza = "combo1";
    } else if (pizza.value == "8") {
        nomePizza = "Combo 2";
        valPizza = 28.50;
        idPizza = "combo2";
    } else if (pizza.value == "9") {
        nomePizza = "Combo 3";
        valPizza = 28.50;
        idPizza = "combo3";
    }
    multiplyPizzaValue();
});

function multiplyPizzaValue() {
    var pizzaQty = document.getElementById(idPizza) == null ? "0" : document.getElementById(idPizza).innerHTML;
    if (pizzaQty > 0) {
        pizzaQty++
        var multipliedPizza = valPizza * pizzaQty;
        document.getElementById(idPizza.concat("Carrinho")).innerHTML = "<td class='pizza-nome'>" + nomePizza + "</td>" +
            "<td class='pizza-quantidade' id=" + idPizza + ">" + pizzaQty + "</td>" +
            "<td class='pizza-preco'id=" + idPizza.concat("Price") + ">" + multipliedPizza + "</td>" +
            "<td class='pizza-excluir'><img src='img/btexcluir.png' class='btExcluir' onclick='deleteRow(\"" + idPizza.concat("Carrinho") + "\");'></td>";
    } else {
        var novaPizza = "<tr class='trCarrinho' id=" + idPizza.concat("Carrinho") + " name=" + idPizza.concat("Carrinho") + ">" +
            "<td class='pizza-nome'>" + nomePizza + "</td>" +
            "<td class='pizza-quantidade' id=" + idPizza + ">1</td>" +
            "<td class='pizza-preco'id=" + idPizza.concat("Price") + ">" + valPizza + "</td>" +
            "<td class='pizza-excluir'><img src='img/btexcluir.png' class='btExcluir' onclick='deleteRow(\"" + idPizza.concat("Carrinho") + "\");'></td>";
        "</tr>";
        var todasPizzas = document.querySelector("table");
        todasPizzas.innerHTML += novaPizza;
    }

    total += valPizza;
    var spanTotal = document.querySelector("#total");
    spanTotal.innerHTML = total;
}

function deleteRow(pizzaToDelete) {
    var valueToRemove = document.getElementById(idPizza.concat("Price")).innerHTML;
    total -= valueToRemove;
    var spanTotal = document.querySelector("#total");
    spanTotal.innerHTML = total;
    var row = document.getElementById(pizzaToDelete);
    row.parentNode.removeChild(row);
}

/* var pizzaCount = getCookie("pizzaCount") == "" ? 0 : getCookie("pizzaCount");
var cart = document.getElementsByClassName("carrinho");

function addPizzaToCart(pizzaName, value) {
    pizzaCount++;
    setCookie("pizzaCount", pizzaCount, 1);
    setCookie(pizzaName, value, 1);
    setCookie(pizzaName.concat("Count"), getCookie("pizzaNameCount") == "" ? 0 : getCookie("pizzaNameCount") + 1, 1);
    cart[0].style.display = "inline";
    checkCookie();
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function checkCookie() {
    var pizzaCount = getCookie("pizzaCount");
    if (pizzaCount != "") {
        document.getElementById("qtCarrinho").innerHTML = getCookie("pizzaCount");
        cart[0].style.display = "inline";
    } else {
        document.getElementById("qtCarrinho").innerHTML = "";
        cart[0].style.display = "none";
    }
}

function resetCart() {
    setCookie("pizzaCount", "", 1);
    checkCookie();
} */
