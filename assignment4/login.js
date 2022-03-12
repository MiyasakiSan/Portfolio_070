window.onload = loginLoad;
function loginLoad(){
	var ClickSubmit = document.getElementById("myLogin");
    ClickSubmit.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;

	const urlParam = new URLSearchParams(queryString);

	const Username = urlParam.get('username');

	const Password = urlParam.get('password');


	var LoginUsername = document.forms["myLogin"]["username"].value;
	var LoginPassword = document.forms["myLogin"]["password"].value;

	if(LoginUsername != Username || LoginPassword != Password)
	{
		alert("Id or Password are wrong");
	}else
	{
		alert("Login Complete");
	}
	return false;
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			