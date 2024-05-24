document.querySelectorAll("button")[0].addEventListener("click",diceRoll1);
function diceRoll1(){
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomImage = "dice"+randomNumber1+".png";
var randomImageSorce = "images/"+randomImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSorce);
}
document.querySelectorAll("button")[1].addEventListener("click",diceRoll2);
function diceRoll2(){
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomImage2 = "dice"+randomNumber2+".png";
var randomImageSorce2 = "images/"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSorce2);
}


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else 
{
 document.querySelector("h1").innerHTML="Draw";
}



