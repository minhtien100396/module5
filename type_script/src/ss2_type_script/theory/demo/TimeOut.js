function a() {
    console.log("a");
}
// @ts-ignore
function b(callback) {
    setTimeout(function () {
        console.log("b");
        callback();
    }, 2000);
}
function c() {
    console.log("c");
}
a();
b(c);
