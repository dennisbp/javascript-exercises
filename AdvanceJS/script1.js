// condition ? expr1: expr2;


function isUserValid(bool){
	return bool;
}

var answer = isUserValid(true) ? "You may Enter": "Access Dennied";

var auto = "Your Account is" + (isUserValid(true) ? " valid You may Enter": "Access Dennied");

console.log(auto);


function handOrientation(parm){
var HOrientation;
	switch(parm){
		case "Left":
			console.log(parm + " Handed");
			break;
		case "Right":
			console.log(parm + " Handed");
			break;
		case "Ort":
			console.log("Orthodox");
			break;
		default:
			console.log("Enter a valid orientation");
	}
	// return HOrientation;
}

handOrientation("Left");
handOrientation("Right");
handOrientation("Ort");
handOrientation("Lefta");
