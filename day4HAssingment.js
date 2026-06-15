// Given a string s consisting of words and spaces, return the length of the last word in the string.
let s = "Hello World"
let word = s.split(" ")
console.log(`The last word is ${word[1]} with length: ${word[1].length}`)

// Example 2:
let  s1 = " fly me to the moon "
let words = s1.split(" ")
console.log(`The last word is ${words[5]} with length: ${words[5].length}`)

//Example 3:
function isAnagram(str1, str2){
let n = str1.toLowerCase().split("").sort().join("")
let m = str2.toLowerCase().split("").sort().join("")
if(n===m){
console.log(true);
}
else{
    console.log(false);
}
}
isAnagram("listen", "silent")
isAnagram("Hello", "World")