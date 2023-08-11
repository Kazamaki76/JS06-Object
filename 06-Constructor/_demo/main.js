const log = console.log;
log("constructor Function");
const dev1 = {
    name: "john",
    age: 32,
    role: "dev",
    salary: 40_000,
    dev: function () {
        console.log("im develop something");
    },
};



//###   Objective Creator == constructor function 
// 1 implicit reate this =
function Developer(name, age) {
    this.name = name;// name : kanut
    this.age = age; // name: kanut age: 23
    this.role = "dev" //name: kanut age: 23 role: dev
    this.salary = 40_000; //name: kanut age: 23 role: dev salary: 40000
    this.dev = function () {
        console.log("im develop something");
    };

    // 2 implicit retusn this 
    // return result 
}


//3 this === instance

const dev2 = new Developer("kanut", 23);
log(dev2);