//same event for multiple buttons
for (var i=0;i<3;i++)
{
    var button=document.querySelectorAll(".myButton")[i];
    button.addEventListener("click",function(){
        var text=this.innerHTML;
        playAnimation(text);
        
    });
}
function playAnimation(text){
    var x=document.querySelector("."+text);
    x.classList.add("myAnimation");
//setTimeout function
    setTimeout(function(){
        x.classList.remove("myAnimation");
    },1000);
}

//added keypress listner
document.addEventListener("keypress",function(event){
    var y=event.key;
    playAnimation(y);
} );
