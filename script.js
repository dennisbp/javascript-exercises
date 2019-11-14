var database = [ 
{
	username: "dennis",
	password: "dennis"
},
{
	username: "melo",
	password: "melo"
}
];

var	newsFeed = [
{
	username:"melo",
	timeline:"hellloooo"
},
{
	username:"dhea",
	timeline:"I'll be there soon" 
},

{
	username:"dennis",
	timeline:"I'm learning javascript!" 
},

{
	username:"dennis",
	timeline:"This is insane!" 
}

];

var userNamePrompt = prompt("What is your username?");
var passPrompt = prompt("What is your password?");
var flag;

function signIn(username,password) {
	// body...
	// database.forEach(function(userpass) {
	// if (username === userpass.username &&
	// 	password === userpass.password) {		
	// 	flag = true;
	// 	// return (true);
	// 	return;
	// 	} else
	// 	console.log("test false password");
	// })
	


	for (var i = 0; i < database.length; i++) {

		if (username === database[i].username &&
			password === database[i].password ) {
			// flag = true;
			return true;
			break;
		} else{
			console.log(database[i]);
		}

	}
}

// var flagCheck = signIn(userNamePrompt,passPrompt);
// 	console.log(flagCheck);
if ( signIn(userNamePrompt,passPrompt)) {
	// console.log("password correct");
	newsFeed.forEach(function(user) {

	if (user.username === userNamePrompt) {
		console.log(user.timeline);
	} else { 
		// console.log (user.username, userNamePrompt);
			}
	})

} else {
	console.log("Please enter correct username and password.")
}