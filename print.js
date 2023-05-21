var readlineSync = require("readline-sync");
let num = readlineSync.question("enter a number");
for(let i=1;i<=num;i++){
    let s="";
    for(let j=1;j<=i;j++){
        s+=String(j)
    }
    console.log(s)
    console.log("\n");
}
