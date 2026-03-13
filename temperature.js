function temperatureConverter(value, unit) 
{
    if (unit.toLowerCase() === "c") 
        { 
        return (value * 9/5) + 32;
    } 
    else if (unit.toLowerCase() === "f")
        { 
        return (value - 32) * 5/9;
     } 
    else {

           return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
        }
}
console.log("25°C in Fahrenheit:", temperatureConverter(25, "c"));
console.log("77°F in Celsius:", temperatureConverter(77, "f"));