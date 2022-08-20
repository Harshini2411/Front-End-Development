var nameOfYours=prompt("Enter your Name:");
var nameOfYourPartner=prompt("Enter your Partner's Name:");
var randomNumber=Math.random();//generates random number b/w 0-0.999999999999999999999
randomNumber=Math.floor(randomNumber*100);//to calculate on %, it goes upto 100
randomNumber=randomNumber+1;//it also includes 0,to eliminate that +1
// console.log(n);
if(randomNumber >=70){
alert("Your Love Score is "+randomNumber+"%"+"You both are made for each other");
}
else
{
  alert("Your Love Score is "+randomNumber+"%");
        }
