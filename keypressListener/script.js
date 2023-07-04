document.addEventListener("keypress",function(event){
    var x=event.key;
    document.querySelector("p").innerHTML="you have pressed &nbsp" + x;
});

var count=0;
document.querySelector("textarea").addEventListener("keypress",function(event){
    var y=event.key;
    count++;
    document.querySelector("pre").innerHTML="you have pressed " + count+" letters";
});

