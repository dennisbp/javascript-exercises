function winBattle(bool){
    return bool;
}

//#1 change this function into a ternary and assign it to variable called experiencePoints
var experiencePoints = 0;
var gbool;
function addExperiencePoints() {
    var lexperiencePoints = 0;

// condition ? expr1: expr2;
    winBattle(gbool) ? lexperiencePoints = 15: lexperiencePoints = 5;
    console.log(lexperiencePoints);
    experiencePoints = Number(experiencePoints) + Number(lexperiencePoints);
    // console.log(lexperiencePoints);

    // if (winBattle()) {
    //     return 10;
    // } else {
    //     return 1;
    // }


}

//Using this function, answer the questions below:
   var whatHappens;
function moveCommand(direction) {
 
    switch (direction) {
        case "forward":
            gbool = false;
            addExperiencePoints();
            break;
            whatHappens = "you encounter a monster";

        case "back":
            whatHappens = "you arrived home";
            gbool = false;
            addExperiencePoints();
            break;
            break;
        case "right":
            gbool = false;
            addExperiencePoints();
            return whatHappens = "you found a river";
            break;
        case "left":
            gbool = true;
            addExperiencePoints();
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            gbool = false;
            addExperiencePoints();
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when 
moveCommand("forward"); //Null
console.log("Q2 None/undefined === " + whatHappens);     
whatHappens = "";
//#3 return value when 
moveCommand("back");
console.log("Q3 you arrived home === "+ whatHappens);   
whatHappens = "";
//#4 return value when 
moveCommand("right");
console.log("Q4 you found a river === "+ whatHappens);   
whatHappens = undefined;
//#5 return value when 
moveCommand("left");
console.log("Q5 None/undefined === "+ whatHappens);  

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!


console.log(experiencePoints);
