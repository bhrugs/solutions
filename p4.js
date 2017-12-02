/*
Write a function to perform basic string compression using the counts of repeated characters; 
e.g "aabcccccaaa"
would become "a2b1c5a3" . 
If the compressed string would not become smaller than the original string, just print the
original string.
*/

const regularString = "aabcccccaaa";
var compressedStr = "";
var repCount = 1;
var prevChar = regularString.charAt(0);

for (var i = 1; i <= regularString.length ; i++) {
    if(prevChar === regularString.charAt(i)) {
        repCount++;
    }
    else {
        compressedStr = compressedStr + prevChar + repCount;
        repCount = 1;
    }
    prevChar = regularString.charAt(i);
}
//if size is compressed then print compressed string
if (regularString.length > compressedStr.length) {
    console.log(compressedStr);
}
//otherwise print the original string
else {
    console.log(regularString);
}