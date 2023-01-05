const main = require("./31_myCalc")


let calc = new Calc(); 
 
console.log(calc.compute("1+2")); //"1+2=3" 
console.log(calc.compute("2-1")); //"2-1=1" 
console.log(calc.compute("2*3")); //"2*3=6" 
console.log(calc.compute("10/2")); //"10/2=5" 
 
console.log(calc.lastResult()); //5 
console.log(calc.history());//["1+2=3","2-1=1","2*3=6","10/2=5"]