//Advance Array
// var array = [1 , 2 , 3, 4 ];


const array = [ 1 , 2 , 3, 4 ];
const double = [];
const newArray = array.forEach((num) =>{
	double.push(num * 2);
})

console.log('forEach', double);

//map
// const mapArray = array.map((num) =>{
// 	return num * 2
// });
const mapArray = array.map(num => num * 2);

console.log('mapArray', mapArray);

//filter
// const filterArray = array.filter((num) =>{
// 	return num > 2
// });
const filterArray = array.filter(num => num > 2);
console.log('filterArray', filterArray);

//reduce
const reduceArray = array.reduce((accum,num) =>{
	return accum + num
},0);

console.log('reduceArray', reduceArray);
