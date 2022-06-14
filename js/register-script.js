console.log("login-js loaded");

var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
var registerBtn = document.getElementById('registerBtn');
var flag = false;

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const regexUsername = /^[a-zA-Z0-9]{3,20}$/;

function validateUsername(event){
	if(isEmpty(username.value) || !regexUsername.test(username.value)){
		flag = false;
		event.target.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
		event.target.style.borderColor = "rgba(255, 0, 0, 1)";
	}else{
		flag = true;
		event.target.style.backgroundColor = "rgba(0, 255, 0, 0.25)";
		event.target.style.borderColor = "rgba(0, 255, 0, 0.5)";
	}
}

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

function validatePassword(event){
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

function validateConfirmPassword(event){
	if(isEmpty(confirmPassword.value) || confirmPassword.value != password.value){
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

username.addEventListener("blur", validateUsername);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);
registerBtn.addEventListener("submit", validateData);