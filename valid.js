// JavaScript Document

function chkUsr() {

  	var myName = event.currentTarget;
	var ele = document.getElementById("usrpremal");
  	var pos = myName.value.search(/^[a-z0-9A-Z]{6}.*$/);	 
	  if (pos != 0) {
			   ele.style.color="red";
			   ele.innerHTML="Vsaj 6 znakov."; 
	   } 
	   else
	   {
		  ele.innerHTML=""; 
	   }
	}
function chkPass() {

  	var myName = event.currentTarget;
	var ele = document.getElementById("passmal");
  	var pos = myName.value.search(/^[a-z0-9A-Z]{6}.*$/);	 
	  if (pos != 0) {
			   ele.style.color="red";
			   ele.innerHTML="Vsaj 6 znakov."; 
	   } 
	   else
	   {
		  ele.innerHTML=""; 
	   }
	}
function chkPass2() {

	var ele = document.getElementById("passmatch");
	var pass = document.getElementById("password");	
	var pass2 = document.getElementById("password2");
	if (pass.value != pass2.value) {
			   ele.style.color="red";
			   ele.innerHTML="Kodi se ne ujemata."; 
	   } 
	   else
	   {
		  ele.innerHTML=""; 
	   }
	}
function chkEmail() {


  	var myName = event.currentTarget;
	var ele = document.getElementById("mailmal");
  	var pos = myName.value.search(/^[a-z0-9A-Z._-]+@[a-z0-9A-Z._-]*[.]...?$/);	 
	  if (pos != 0) {
			   ele.style.color="red";
			   ele.innerHTML="Not very likely."; 
	   } 
	   else
	   {
		  ele.innerHTML=""; 
	   }
	}