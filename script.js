let Email = document.getElementById("Email");
let Password = document.getElementById("Password");
let emailError  = document.getElementById("emailError");
let emailCorrect  = document.getElementById("emailCorrect");
let passError  = document.getElementById("passError");
let passCorrect  = document.getElementById("passCorrect");
let submit = document.getElementById("submit");

Email.addEventListener("blur",()=>{
    let regex = /^[A-Za-z0-9]*@[a-z]*\.[a-z]{2,4}$/;
    if(regex.test(Email.value)){
        if(Email.classList.contains("wrong")){
            Email.classList.remove("wrong");
            Email.classList.add("correct");
            emailError.style.display = "none";
            emailCorrect.style.display = "block";
        }
        else{
            Email.classList.add("correct");
            emailError.style.display = "none";
            emailCorrect.style.display = "block";
        }
    }
    else{
        if(Email.classList.contains("correct")){
            Email.classList.remove("correct");
            Email.classList.add("wrong");
            emailError.style.display = "block";
            emailCorrect.style.display = "none";
        }
        else{
            Email.classList.add("wrong");
            emailError.style.display = "block";
            emailCorrect.style.display = "none";
        }
    }
})
Password.addEventListener("blur",()=>{
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(regex.test(Password.value)){
        if(Password.classList.contains("wrong")){
            Password.classList.remove("wrong");
            Password.classList.add("correct");
            passError.style.display = "none";
            passCorrect.style.display = "block";
        }
        else{
            Password.classList.add("correct");
            passError.style.display = "none";
            passCorrect.style.display = "block";
        }
    }
    else{
        if(Password.classList.contains("correct")){
            Password.classList.remove("correct");
            Password.classList.add("wrong");
            passError.style.display = "block";
            passCorrect.style.display = "none";
        }
        else{
            Password.classList.add("wrong");
            passError.style.display = "block";
            passCorrect.style.display = "none";
        }
    }
})
submit.addEventListener("click",()=>{
    location.reload();
})