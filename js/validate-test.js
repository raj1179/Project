var email = document.getElementById('email');
var password = document.getElementById('password');
var loginBtn = document.getElementById('loginBtn');

// const regex_Email = "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;";
// const regex_Password = "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/";

function isEmpty(data){
	let flag = false;
	// if(data == null || data == ""){
	// 	return true;
	// }else{
	// 	return false;
	// }

	(data == null || data == "") ? flag = true : flag = false;

	return flag;
}

function isShort(data) {

	if(data.value < 6){
		return true;
	}else{
		return false;
	}

}
