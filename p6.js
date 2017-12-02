/*
Write a calculator which evaluates expressions with decimal numbers and the operators + , - , * , / 
and prints the
result on the screen (don't use eval() nor Function() ). 
No user input for this is needed, 
instead you will give a string with the operation as an input 
i.e. if it receives 5+4-2 the result printed on screen is 7
*/

const EXPRESSION = "5+4-2*2*2/2";

var ops = [];
var numbers = [];
var num = "" ;
var result;

//only ops in expression
//prepare array for operation
for (var i = 0; i < EXPRESSION.length; i++) {
    if (EXPRESSION.charAt(i) == "*" 
        || EXPRESSION.charAt(i) == "+" 
        || EXPRESSION.charAt(i) == "-" 
        || EXPRESSION.charAt(i) == "/") 
    {
        ops.push(EXPRESSION.charAt(i));
    } else {
        num = num + EXPRESSION.charAt(i);
        if (parseInt(EXPRESSION.charAt(i+1))) {
        } else {
            numbers.push(parseInt(num));
            num = "";
        }
    }
}

//perform a single operation
function singleOperationOf(OPERATOR) {
    switch (OPERATOR) {
        case "+":
            result = numbers[ops.indexOf(OPERATOR)] + numbers[ops.indexOf(OPERATOR)+1];
        break;
        case "-":
            result = numbers[ops.indexOf(OPERATOR)] - numbers[ops.indexOf(OPERATOR)+1];
        break;
        case "/":
            result = numbers[ops.indexOf(OPERATOR)] / numbers[ops.indexOf(OPERATOR)+1];
        break;
        case "*":
            result = numbers[ops.indexOf(OPERATOR)] * numbers[ops.indexOf(OPERATOR)+1];
        break;        
        default:
        break;
    }
    //mark the operations complete
    numbers[ops.indexOf(OPERATOR)] = result;
    numbers.splice(ops.indexOf(OPERATOR)+1, 1)
    ops.splice(ops.indexOf(OPERATOR), 1);
}


// console.log("numbers: "+numbers);
// console.log("ops: "+ops);
while(ops.length) {
    if (ops.indexOf("/") >= 0) {
        //console.log("division found");
        if (ops.indexOf("*") >= 0) {
            //console.log("division and multiplication both found - check what comes first left to right");
            //check what comes first from left to right
            if (ops.indexOf("/") < ops.indexOf("*")) {
                //division comes first from left
                singleOperationOf("/");
                continue;
            } else {
                //multiplication comes first from left
                singleOperationOf("*");
                continue;
            }
        } else {
            //console.log("do the division first, because no multiplocation");
            singleOperationOf("/");
            continue;
        }
    } else {
        //console.log("no division");
        if (ops.indexOf("*") >= 0) {
            //console.log("do multiplication first");
            singleOperationOf("*");
            continue;
        } else {
            //console.log("do addition and subtraction - from left to right");
            if (ops.indexOf("+") >= 0) {
                if (ops.indexOf("-") >= 0) {
                    //check what comes first from left to right
                    if (ops.indexOf("+") < ops.indexOf("-")) {
                        //addition comes first from left
                        singleOperationOf("+");
                        continue;
                    } else {
                        //subtraction comes first from left
                        singleOperationOf("-");
                        continue;
                    }
                } else {
                    //do addition now
                    //console.log("no subtraction - do addition now");
                    singleOperationOf("+");
                    continue;
                }
            } else {
                //do subtraction now
                //console.log("do subtraction now");
                singleOperationOf("-");
                continue;
            }
        }
    }
}
console.log(EXPRESSION+" = "+numbers.toString());
