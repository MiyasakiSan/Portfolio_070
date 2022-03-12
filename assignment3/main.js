var Topic1;
var comment1;
var comment2;

window.onload = GetNow;
function GetNow()
{
    Topic1 = document.getElementById("topic1");
    comment1 = document.getElementById("comment1");
    comment2 = document.getElementById("comment2");
}
function postFunction()
{
    var TextInput = document.getElementById("text1").value;
    if(Topic1.innerHTML == "")
    {
    Topic1.innerHTML = TextInput;
    }
    else if(comment1.innerHTML == "")
    {
    comment1.innerHTML = TextInput;
    }
    else if(comment2.innerHTML == "")
    {
    comment2.innerHTML = TextInput;
    }
    document.getElementById("text1").value = "";
}
function clearFunction()
{
    Topic1.innerHTML = "";
    comment1.innerHTML = "";
    comment2.innerHTML = "";
}