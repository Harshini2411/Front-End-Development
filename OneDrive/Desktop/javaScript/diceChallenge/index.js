var randomnum1=Math.floor(Math.random()*6)+1;
var imgSrc="images/dice"+randomnum1+".png";
var img1=document.querySelector(".img1").setAttribute("src",imgSrc);


var randomnum2=Math.floor(Math.random()*6)+1;
var imgSrc2="images/dice"+randomnum2+".png";
var img22=document.querySelector(".img2").setAttribute("src",imgSrc2);


document.querySelector("h1").style.fontSize="5rem";
if(randomnum1>randomnum2)
{
document.querySelector("h1").innerHTML="Player1 Wins🤩";
}
else if(randomnum2>randomnum1)
{
document.querySelector("h1").innerHTML="Player2 Wins🤩";
}
else{
document.querySelector("h1").innerHTML="Draw";
}
