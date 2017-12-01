/*
Write a function that combines two arrays 
by alternatingly taking their elements in, 
e.g. [x,y,z], [10,20,30] 
prints [x,10,y,20,z,30]
*/

const ALPHABET = ["a", "b", "c", "d", "e"];
const THOUSANDS = [1000, 2000, 3000, 4000];
var result = "[";
var undefinedHandler, thousandsUndefinedHandler;

for(var i=0; i<ALPHABET.length || i<THOUSANDS.length; i++) {
    
    if(ALPHABET[i]) {
        alphabetUndefinedHandler = ALPHABET[i] + ",";
    } else {
        alphabetUndefinedHandler = "";
    }
    if(THOUSANDS[i]) {
        thousandsUndefinedHandler = THOUSANDS[i];
    } else {
        thousandsUndefinedHandler = "";
    }
    result = result + alphabetUndefinedHandler + thousandsUndefinedHandler;

    if(i >= THOUSANDS.length || i >= ALPHABET.length) { 
    }else {
        result = result +",";
    }
}
result = result + "]";
console.log(result);