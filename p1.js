/*
Write a function such that if an element in an MxN matrix is 0 , its entire row and column are set to 0 and then printed
out.
// Original input
[
 [1, 2, 3],
 [4, 0, 6],
 [7, 8, 9]
]
// Result
[
 [1, 0, 3],
 [0, 0, 0],
 [7, 0, 9]
]
*/


/*
1. create a new empty array of the same size of an INPUT_ARRAY
2. detect 0 in the INPUT_ARRAY 
3. 
*/
//4x4 array with numbers and strings
const INPUT_ARRAY =  [
    [0, 2, 3, 9], 
    [4, 0, 6, 8], 
    [7, 8, 9, "B"],
    ["H", 8, 1, 9]
];

//given it's a two dimensional MxN array - creating new array of the same size as input array
var resultArray = new Array(INPUT_ARRAY.length);
for (var i = 0; i < resultArray.length; i++) {
    resultArray[i] = new Array(INPUT_ARRAY[i].length);
}

//spread 0s for the row and column positions received
function updateOutputArray(rowPos, columnPos) {
    for(var i=0; i<INPUT_ARRAY.length; i++) {
        for (var j=0; j<INPUT_ARRAY[i].length; j++) {
            //"main action" - make it 0
            if (i == rowPos || j == columnPos) {
                resultArray[i][j] = 0;
            }
        }
    }
}

//detect when the element is 0
for(var i=0; i<INPUT_ARRAY.length; i++) {
    for(var j=0; j<INPUT_ARRAY[i].length; j++) {
        //0 found
        if(INPUT_ARRAY[i][j] === 0) {
            //using the position of the element to spread 0s in the matrix
            updateOutputArray(i, j);
        }
    }
    //console.log(resultArray[i].toString());
}

//copy non-zero values to new array
for (var i=0; i < INPUT_ARRAY.length; i++) {
    for (var j=0; j<INPUT_ARRAY[i].length; j++) {
        //"secondary action" - copy value only if non-zero
        if (resultArray[i][j] !== 0) {
            resultArray[i][j] = INPUT_ARRAY[i][j];
        }
    }
    console.log(resultArray[i].toString());
}