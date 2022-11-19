console.log("hello");
// Theo cú pháp Js nhưng không tường minh -> không nên sử dụng
var str = "abcd";
console.log(str);
//Nên sử dụng theo TS
var str1 = "abc"; /*Bắt buộc xài*/
console.log(str1);
//Khai báo hàm
var CLASS_NAME = "C0622G1";
console.log(CLASS_NAME);
//enum
var ClassName;
(function (ClassName) {
    ClassName[ClassName["C0622G1"] = 0] = "C0622G1";
    ClassName[ClassName["C0622G2"] = 1] = "C0622G2";
    ClassName[ClassName["C0622G3"] = 2] = "C0622G3";
})(ClassName || (ClassName = {}));
;
var Status;
(function (Status) {
    Status[Status["ON"] = 0] = "ON";
    Status[Status["OFF"] = 1] = "OFF";
})(Status || (Status = {}));
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["LGBT"] = 2] = "LGBT";
})(Gender || (Gender = {}));
//khai báo một biến có kiểu enum là Status
var myStatus = Status.ON;
var myGender = Gender.FEMALE;
console.log(myGender); /*Lấy index của enum*/
console.log(Gender[myGender]); /*Lấy value enum*/
console.log(Gender[0]); /*Lấy value enum*/
//any : một số biến không biết kiểu dữ liệu thì gán KDL = any
var myVariable; /*any dùng cho biến chưa xác định rõ KDL*/
// Khai báo mảng
var myArr1 = [1, 2, 3, 4, 5];
var myArr2 = ["a", "b", "c"];
//For of
for (var _i = 0, myArr1_1 = myArr1; _i < myArr1_1.length; _i++) {
    var number = myArr1_1[_i];
    console.log(number);
}
//FOr Each : Hàm kiểu void không trả về -> dùng duyệt
myArr2.forEach(function (value) {
    console.log(value);
});
//for Map : hàm có return có trả về -> vửa duyệt vừa thay đổi giá trị
var newArr = myArr1.map(function (value) { return value + 1; });
console.log(newArr);
//filter : Hàm có return có trả về -> Khác map có thể bộ lọc( lọc theo điều kiện)
var newArr2 = myArr1.filter(function (value) { return value >= 3; });
console.log(newArr2);
//Tuple: Bản chất cũng là mảng nhưng số lượng phần tử phải ràng buộc cố định, KDL của từng phần tử phải theo thứ tự khai báo
var myTuple;
myTuple = ["A", 1];
//ĐÔi lúc có một số trường tùy chọn
var myTuple1;
myTuple1 = ["A", 2, "3"];
