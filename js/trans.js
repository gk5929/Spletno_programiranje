function trans(lang){
	
	 xmlDoc=loadXMLDoc('prevod.xml');
	 var x=xmlDoc.getElementsByTagName("translation");
		  for (i=0 ; i<x.length ; i++)
			  { 
	 			 var t=document.getElementById(x[i].getAttribute('id'));
	 			  if(t){
				 	 t.innerHTML=(x[i].getElementsByTagName(lang)[0].childNodes[0].nodeValue);
				 }
			  }
}