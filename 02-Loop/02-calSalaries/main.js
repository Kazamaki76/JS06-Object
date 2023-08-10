let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
function isEmptyobj(object) {
    let isEmpty = true;
    for (let key in obj) {
        isEmpty = false;
    }
    return isEmpty;
}



//(obj) => Number
function calSalaries(object) {

    //1.validate => แยก service 
    if (isEmptyobj(object)) return 0;
    //2.Calculus 
    let sum = 0;
    for (let key in object) {
        //<obj>.<key>
        //<obj>[key]
        console.log(object[key]);
        sum += object[key]
    }
    return sum;
}



let total = calSalaries(salaries);
console.log(total);