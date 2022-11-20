var num1 = 0;
var num2 = 1;
var fibonacciNum;
var arr = [];
// @ts-ignore
var sum = 0;
// @ts-ignore
for (var i = 0; i < 3; i++) {
    fibonacciNum = num1 + num2;
    arr.push(num1);
    num1 = num2;
    num2 = fibonacciNum;
}
console.log(arr.toString());
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
