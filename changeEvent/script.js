function print(x){document.write("<br>"+x+"<br>")};

var input=document.querySelector("input[name=email]");//selecting input where name=email;
input.addEventListener("change",changeHandler)
console.clear();
function changeHandler(e){
    // console.log(e.type);
    // //print("changed");
    // console.log(e.target); //access the target
    // console.log(e.target.className); //access the class from the target
    // console.log(e.target.id);//access the id from the target
    var programs=document.querySelectorAll("input [name=program] ");
    print(programs);
    e.preventDefault();

}