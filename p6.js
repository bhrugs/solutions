/*
Write a calculator which evaluates expressions with decimal numbers and the operators + , - , * , / 
and prints the
result on the screen (don't use eval() nor Function() ). 
No user input for this is needed, 
instead you will give a string with the operation as an input 
i.e. if it receives 5+4-2 the result printed on screen is 7
*/

const EXPRESSION = "6*5+3";
var ops = ["/", "*", "+", "-"];
var pos = ops.map(function(element){
    return EXPRESSION.indexOf(element);
});

//only ops in expression
for (var i = 0; i < pos.length; i++) {
    if(pos[i] <= 0) {
        ops.splice(i, 1);
        pos.splice(i, 1);
    }
    
}

console.log(ops);
console.log(pos);
