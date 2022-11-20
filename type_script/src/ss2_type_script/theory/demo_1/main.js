"use strict";
exports.__esModule = true;
var x = 1;
var y = 9;
// if (x<y){
//     console.log("x nhỏ hơn y");
// }else if (x>y){
//     console.log("x lớn hơn y");
// }else {
//     console.log("x bằng y");
// }
x > y ? console.log("x lớn hơn y") : console.log("x nhỏ hơn hoặc bằng y");
var arr = [5, 10, 15, 20];
var str = "";
// for (let element of arr) {
//     str += element +" ";
// }
// console.log(str);
for (var index in arr) {
    str += arr[index] + " ";
}
console.log(str);
var value = [3, 1, 2];
var arr2 = ['c', 5, 10];
// console.log(arr2[0]);
// console.log(value[2]);
//
// arr2.forEach(function (value, index, array) {
//     console.log(index);
// })
//
// // @ts-ignore
// let arr3:(string|number)[] = arr2.map(value => value + 1);
// for (let i = 0; i < arr3.length ; i++) {
//     console.log(arr3[i]);
// }
//
// // @ts-ignore
// let arr5:number[] = value.filter(value => value>2 );
// console.log(arr5);
// console.log(value.push(1,2,3));
//
//
// console.log(value.pop());
// let str1:string = value.join(" ");
// console.log(value.reverse());
// console.log(value.concat(arr2).sort());
// console.log(value.splice(1,1,2,3,5));
console.log(value.includes(10));
