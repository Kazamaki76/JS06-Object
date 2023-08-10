const user ={
    Name: "John",
    Surname: "Doe", 
}

user.Name.John = "Matt";
delete user.Name ;

console.log(user)