var attempt = 3; 

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "1234" && password == "123"){
alert ("Login successfully");
window.location = "index2.html";
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");


if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("Gumb").disabled = true;
return false;
}
}
}