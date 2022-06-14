console.log("login-js loaded");

var email = document.getElementById('email');
var password = document.getElementById('password');
var loginBtn = document.getElementById('loginBtn');
var flag = false;

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function validateEmail(event){
	if(isEmpty(email.value) || !regexEmail.test(email.value)){
		flag = false;
		event.target.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
		event.target.style.borderColor = "rgba(255, 0, 0, 1)";
	}else{
		flag = true;
		event.target.style.backgroundColor = "rgba(0, 255, 0, 0.25)";
		event.target.style.borderColor = "rgba(0, 255, 0, 0.5)";
	}
}

function validatePassword(event) {
	if(isEmpty(password.value) || isShort(password.value) || !regexPassword.test(password.value)){
		flag = false;
		event.target.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
		event.target.style.borderColor = "rgba(255, 0, 0, 1)";
	}else{
		flag = true;
		event.target.style.backgroundColor = "rgba(0, 255, 0, 0.25)";
		event.target.style.borderColor = "rgba(0, 255, 0, 0.5)";
	}
}

function validateData(event) {
	if(flag == false){
		event.preventDefault();
	}
}

email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
loginBtn.addEventListener("submit", validateData);
