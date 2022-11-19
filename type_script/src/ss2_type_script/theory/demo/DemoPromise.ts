//Tại hàm xảy ra bất đồng bộ cụ thể là connectDB (gọi xuông server không biết thời gian là bao nhiêu)
//ném ra một đối tượng Promise có 2 thuộc tính là resolve và reject (resolve : thành công , reject : thất bại)
// Thành công ném ra resolve hoặc thất bại ném ra reject

let connectDB = function (user: string, pass: string) {
    //resolve : thành công , reject : thất bại
    return new Promise(function (resolve, reject) {
        //code xử lý ở server
        setTimeout(function () {
            if (user == "admin" && pass == "123") {
                return resolve("Kết nối thành công");
            } else {
                return reject("Mật khẩu hoặc tài khoản bị sai");
            }
        }, 5000);
    })
}

//Gọi phương thức bất đồng bộ : đón nhận thành công bằng .then và đón nhận kết quả lỗi or thất bại bằng .catch
connectDB("admin", "123")
    .then(data => console.log("OK: " + data))
    .catch(err => console.log("NG: " + err))