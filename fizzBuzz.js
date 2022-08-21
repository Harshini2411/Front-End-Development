function add(number) {
    
    for(var i=0;i<=100;i++)
        {
            //number++;
           
        
             if(number%3===0 && number%5 ===0)
            {
                console.log("FIZZBUZZ");
                 //number++;
                continue;
            }
                if(number%3===0)
            {
                console.log("Fizz");
                 //number++;
                continue;
            }
            if(number%5===0)
            {
                console.log("Buzz");
                continue;
                 //number++;
            }
            number++;
            console.log(number);
           
        }
    alert(number);
   
}
add(1);

////////---------->other possibility <--------------\\\\\\\\\\\\\\\\\\
var output = [];
var count = 1;
function replaceCounts() {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FIZZBUZZ");

    } else if (count % 3 === 0) {
        output.push("FIZZ");
    } else if (count % 5 === 0) {
        output.push("BUZZ");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);
}
