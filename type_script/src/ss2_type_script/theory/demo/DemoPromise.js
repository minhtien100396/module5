var connectDB = function (user, pass) {
    //resolve : thành công , reject : thất bại
    return new Promise(function (resolve, reject) {
        //code xử lý ở server
        setTimeout(function () {
            if (user == "admin" && pass == "123") {
                return resolve("Kết nối thành công");
            }
            else {
                return reject("Mật khẩu hoặc tài khoản bị sai");
            }
        }, 5000);
    });
};
connectDB("1", "123")
    .then(function (data) { return console.log("OK: " + data); })["catch"](function (err) { return console.log("NG: " + err); });
