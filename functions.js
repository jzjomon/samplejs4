var readlineSync = require("readline-sync");
console.log(" 1 for addition\n 2 for subtraction\n 3 for multiplicatoin\n 4 for division");
let num = readlineSync.question("enter your operation");
let num1 = readlineSync.question("enter your first number");
let num2 = readlineSync.question("enter your second number");
num =parseInt(num);
num1 =parseInt(num1);
num2 =parseInt(num2);
switch(num){
    case 1:
        let a=add(num1,num2);
        console.log(num1,"+",num2,"=",a);
        break;
    case 2:
        let b=subtract(num1,num2);
        console.log(num1,"-",num2,"=",b);
        break;
    case 3:
        let c=multiplicate(num1,num2);
        console.log(num1,"*",num2,"=",c);
        break;
    case 4:
        let d=divide(num1,num2);
        console.log(num1,"/",num2,"=",d);
        break;
    default :
    console.log("enter valid operation");
    break;
}
function add(a,b){
    let sum=a+b;
    return sum;
}
function subtract(a,b){
    let sub=a-b;
    return sub;
}
function multiplicate(a,b){
    let mult=a*b;
    return mult;
}
function divide(a,b){
    let div=a/b;
    return div;
}