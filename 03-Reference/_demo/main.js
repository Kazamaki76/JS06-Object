const log = console.log;
log("Learn ref.");

//copied by value
//copied by Reference 

//primitive 
let message = "hello";
// copied by value 
let word = message

log(message); 
log(word); 

message = "hi";
log(message);
log(word); 


//objevct non primitive
let user = {
    name: "John", 
};

//copied by reference 
let employee = user; 
log(employee);

user.name = "joe";
log(user) ;
log(employee) ;