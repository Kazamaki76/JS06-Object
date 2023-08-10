// init 
const fruit = {}



const TERMINATE = "stop"
const fruit = {};



//accept input
let key = "apple"
let value = 10;

do{
    key = prompt ("enter fruit")
    value = +prompt("enter quantity")


    if (value == 1 ){
        fruit[key] = value;
    } else if (value > 1 ){
        
    }
} while( key != TERMINATE && value !=TERMINATE )





// update fruit
// fruit.key = value; // { key : 10 }
// fruit["apple"] = value; {apple : 10}
if(value == 1 ){
    fruit[key] = value;
} else if (value > 1 ){
    fruit[`${key}`] = value;
}



// fruits[key] = value;
console.log(fruit);