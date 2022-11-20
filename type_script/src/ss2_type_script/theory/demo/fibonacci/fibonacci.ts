let num1: number = 0;
let num2: number = 1;
let fibonacciNum: number;
let arr: Array<number> = [];
// @ts-ignore
let sum: number =0;
// @ts-ignore
for (let i = 0; i < 3; i++) {
    fibonacciNum = num1 + num2;
    arr.push(num1);
    num1 = num2;
    num2 = fibonacciNum;
}
console.log(arr.toString());

for (let i = 0; i < arr.length ; i++) {
    sum+=arr[i];
}
console.log(sum);
