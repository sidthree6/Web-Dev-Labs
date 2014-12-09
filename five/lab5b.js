var messages = "";

function initialize()
{
	var chatDOM = document.getElementById("chat");
	document.getElementById("chat").getElementsByTagName("img")[0].onclick = function() { chatClicked(); };
		
	// Create Popup Box with DOM
	var chatDiv = document.createElement("div");
	document.body.appendChild(chatDiv);
	chatDiv.style.visibility = "hidden";
	chatDiv.className = "popup";
	chatDiv.id = "popup";
	
	// Create empty DIV where user messages will be stored and Div for Input Box, then append it to Popup Block we created earlier
	var msgDIV = document.createElement("div");
	msgDIV.id = "msgDIV"; // Set the id of the DIV
	document.getElementById("popup").appendChild(msgDIV);
	
	var inputDIV = document.createElement("div");
	inputDIV.id = "inputDIV";
	document.getElementById("popup").appendChild(inputDIV);
	
	// Insert textbox inside Input Div we created
	inputDIV.innerHTML = 'Chat : <input type="text" id="chatSubmit" size="45" onkeydown="enterPressed(event);">';
	
	
}

function chatClicked()
{
	document.getElementById("popup").style.visibility = "visible";
}

function enterPressed(e)
{
	// When Enter is pressed
	if(window.event.keyCode==13)
	{	
		//  Apeend what user entered with already existing variable we created	
		var iValue = document.getElementById("chatSubmit").value;
		messages += "User: "+iValue+"<br/>\n";
		// Insert messaged in the DIV
		document.getElementById("msgDIV").innerHTML = messages;
		
		// Set the value of input box to empty
		document.getElementById("chatSubmit").value = "";
		
		// Have 15px margin on bottom of div
		document.getElementById("msgDIV").style.marginBottom = "15px";
	}
}
