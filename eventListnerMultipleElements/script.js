var len = document.querySelectorAll(".myButton").length;

for(var i=0;i<len;i++)
{
    var button=document.querySelectorAll(".myButton")[i];
    button.addEventListener("click",function(){
        var text=this.innerHTML;
        document.querySelector("h1").innerHTML=text+"is clicked";
    });
}

for(var j=0;j<5;j++)
{
    document.write("<br>"+j+"<br>");
}