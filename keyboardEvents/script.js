// KeyboardEvent Object
// 1. Keydown - pressing a key, can repeat
// 2. keypress (may not supported by some browsers)
// 3. keyup
// some properties - key, keyCode, code, shiftKey, ctlKey, repeat
const textarea=document.querySelector("textarea");

// textarea.addEventListener("keydown",function(){
//     console.log("keydown");
// });
// textarea.addEventListener("keypress",function(){
//     console.log("keypress");
// });
textarea.addEventListener("keyup",function(e){
    //console.log("keyup");
    console.log(e.key);
    //console.log(e.keyCode);
    //console.log(e.code);
    //console.log(e.shiftKey);
});
