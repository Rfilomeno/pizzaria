
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var pizzasCollection = ["img/pizzapronta1.jpg","img/pizzapronta2.jpg","img/pizzapronta3.jpg", "img/pizzapronta4.jpg", "img/pizzapronta5.jpg", "img/pizzapronta6.jpg"]

var thisNumber = 0;

function changeImagesForward() {
    thisNumber+=3;
    changeImage();
}

function changeImagesBackward() {
    thisNumber-=3;
    changeImage();
}

function changeImage() {
    if (thisNumber > 3) { thisNumber = 3; }
	if (thisNumber < 0) { thisNumber = 0; }
	
    document.getElementById('pizzaHomePic').src = pizzasCollection[thisNumber];
    document.getElementById('pizza2').src = pizzasCollection[thisNumber + 1];
    document.getElementById('pizza3').src = pizzasCollection[thisNumber + 2];
    

}

