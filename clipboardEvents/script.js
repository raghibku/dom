var input=document.querySelector("input");
input.addEventListener("copy",function(){
    var output=document.querySelector("p");
    output.innerText="the text is copied";
});
input.addEventListener("cut",function(){
    var output=document.querySelector("p");
    output.innerText="the text is cut";
});
input.addEventListener("paste",function(){
    var output=document.querySelector("p");
    output.innerText="the text is pasted";
});