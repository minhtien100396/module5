console.log("hello");

// Theo cú pháp Js nhưng không tường minh -> không nên sử dụng
let str = "abcd";
console.log(str);

//Nên sử dụng theo TS
let str1:string = "abc"    /*Bắt buộc xài*/
console.log(str1);

//Khai báo hàm
const  CLASS_NAME:string = "C0622G1";
console.log(CLASS_NAME);

//enum
 enum ClassName {C0622G1,C0622G2,C0622G3};
 enum Status {ON,OFF}
 enum Gender {MALE,FEMALE,LGBT}


 //khai báo một biến có kiểu enum là Status
 let myStatus : Status = Status.ON;
 let myGender : Gender = Gender.FEMALE;
 console.log(myGender); /*Lấy index của enum*/
console.log(Gender[myGender]);  /*Lấy value enum*/
console.log(Gender[0]);  /*Lấy value enum*/

//any : một số biến không biết kiểu dữ liệu thì gán KDL = any

let myVariable:any; /*any dùng cho biến chưa xác định rõ KDL*/

// Khai báo mảng

let myArr1: Array<number> = [1,2,3,4,5];
let myArr2: string[] = ["a","b","c"];

//For of
for (let number of myArr1 ){
    console.log(number);
}

//FOr Each : Hàm kiểu void không trả về -> dùng duyệt
myArr2.forEach(function (value) {
    console.log(value);
})

//for Map : hàm có return có trả về -> vửa duyệt vừa thay đổi giá trị
let newArr:number[] = myArr1.map(value => value+1);
    console.log(newArr);

//filter : Hàm có return có trả về -> Khác map có thể bộ lọc( lọc theo điều kiện)
let newArr2:number[] = myArr1.filter(value => value >=3);
console.log(newArr2);


//Tuple: Bản chất cũng là mảng nhưng số lượng phần tử phải ràng buộc cố định, KDL của từng phần tử phải theo thứ tự khai báo

let myTuple:[string, number];
myTuple = ["A",1];

//ĐÔi lúc có một số trường tùy chọn
let myTuple1:[string,number,string?];
myTuple1 = ["A",2,"3"]