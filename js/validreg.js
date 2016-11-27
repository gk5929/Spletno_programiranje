// JavaScript Document

      var userNode = document.getElementById("username");
	  var passNode = document.getElementById("password");
	  var pass2Node = document.getElementById("password2");
	  var emailNode = document.getElementById("email");
      userNode.addEventListener("change", chkUsr, false);
	  passNode.addEventListener("change", chkPass, false);
      pass2Node.addEventListener("change", chkPass2, false);
      emailNode.addEventListener("change", chkEmail, false);


