/*
Write a function that receives a matrix and returns its transposed one.
*/


function getTransposedMatrix(inputArray) {
    //create a result array of the same size as the INPUT_ARRAY
    var resultArray = new Array(inputArray.length);
    for (var i = 0; i < resultArray.length; i++) {
        resultArray[i] = new Array(inputArray[i].length);
    }
    for (var i = 0; i < resultArray.length; i++) {
        for (var j = 0; j < resultArray[i].length ; j++) {
            resultArray[j][i] = inputArray[i][j];
        }
    }
    return resultArray;
}
const INPUT_ARRAY =  [
    [0, 2, 3, 9], 
    [4, 0, 6, 8], 
    [7, 8, 9, "B"],
    ["H", 8, 1, 9]
];
var transposed = getTransposedMatrix(INPUT_ARRAY);

//optional
for (var i = 0; i < transposed.length; i++) {
    console.log(transposed[i].toString());
}