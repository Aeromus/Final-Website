var field = document.createElement("Div");

var cipherIt = function(me) {
    
    var shift = document.getElementById("offset").value;
    //console.log(shift);
    var message = document.getElementById("message").value;
    //console.log(message);
    
    shift = 25 - (90 - shift.charCodeAt(shift));
    //console.log(shift);
  
    
    var newMessage = "";
    
    //Erase Any Previous Message
    while(field.firstChild){
        
    field.removeChild(field.firstChild);
    
    }
    
    for(var i = 0; i < message.length; i++){
        
        var currentChar = message.charCodeAt(i);
        
        //Do Upper Case Shifts
        if( currentChar >= 65 && currentChar <= 90)
        {
            newMessage += String.fromCharCode((currentChar - 65 + shift) % 26 + 65);
        }
        
        //Do Lower Case Shifts
        else if(currentChar >= 97 && currentChar <= 122)
        {
            newMessage += String.fromCharCode((currentChar - 97 + shift) % 26 + 97); 
        }
        
        //Ignore Spaces and Symbols
        else
        {
            newMessage += message.charAt(i);
        }
    }
    
    //This was mostly for testing purposes
    console.log(newMessage);
    
     //Append the password to field
    var pasteMessage = document.createTextNode(newMessage);
    field.appendChild(pasteMessage);
    
    //CSS Formating
    field.style.border = "5px Solid Green";
    field.style.fontFamily = "Courier";
    field.style.fontSize = "12pt";
    field.style.fontStyle = "monospace";
    field.style.borderRadius = "25px";
    field.style.textAlign = "center";
    field.style.alignmentBaseline = "Center";
	field.style.paddingLeft = "50px"
    
    //Append to Document
   me.parentElement.appendChild(field);
}
