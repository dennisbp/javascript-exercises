// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
// const array = [ 1 , 2 , 3, 4 ];

// const newArray = array.forEach(user => console.log(user.username + '!'));
// let newArray = []
// let newArray = array;

const newArray = array;
newArray.forEach(user => {
  let { username } = user;
  // return user.username + '!';
  // newArray = user.username + '!';
  user.username = username + '!';

   // newArray.push(user);
  // return user.username + '!'; 
})
console.log('newArray', newArray); 


//Create an array using map that has all the usernames with a "? to each of the usernames
// const mapArray = array.map(user => console.log(`${user.username}"?`) );
// const mapArray = array.map(user => {
//   let { username } = user;
//   return  username + "?";

// })
// console.log(mapArray); 

//Filter the array to only include users who are on team: red
// const filterArray = array.filter(user => user.team = 'red');
const filterArray = array.filter(user => {
  return user.team === 'red'
  })
console.log('filterArray', filterArray);

//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
  return acc + user.score
}, 0);
console.log(total);


// (1), what is the value of i?
  // index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const pureArray = arrayNum.map((num, i) =>{
	// console.log(num, i);
	// alert(num);
	return num * 2;
})
console.log('pureArray' , pureArray);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
//Create an array using map that has all the usernames with a "? to each of the usernames
const changeArray = array.map((user) =>{ 
  user.items = user.items.map(item => {
    return item + '!'
  });
  return user
 })
console.log(changeArray);
console.log(array)






