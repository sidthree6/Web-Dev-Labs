window.onload = function() {
	
	document.getElementById("generate").onclick = function(){
	
	var table = document.createElement("table");
	document.getElementById("spreadsheet").appendChild(table);
	document.getElementsByTagName("table")[0].style.marginTop = "15px";
	var tr = document.createElement("tr");
	document.getElementsByTagName("table")[0].appendChild(tr);
	
	var th = document.createElement("th");
	document.getElementsByTagName("tr")[0].appendChild(th);
	document.getElementsByTagName("th")[0].innerHTML = "Student ID";
	var th = document.createElement("th");
	document.getElementsByTagName("tr")[0].appendChild(th);
	document.getElementsByTagName("th")[1].innerHTML = "Asmt 1";
	var th = document.createElement("th");
	document.getElementsByTagName("tr")[0].appendChild(th);
	document.getElementsByTagName("th")[2].innerHTML = "Asmt 2";
	var th = document.createElement("th");
	document.getElementsByTagName("tr")[0].appendChild(th);
	document.getElementsByTagName("th")[3].innerHTML = "Asmt 3";
	
	
	var th = document.getElementsByTagName("th");
	for(i=0;i<th.length;i++)
	{				
		(function(x){
			th[i].onclick = function(){
				clearBG();
				thClicked(x);
			}
		})(i);
	}
	
		var xmlHttpRequest = getXMLHttpRequest();
		xmlHttpRequest.onreadystatechange = function() {
			if ((xmlHttpRequest.readyState == 4) && 
				(xmlHttpRequest.status == 200)) {
				var row = xmlHttpRequest.responseText.split('\n');
								
				for(i=0;i<row.length;i++)
				{
					var tr = document.createElement("tr");
					document.getElementsByTagName("table")[0].appendChild(tr);
					
					var cell = row[i].split(',');
					
					for(j=0;j<cell.length;j++)
					{
						var td = document.createElement("td");
						document.getElementsByTagName("tr")[i+1].appendChild(td);
						document.getElementsByTagName("tr")[i+1].getElementsByTagName("td")[j].innerHTML = cell[j];
					}
				}
				
				var tr = document.getElementsByTagName("tr");
				for(i=0;i<tr.length;i++)
				{
					var td = document.getElementsByTagName("tr")[i].getElementsByTagName("td");
					
					for(j=0;j<td.length;j++)
					{
						(function(x,y){
							td[j].onclick = function(){
								clearBG();
								tdClicked(x,y);
							}
						})(i,j);
					}
				}
								
			}
		 };
		 xmlHttpRequest.open('GET', 'ajax.csv', true);
		 xmlHttpRequest.send();
	};
	
}


function clearBG()
{
	var td = document.getElementsByTagName("td");
	for(i=0;i<td.length;i++)
	{
		td[i].style.backgroundColor = "white";
	}
}

function tdClicked(row,cell)
{
	if(cell == 0)
	{
		var td = document.getElementsByTagName("tr")[row].getElementsByTagName("td");		
		for(i=0;i<td.length;i++)
		{
			document.getElementsByTagName("tr")[row].getElementsByTagName("td")[i].style.backgroundColor = "lightBlue";
		}
	}
	else
	{
		document.getElementsByTagName("tr")[row].getElementsByTagName("td")[cell].style.backgroundColor = "lightBlue";
	}
}

function thClicked(x)
{
	var tr = document.getElementsByTagName("tr");
	
	for(i=0;i<tr.length;i++)
	{
		var td = document.getElementsByTagName("tr")[i].getElementsByTagName("td");
		for(j=0;j<td.length;j++)
		{			
			if(x == j)
				td[j].style.backgroundColor = "lightBlue";
		}
	}
}

function getXMLHttpRequest() {
   var request;
   if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
   } else {
      request = new ActiveXObject('Microsoft.XMLHTTP');
   }
   return request;
}