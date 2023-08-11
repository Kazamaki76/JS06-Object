// const log = console.log 
// log("methos and this keyword");


// // each record => called property 
// //each property => <key>:<value>

// //some record => <key>:<FN>
// //called method == ความสามารถของ object 
// function devWebsite () {
//     console.log("I am working");
// }



// const programmer = {
//     name: "kanut",
//     age : 30,
//     dev : devWebsite, 
// };


// function devWebsite() { 
//     console.log("i amd working");
// }

// log(programmer.name);
// log(programmer.age)

// //programmer.dev }}|| devWebsite
// //syntax : < obj > .<method> ()
// programmer.dev(1)
// // เพิ่ม metod ให่ peogrammer  







// ############# 
// 2 alternative syntax 
// #######

const programmer ={
    name:"john",
    age:30,
    dev: function () {
        console.log("I am working");
    }
    meet: () => console.log( " i am meeting "),
    sleep() { console.log ("I am sleeping" );
}
};
// sleep : () => console.log("I am sleeping")

programmer.dev();
programmer.meet();
programmer.sleep();





/* MINI LAB
สร้าง object ของตัวเอง
ระบุคุณสมบัติของตัวเอง 4 ข้อ 
ระบุความสามารถ 4 ข้อ
key : namedFunctiob
key :  
key : namedFunctiob

*/


const me ={
    name: "Zenos",
    hair:"black" ,
    eye : "brown",
    gender: "male"
    myEx: (john, jame ),
    football: playFootball.age
    sleepAllday: function ( ) {

    }
    eatAllNIHT: () => console.loh("I am eat all the time"),
    focu() {
        console.log(" i am working in focus mode")sgv
    };

};