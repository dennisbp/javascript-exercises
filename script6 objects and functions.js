var database = [ 
{
	username: "dennis",
	password: "unknown"
}
];

var	newsFeed = [
{
	username:"Melo",
	timeline:"hellloooo"
},
{
	username:"Dhea",
	timeline:"I'll be there soon" 
}
];


var userNamePrompt = prompt("What is your username?");
var passPrompt = prompt("What is your password?");

 function signIn(username,password) {
	// body...
	if (username === database[0].username && 
		password === database[0].password) {

		console.log(newsFeed);

	} else {
		alert("Please enter correct username and password.")
	}

}


signIn(userNamePrompt,passPrompt);