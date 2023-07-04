console.clear();
var div = document.querySelector("div");
console.log(div);

// div.addEventListener("click", function () {
//     console.log("click has occured");
// });
// div.addEventListener("dblclick", function () {
//   console.log("dblclick has occured");
// });
// div.addEventListener("mousedown", function () {
//   console.log("mousedown has occured");
// });
// div.addEventListener("mouseup", function () {
//   console.log("mouseup has occured");
// });
// div.addEventListener("mouseenter", function () {
//   console.log("mouseenter has occured");
// });
// div.addEventListener("mouseleave", function () {
//   console.log("mouseleave has occured");
// });
// div.addEventListener("mouseover", function () {
//   console.log("mouseover has occured");
// });
// div.addEventListener("mousemove", function (e) {
//     // console.log("mousemove is occured");
//     // console.log("clientX = " + e.clientX + ", clientY = " + e.clientY);
//     console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
// });
 const buttons = document.querySelectorAll(".btn");

Array.from(buttons).map(function(button){
  button.addEventListener("click", function (e) {
    console.log(e.target.innerText);
  });
});