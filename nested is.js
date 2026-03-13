const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number: "));
if (!isNaN(num)) 
    {            
    if (num % 2 === 0) 
        {    
           console.log("The number is Even");
       } 
    else 
        {                 /
           console.log("The number is Odd");
        }
} 
else 
    {
    console.log("Invalid input. Please enter a number.");
}