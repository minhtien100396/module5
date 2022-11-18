var sumFabibonacci = 0;
var number1 = 0;
var number2 = 1;
var fibonacci;
var n = 20;
var arrayFibonacci = [];
for (var i = 0; i < n; i++) {
    fibonacci = number1 + number2;
    arrayFibonacci.push(fibonacci);
    number1 = number2;
    number2 = fibonacci;
}
for (var i = 0; i < arrayFibonacci.length; i++) {
    sumFabibonacci += arrayFibonacci[i];
}
console.log(arrayFibonacci);
console.log("Tổng 20 số Fibonacci đầu tiền là: " + sumFabibonacci);
