window.onload = pageLoad;
function pageLoad(){
	var ClickSubmit = document.getElementById("myForm");
    ClickSubmit.onsubmit = validateForm;
}
function validateForm() {
    var result = true;
    var Errormsg = document.getElementById("errormsg");
    
    var FirstName = document.forms["myForm"]["firstname"];

    var LastName = document.forms["myForm"]["lastname"];
    if(LastName.value == "")
    {
        Errormsg.innerText += "RequiredLastName, ";
        result = false;
    }
    var Gender = document.forms["myForm"]["gender"];
    if(Gender.value == "")
    {
        Errormsg.innerText += "RequiredGender, ";
        result = false;
    }
    var Date = document.forms["myForm"]["bday"];
    if(Date.value == "")
    {
        Errormsg.innerText += "RequiredBirthDate, ";
        result = false;
    }
    var Email = document.forms["myForm"]["email"];
    if(Email.value == "")
    {
        Errormsg.innerText += "RequiredEmail, ";
        result = false;
    }
    var Username = document.forms["myForm"]["username"];
    if(Username.value == "")
    {
        Errormsg.innerText += "RequiredUsername, ";
        result = false;
    }
    var Password = document.forms["myForm"]["password"];
    
    if( Password[0].value != Password[1].value) 
    {
        alert("Password and Retype are not equal");
        result = false;
    }

    return result;
}