function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
if(year%4 === 0 && year%400 === 0)
{
    console.log("Leap year.");
}
else if(year%100 === 0 && year%400 !== 0)
{
    console.log("Not leap year.");
}
else
{
    console.log("Not leap year.");
}

/**************Don't change the code below****************/    

}
isLeap(1900);
