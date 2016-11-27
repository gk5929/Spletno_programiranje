
function addRow(t,tt,ttt,tttt)
{
         if (!document.getElementsByTagName) return;
         tabBody=document.getElementsByTagName("TBODY").item(0);
         row=document.createElement("TR");
         cell1 = document.createElement("TD");
         cell2 = document.createElement("TD");
		 cell3 = document.createElement("TD");
		 cell4 = document.createElement("TD");
         textnode1=document.createTextNode(t);
         textnode2=document.createTextNode(tt);
		 textnode3=document.createTextNode(ttt);
		 textnode4=document.createTextNode(tttt);
         cell1.appendChild(textnode1);
         cell2.appendChild(textnode2);
		 cell3.appendChild(textnode3);
		 cell4.appendChild(textnode4);
         row.appendChild(cell1);
         row.appendChild(cell2);
		 row.appendChild(cell3);
		 row.appendChild(cell4);
         tabBody.appendChild(row);
       
   
}
		
function change(color) {
	 event.srcElement.style.backgroundColor=color;
	 }
