var readlineSync = require("readline-sync");
let day = readlineSync.question("enter a number");
num = parseInt(day);
switch(num){
    case 1 :
        console.log("sunday");
        break;
    case 2 :
        console.log("monday");
        break;
    case 3 :
        console.log("tuesday");
        break;
    case 4 :
        console.log("wednesday");
        break;
    case 5 :
        console.log("thursday");
        break;
    case 6 :
        console.log("friday");
        break;
    case 7 :
        console.log("saturday");
        break;
    default :
    console.log("enter a valid number");
}