window.onload = function() {
	var th = document.getElementsByTagName("th");
	var tr = document.getElementsByTagName("tr");
	
	// TH Click Part
	for(i=0;i<th.length;i++)
	{		
		(function(x){
			th[i].onclick = function(){
				clearBG();
				thClicked(x);
			}
		})(i);
	}
	
	// TD Click Part
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
