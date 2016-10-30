function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var pizzasCollection = ["img/pizzapronta1.jpg", "img/pizzapronta2.jpg", "img/pizzapronta3.jpg", "img/pizzapronta4.jpg", "img/pizzapronta5.jpg", "img/pizzapronta6.jpg"]

var thisNumber = 0;

function changeImagesForward() {
    thisNumber += 3;
    changeImage();
}

function changeImagesBackward() {
    thisNumber -= 3;
    changeImage();
}

function changeImage() {
    if (thisNumber > 3) { thisNumber = 0; }
    if (thisNumber < 0) { thisNumber = 3; }

    document.getElementById('pizza1').src = pizzasCollection[thisNumber];
    document.getElementById('pizza2').src = pizzasCollection[thisNumber + 1];
    document.getElementById('pizza3').src = pizzasCollection[thisNumber + 2];

    var buy1 = document.getElementById('comprar1');
    var fun1 = (thisNumber) == 0 ? "addPizzaToCart('Pepperoni', '19.99');" : "addPizzaToCart('Chocolate com Morango', '15.99');";
    buy1.setAttribute('onclick', fun1);

    var buy2 = document.getElementById('comprar2');
    var fun2 = (thisNumber + 1) == 1 ? "addPizzaToCart('Calabresa Acebolada', '29.95');" : "addPizzaToCart('Romeu e Julieta', '15.99');";
    buy2.setAttribute('onclick', fun2);

    var buy3 = document.getElementById('comprar3');
    var fun3 = (thisNumber + 2) == 2 ? "addPizzaToCart('Calabresa Especial', '25.49');" : "addPizzaToCart('Brigadeiro', '15.99');";
    buy3.setAttribute('onclick', fun3);
}