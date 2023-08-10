const user = {
    firstName: 'Codecamp',
    lastName: 'Software Park',
    age: 15,

};

// for IN : Loop through object
// For (let <key_variable> in <obj>) {}

for ( let key_variable in user) {
    console.log(key_variable); // auto dynamic assign by JS in <string>
    
    
    // 1st : let key = 'firstname'
    // 2nd : let key = " lastName"
    // 3rd : let key = " age "
    
    console.log(user[key_variable]); // need to  access bu bracket , compute key 
    
    // 1st : user[keylet key = 'firstname'
    // 2nd : let key = " lastName"
    // 3rd : let key = " age "


 }




// 'firstName' in user; // true
// 'age' in user; // true
// 'phone' in user; // false 

 