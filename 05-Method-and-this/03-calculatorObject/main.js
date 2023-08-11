
let calculator = {
 
    read () {
        let num1 = +prompt("Number 1 ");
        let num2 = +prompt("Number 2");
    },

    sum () {
        return num1 + num2;
    },

    mul () {
        return num1 * num2;
    }
  };
calculator.read();
alert(calculator.sum());
alert(calculator.mul());