console.log ('learn object') ;

/* Datatype
primitive : boolean, number , string, .......
nonprimitive : Object 


##### OBJECT Declaration #############
{} stand for Object / scope  */
// {record_1 , record_2, record_3 , ....}
// each record => <key_name>:<value>
/* <value> any Datatype */
// <key_name> Datatype : string
// record === property (คุณสมบัติ สิ่งที่มี) == key-value pair

let user = {
    firstName: 'kanut', 
    lastName: 'kummuang ',
    age:23,
    isAdmin: true,
    'like human': true,
};

// console.log(user); 


// ####### ACCESS MODIFY DELETE ##########

// every action need <key name> !!
// Dot Notation <obj> < keyname> === <value>
//restriction  : เข้าถึว key ที่มี space bar ไม่ได้
// ถ้าไม่มี record =>  return to undefine
// ข้อจำกัด : เข้าถึง key ืี้มี space ไม่ได้
console.log(user);
console.log(user.firstName === 'kanut');
console.log(user.lastName );
console.log(user.age );
console.log(user.isAdmin);

// modify, up date 
// syntax : <obj> <key_name = new value
user.firstname = 'pravit'
user.age = 25;
user.age += 2;
user.age++;
// console.log(user.age);

// ##### ADD #$$$#######################
user.address = 'bangkok'
console.log(user);


//###### Delete #######
//SYNTAX : delete <obj> <key_name>

delete user.isAdmin;
console.log(user);


// ############NESTED Object ##############

const employee = {
    fullName: 'John Doe',
    salary: 500_000,
    address: {
        district : 'phaya thai',
        province : 'bangkok',
        country : 'thailand',
    },
};


// access
console.log(user.address);
console.log(employee.salary);
console.log(employee.address.province);
console.log(employee.address.district);
console.log(employee.address.village);

// ถ้าอยากเปลี่ยนก็ทำตามอันนี้ 
employee.address.province = 'nontha';
delete employee.address.country;





//prevent crash 
//dot ใช้กับ object เท่านั้น || <obj> <key>
// ห้ามมมมมมมมมมมมมมมมมมมมมม ใช้กับ undefined|| <undefined>.<key> 
// วิธีแก้ optional chaining => <defined>?.<key>
console.log(employee.addr);
// console.log(employee.addr.province); 
/* cannot read property of undefine มันจะมองเป็น undefined.province */
console.log(employee.addr?.province);
console.log(employee.address?.province);
console.log(employee.address?.village);

//4 check key

const product = {
    id: 277,
    name: 'Sony',
    Price: 43000,
    //dicsount: 0.1,
}

console.log(product.discount); //undefined

//IN operator
// Syntax : <key_name_string> in <obj>
console.log('name' in product);
console.log('discount' in product);

//method hasOwnProperty
//Syntax : < obj>. hasOwnProperty(<key_name) => boolen
// console.log(product.hasOwnProperty('name'));
// console.log(product.hasOwnProperty('discount'));






//############ 5 Bracket Notation #############

/* syntax : <obj> [ "key_name_string"]
1 ถ้าใช้ bracket เมื่อไหร่ ชื่อkey ข้างในต้องเป็น string
2 ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ sting // compute key 
access key value ผ่านชื่อตัวแปรได้  */

console.log(product.id) ;
console.log(product['id']); 

//console.log(product. is mobile) crash
console.log(product['is mobile']);

product['name'] = 'Iphone-15proMax';
// console.log(product)

let aaaaa = 'name';
console.log(product['name']);
console.log(product[aaaaa]);
console.log(product.aaaaa);



let username = 'codecamp';
let age = 15; 
let user {
    
}