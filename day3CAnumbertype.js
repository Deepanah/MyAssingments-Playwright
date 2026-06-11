const { log } = require("node:console")

function numberType() {
    let number = -10
    if(number>0){
        console.log("Positive Number " +number);
    }
    else if(number<0){
       console.log("Negative Number " +number);  
    }
    else{
         console.log("Nutral Number " +number);
    }
}
numberType()