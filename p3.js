/*
Write a function that combines two arrays 
by alternatingly taking their elements in, 
e.g. [x,y,z], [10,20,30] 
prints [x,10,y,20,z,30]
*/

const ALPHABET = ["a", "b", "c", "d", "e", "d", "e"];
const THOUSANDS = [1000, 2000, 3000, 4000];
var result = [];

for(var i=0; i<ALPHABET.length || i<THOUSANDS.length; i++) {
    if (ALPHABET[i]) {
        result.push(ALPHABET[i]);
    }
    if (THOUSANDS[i]) {
        result.push(THOUSANDS[i]);
    }
}
console.log("["+result.toString()+"]");