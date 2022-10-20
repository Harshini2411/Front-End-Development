function primeNumber(num) {
 let isPrime=true;
 if(num==1)
 {
  console.log("1 is neither prime nor composite number");
 }
 else if(num>1){
 for(i=2;i*i<=num;i++)
 {
  if(num%i==0)
  {
   isPrime=false;
   break;
  }
 }
  if(isPrime)
  {
   console.log(`${num} is  a primenumber`);
  }
  else{
console.log(`${num} is not a primenumber`);
  }
 }
  else {
  console.log("It is not a primeNumber");
  }
 }
primeNumber(509);
