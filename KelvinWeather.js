
const kelvin = 293;
//The weather is in constant 293 kelvin before convresion
const celsius =  kelvin-273;
// I change the kelvin(293) in to celsius
let newton = celsius * (33/100);
// I change celcius to Netwon using the above fomula

let fahrenheit = celsius * (9/5) + 32;
// I change the celsius into Fahrenheit

fahrenheit = (Math.floor(fahrenheit));
// I round down the result using Math.floor

console.log(`The temparature is ${fahrenheit} degrees fahrenheit`);

