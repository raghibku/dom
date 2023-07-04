function print(x){document.write(x+"<br>");}
var button=document.querySelector("#hello")
button.addEventListener("click",myFunction)

function myFunction(){
    print("meaw");
}

var ns=document.querySelector("h1");
ns.addEventListener("mouseover",myFunction1);

function myFunction1(){
    ns.classList.add("myClass");
}
ns.addEventListener("mouseout",myFunction2);

function myFunction2(){
    ns.classList.remove("myClass");
}

