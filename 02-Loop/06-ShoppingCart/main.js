// Sub program 1 = Input  (รับinput .ช้ prompt)
//อันนี้คือ  hard code
// let name ="hermes";
// let quantity =  20;
// let price = 500_000;
// let discount = 0.1 ;

//อันนี้ไม่ hardcodr
let name = prompt('enter Product name ');
let quantity =  prompt('enter Quantity');
let price = number(prompt('Enter price'));
let discount = prompt('enter discount') * 1;



// SubProgram 2 : create object 

// const = product ={
//     name: name // name: "hermes"
//     quantity: quantity, // q : 20
//     price: price // price : 500000
//     discount: discount // discount 0.1
// }

// เมื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็บ value สามารถยุบ syntax (Property shorthand)
const product = {
    name,
    quantity,
    price,
    discount,
}



// SUbProgram 3 : 

/* discount 10% = จ่าย 90% = ่าย 0.9
price, quantity, dicsount => totalprice
*/
function calcPrice(price, quantity, dicsount) {
    let totalPrice = price * quantity * (1-discount) ;
    return totalPrice
}

// let result = calcPrice(product.price, priduct.quantity, product.discount);
// log(result)

function calcPrice(productsObj) {
    let price = productsObj.price;
    let quantity = productsObj.quantity;
    let discount = productsObj.discount ? productsObj.discount : 0;
    return price * quantity *(1 - discount);
}
let result = calcPrice(products);
// let result = calcPrice({name, quantity, price, discount,})
log(result);
