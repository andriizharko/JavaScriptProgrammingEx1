/**
 * Author: Andrii Zharko
 * Title: Ex1 Varibales and Arithmetic Operators
 * Date: 2024-01-16
 */

let myFirstIntegerVariable = 4;
let myFirstFloatVariable = 9.9;
let myFirstBooleanVariable = true;
let myFirstName = "Andrii";
let myNullVariable = null; // intentional absence of value
let myUndefinedVariable; // no value assigned

console.log(myFirstIntegerVariable);
console.log(myFirstFloatVariable);
console.log(myFirstBooleanVariable);
console.log(myFirstName);
console.log(myNullVariable);
console.log(myUndefinedVariable);

// Truthiness
console.log(!!myFirstIntegerVariable);
console.log(!!myFirstName);
console.log(!!myNullVariable);
console.log(!!myUndefinedVariable);

let mySecondInteger = 3;
mySecondInteger = 5;

console.log("-------------");
console.log("Addition");
let myAddtion = myFirstIntegerVariable + mySecondInteger;
console.log(myAddtion);

console.log("-------------");
console.log("Subtraction");
let mySubtraction = mySecondInteger - myFirstIntegerVariable;
console.log(mySubtraction);

console.log("-------------");
console.log("Multiply");
let myProduct = myFirstIntegerVariable * mySecondInteger;
console.log(myProduct);

console.log("-------------");
console.log("Divide");
let myDivision = myProduct / 2;
console.log(myDivision);

console.log("-------------");
console.log("Integer + Float");
let floatAddition = myFirstFloatVariable + myFirstIntegerVariable;
console.log(floatAddition);

console.log("-------------");
console.log("Integer - Float");
let floatSubtraction = myFirstFloatVariable - myFirstIntegerVariable;
console.log(floatSubtraction);

console.log("-------------");
console.log("Integer / Integer = Float");
let dividingInts = myFirstIntegerVariable / mySecondInteger;
console.log(dividingInts);

console.log("-------------");
console.log("Int / Int = Int");
let x = 4 / 2;
console.log(x);

console.log("-------------");
console.log("Mod 6 and 2");
let modResult = 6 % 2;
console.log(modResult);

console.log("-------------");
console.log("Mod 13 and 4");
modResult = 13 % 4;
console.log(modResult);

console.log("-------------");
console.log("Increment ++ start at 3");
let a = 3;
a++;
console.log(a);

console.log("-------------");
console.log("Decrement -- start at 7");
let b = 7;
b--;
console.log(b);

console.log("-------------");
console.log("Compound += 3 & 5");
let myThirdInt = 3;
myThirdInt += 5;
console.log(myThirdInt);

console.log("-------------");
console.log("Compound -= 7 & 5");
let myFourthInt = 7;
myFourthInt -= mySecondInteger;
console.log(myFourthInt);

let y = myFirstIntegerVariable + myFirstName;
console.log(y);

let z = myFirstIntegerVariable * myFirstName;
console.log(z);
