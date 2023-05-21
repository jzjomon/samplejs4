var readlineSync = require("readline-sync");
let num = readlineSync.question("enter a limit");
let a=0;
for(let i=1;i<=num;i++){
    if(i%2==1){
        a=i+a;
    }
}
console.log("sum of odd numbers =",a);