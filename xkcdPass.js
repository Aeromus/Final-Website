var field = document.createElement("Div");

var genButton = function(me) {
    
    //List of possible words to pull from
    var library =   ["Phone", "Correct", "Horse", "Battery", "Staple", "Bottle", "Java" , "Eagle", "Wire", "Key", "Remove", "Hack", "Chair", "Watch", "Outlet", "Table", "Fire", "Emblem", "Steel", "Glass", "Sticker", "Car", "Mountain" , "String", "City", "Game", "Final", "Day", "Escape", "Stick", "Other", "Snake"]  
    
    var password = "";
    
    
    //If there was a previous Password Clear it
    while(field.firstChild){
        
    field.removeChild(field.firstChild);
    
    }
    
    //Generate the Password
    for(var i = 0; i < 4; i++){
        
         password +=  library[Math.floor(Math.random() * library.length)];
    }
    
    //This was mostly for testing purposes
    console.log(password);
    
    //Append the password to field
    var passfield = document.createTextNode(password);
    field.appendChild(passfield);
    
    //CSS Formating
    field.style.border = "5px Solid Green";
    field.style.fontFamily = "Courier";
    field.style.fontSize = "25pt";
    field.style.fontStyle = "monospace";
    field.style.borderRadius = "25px";
    field.style.textAlign = "center";
    field.style.alignmentBaseline = "Center";
	field.style.paddingLeft = "50px"
    
    //Append to Document
   me.parentElement.appendChild(field);
    

}