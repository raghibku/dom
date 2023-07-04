var len=document.querySelectorAll(".myButton").length;

for(var i=0;i<len;i++)
{
    var button=document.querySelectorAll(".myButton")[i];
    button.addEventListener("click",function(){
        var text=this.innerHTML;
        //document.write("<br>"+text+"<br>");
        
        audioPlay(text);
        
    });
}
function audioPlay(text){
    switch (text) {
        case "a":
            var audio=new Audio("1.mp3");
            audio.play();
            break;
        case "b":
            var audio=new Audio("2.mp3");
            audio.play();
            break;
        case "c":
            var audio=new Audio("3.mp3");
            audio.play();
            break;
    
    }
}