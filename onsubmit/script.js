//finding the elements
var form=document.querySelector("form");
var email=form.querySelector("div #email");
var password=form.querySelector("div #password");
var userName=form.querySelector("div #name");

form.addEventListener("submit",formHandler);

function formHandler(e){
    e.preventDefault();
    // console.log(userName.value);
    // console.log(email.value);
    // console.log(password.value);

    var userInfo={
        Name: userName.value,
        email: email.value,
        password: password.value
    };
    console.log(userInfo);

    //clear the values
    userName.value='';
    email.value='';
    password.value='';
}


