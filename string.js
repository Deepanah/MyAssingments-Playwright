//1) Write JS code to count the occurance of character 'a' in the string "JavaScript"

const { log } = require("node:console");

let str = "JavaScript"
let count = 0;
for(let i=0; i<=str.length; i++){
 if(str[i] === 'a'){
   count++;
 }
}
 console.log("the occurance of character 'a' is: " +count)

 //2) Write JS code to reverse the string (Testleaf)
 let str1 = "Testleaf"
 let reverse = ""

 for (let i=str1.length-1; i>=0; i--){
    reverse = reverse+str1[i]
 }
 console.log(reverse)





















