/*
Write a function that convert the given number into a Roman Numeral 
The function needs to receive a Number and Return a String 
(The Number can be between 1 and 3999)
Example:
getRomanNumeral(512);
Prints: DXII
*/
/*
Symbol	I	V	X	L	C	D	M
Value	1	5	10	50	100	500	1,000
*/
(function(){
    var 
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000;
    var romanNumeral = "";

    function ifNumberIsSymbol(number) {
        switch (number) {
            case I:
                return "I";
                break;
            case V:
                return "V";
                break;
            case X:
                return "X";
                break;
            case L:
                return "L";
                break;
            case C:
                return "C";
                break;
            case D:
                return "D";
                break;
            case M:
                return "M";
                break;
            default:
                return "";
                break;
        }
    }
    var singleDigit, newNumber;
    this.getRomanNumeral = function (number) {
        romanNumeral = ifNumberIsSymbol(number);
        if (romanNumeral.length) {
        } else {
            for (var i = 0 ; number.toString().length > 0 && number > 0 ; i++) {
                if (number.toString().length === 1) {
                    console.log("single digit to be handled now");
                    console.log(romanNumeral+number.toString());
                    return romanNumeral+number.toString();
                } else {
                    newNumber = number % ( Math.pow(10, number.toString().length - 1) ); 
                    singleDigit = number - newNumber;
                    if(ifNumberIsSymbol(singleDigit).length) {
                        romanNumeral = romanNumeral + ifNumberIsSymbol(singleDigit);
                        if (ifNumberIsSymbol(newNumber).length) {
                            romanNumeral = romanNumeral + ifNumberIsSymbol(newNumber);
                            console.log(romanNumeral);
                            return romanNumeral;
                        }
                    } else {
                        console.log("something is wrong");
                        var lastNumber = this.getRomanNumeral(singleDigit);
                        romanNumeral = romanNumeral + lastNumber;
                        return romanNumeral;
                    }
                    number = newNumber;
                }
            }
        }
        return romanNumeral;
    }
    getRomanNumeral(40);
})();