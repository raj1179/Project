console.log("js loaded");

var email = document.getElementById('email');
var password = document.getElementById('password');
var loginBtn = document.getElementById('loginBtn');

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function validateData(event) {

	if(isEmpty(email.value) || !regexEmail.test(email.value) || isEmpty(password.value) || isShort(password.value) || !regexPassword.test(password.value)){
		event.preventDefault();
	}

}

function validateEmail(event){
	if(isEmpty(email.value) || !regexEmail.test(email.value)){
		console.log("email is invalid");
		event.target.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
		event.target.style.borderColor = "rgba(255, 0, 0, 1)";
	}else{
		console.log("email is valid.");
		event.target.style.backgroundColor = "rgba(0, 255, 0, 0.25)";
		event.target.style.borderColor = "rgba(0, 255, 0, 0.5)";
	}
}

function validatePassword(event) {
	if(isEmpty(password.value) || isShort(password.value) || !regexPassword.test(password.value)){
		console.log("password is empty");
		event.target.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
		event.target.style.borderColor = "rgba(255, 0, 0, 1)";
	}else {
		console.log("password is valid");
		event.target.style.backgroundColor = "rgba(0, 255, 0, 0.25)";
		event.target.style.borderColor = "rgba(0, 255, 0, 0.5)";
	}

}

function focusColorChange(event){
	console.log(event.type);
	if(event.type == "focus"){
		event.target.style.backgroundColor = "white";
	}else{
		event.target.style.backgroundColor = "lightgray";
	}
}

email.addEventListener("focus", focusColorChange);
email.addEventListener("blur", focusColorChange);
email.addEventListener("blur", validateEmail);
password.addEventListener("focus", focusColorChange);
password.addEventListener("blur", focusColorChange);
password.addEventListener("blur", validatePassword);
loginBtn.addEventListener("submit", validateData);
