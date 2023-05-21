var readlineSync = require("readline-sync");
let num = readlineSync.question("the size of the array");
console.log("enter the values of the array");
const a=[];
let b=0;
for(let i=0;i<num;i++){
    a[i]=readlineSync.question("");
    if(a[i]%2==0){
        b=b+1;
    }
}
console.log("number of even numbers in the given array is",b);
