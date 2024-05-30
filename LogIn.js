let sub = document.querySelector(".submit"); 
let input = document.querySelector(".input");
let p = document.querySelector(".emial");
let password = document.querySelector(".password");
let Sign = document.querySelector(".SignUp");
let name1 = document.querySelector(".Name-section");
let namePara = document.querySelector(".namePara");
let nameInput = document.querySelector(".nameInput");
let logo = document.querySelector(".logo");
let number = document.querySelector(".num-section");
let signLogo = document.querySelector(".Sign-logo");
let con = document.querySelector(".container");
let numInput = document.querySelector(".NumberInput");
let NumberPara = document.querySelector(".NumberPara");


function emialInput(){
    if(input.value == ""){
        p.innerHTML = "*Email is required";
    }
    if(!input.value.match(/[a-z]@[a-z]/gi)){
        p.innerHTML = "*Enter valid Email";
    }else{
        p.classList.add("hidden");
    }      
}


function nameCheck(){
    if(nameInput.value == ""){
        namePara.innerHTML = "*Name is required";
    }
    if(!nameInput.value.match(/[a-z]\s[a-z]/gi)){
        namePara.innerHTML = "*enter valid Name";
    }
    if(nameInput.value.match(/[a-z]\s[a-z]/gi)){
        namePara.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
        namePara.style.color = "green"
    }
}

function Numeber(){
    if(numInput.value.length !== 10 ){
        NumberPara.innerHTML = "*Number should be 10 digit";
        NumberPara.style.color = "red"
    }
    if(!numInput.value.match(/\d/)){
        NumberPara.innerHTML = "*Only digits please";
        console.log("we");
    }
    if(numInput.value.length == 10){
        NumberPara.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
        NumberPara.style.color = "green"
    }  
    if(numInput.value.length == 0){
        NumberPara.innerHTML = `*Number is required`
    }  
    //  NumberPara.innerHTML = "";
}

function pass(){
    let input2 = document.querySelector(".input2").value;
    let char = /[a-z]/gi.test(input2);
    let number = /\d/gi.test(input2);
    let special = /[!@#$%^&*()_+{}\[\]:;<>,.?/~]/gi.test(input2);

    if(input2 == ""){
       password.innerHTML = "*Password is required";
    }

    if(char && !number && !special){
        password.innerHTML = "*Week Password";
        password.style.color = "red";
    } 
    if(char && number && !special){
        password.innerHTML = "*Medium Password";
        password.style.color = "yellow";
    }else if(char && number && special){
        password.innerHTML = "*Strong Password";
        password.style.color = "Green";
        console.log("w");
    }
 
    
}

// function validetion(){
    sub.addEventListener("click", function(e){
        if(!emialInput() || !pass() || !nameCheck() || !Numeber()){
        }
    })
// // }

function showPassword(){
    let showIcon = document.querySelector(".showpass");
    let inputType = document.querySelector(".input2");
    let hidden = document.querySelector(".hidd"); 
    
    showIcon.addEventListener('click', function(){
            if(inputType.type == "password"){
                inputType.type = "text";
                hidden.classList.toggle('hidden');
                
             }else{
                inputType.type = "password";
                hidden.classList.toggle('hidden');
            }
        })
}

Sign.onclick = function(){
    logo.style.left = "0px";
    logo.style.fontSize = "0px";
    name1.style.display = "block";
    number.style.display = "block";
    con.style.height = "90%";
    signLogo.style.fontSize = "40px";
    signLogo.style.right = "120px";
}



// validetion();
showPassword();
// nameCheck();