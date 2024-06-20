let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
//decimal and integer can both be handled with this.
let num1 = 123.45;
console.log(String(num1).replace(".","").length);


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
let num2 = 456.67;


// Using indexOf:
console.log("Using indexOf")
if (String(num2).indexOf(".") === -1){ //not decimal in this case
    console.log(String(num2).length);
}else{
    console.log(String(num2).length-1);
   // console.log(String(num2).replace(".","").length);
}
 
//Using includes:
 console.log("Using includes:")
 if (String(num2).includes(".")){
    console.log(String(num2).length-1);
       // console.log(String(num2).replace(".","").length);
}else{
    console.log(String(num2).length);

}