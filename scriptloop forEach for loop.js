var todos = [
	"clean", 
	"brush", 
	"exercise",
	"study",
	"eat" 
];

var todosImp = [
	"clea!", 
	"brush!", 
	"exercise!",
	"study!",
	"eat!" 
];

// for (var i = Things.length - 1; i >= 0; i--) {
// 	Things[i]
// }

var todoCounter = todos.length;
for (var i=0; i < todoCounter; i++) {
	console.log(todos[i], i);
	// todos.pop();
}


function showTodo(todo, i){
	console.log(todo, i);
}

todos.forEach(showTodo)
// todos.forEach(function(todo, i) {
// 	console.log(todo, i);
// })

todosImp.forEach(showTodo);




var counter1 = 10;
// while ( counter1 > 0 ) {
// 	console.log(counter1);
// 	counter1--
// }

var counter2 = 10;
// do {
// 	console.log(counter2);
// 	counter2--;
// } while (counter2 > 0);

