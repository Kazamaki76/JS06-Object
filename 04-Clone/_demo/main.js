// const log = console.log;

// log("Object Clone") ;

// const todo = {
//     task : 'Do HW',
//     complete : false,
//     due date: 13-8-2023

// }

// /* const newToDo = todo;
// newToDo.complete = true;
// log(todo.complete) ;

// //clone */
// const newTodo = {}
// // 1. เอาต้นฉบับ มา loop แล้ว assign ทีละ key : value ให้ object ใหม่ 

// for(let key in todo) {

//     //assignทีละ key:value ให้newTodo
//     newTodo[key] = todo[key];
//     //newTodo['task'] = todo["task"] =>"Do HW"
//     //newTodo["complete"] = todo["complete"] => false
//     //newTodo["due date"] = todo["due date"] => "13-8-2023"
// }

// log(newTodo)
// newTodo.complete = true;
// log(newTodo.complete);
// log(todo.complete);






// ################## 2 Object.assign ##############
// Merge override || eval direction = Right to left 
// return address ของ destination (param 1)

//2a
const newTodo = {}
Object.assign(newTodo, todo ) // return address ของ destination (param1)


//2b
const newTodo = Object.assign({}, todo);
log(newTodo);
